import { FC, useState } from "react";
import FloatingInput from "../../components/input/FloatingInput";
import { IField } from "../../interfaces/genricModule/iform.interface";

const GenericField: FC<{ className?: string, field: IField, object: any | null, setObject?: (object: any | null) => void, onChange?: (field: string, value: any) => void }> = ({
    field, object, setObject, onChange, className
}) => {

    /** LOCAL STATE */
    const [autocompleteSearch, setAutocompleteSearch] = useState<string>('');
    const [autocompleteResults, setAutocompleteResults] = useState<any[]>([]);

    const onSearchAutocomplete = (field: IField, value: string) => {
        setAutocompleteSearch(value);
        if (field.autocompleteGetter !== undefined) {
            field.autocompleteGetter(10, 0, { search: value })
                .then((response) => {
                    if (response.data.results) setAutocompleteResults(response.data.results);
                })
                .catch(err => {
                    console.log('error:', err);
                    setAutocompleteResults([]);
                });
        }
    };

    const selectAutocompleteItem = (field: IField, value: any) => {
        if (field.onChange !== undefined) {
            const newData = field.onChange(object, value);
            if (setObject !== undefined) setObject(newData);
        }
        else if (onChange !== undefined) onChange(field.field, value);
        setAutocompleteResults([]);
        const searcValue = field.displayValue !== undefined ? field.displayValue(value) : (value.name || value.title || value.description);
        setAutocompleteSearch(searcValue);
    };

    const checkExist = (value: any) => {
        return value !== null && value !== undefined;
    };

    const getValue = (field: IField) => {
        let value: any = null;
        const fields = field.field?.split('.');
        if (object) {
            switch (fields.length) {
                case 1:
                    if (checkExist(object)) value = object[fields[0]];
                    break;
                case 2:
                    if (checkExist(object) && checkExist(object[fields[0]])) value = object[fields[0]][fields[1]];
                    break;
                case 3:
                    if (checkExist(object) && checkExist(object[fields[0]]) && checkExist(object[fields[0]][fields[1]])) value = object[fields[0]][fields[1]][fields[2]];
                    break;
                case 4:
                    if (checkExist(object) && checkExist(object[fields[0]]) && checkExist(object[fields[0]][fields[1]]) && checkExist(object[fields[0]][fields[1]][fields[2]])) {
                        value = object[fields[0]][fields[1]][fields[2]][fields[3]];
                    }
                    break;
                default:
                    break;
            }
            if (field.displayValue) value = field.displayValue(value);
        }
        return value;
    };

    return (
        <>
            {
                field.type !== 'autocomplete' &&
                <FloatingInput
                    className={className}
                    label={`${field.label || ''} ${field.required ? '*' : ''}`}
                    type={field.type || "text"}
                    value={getValue(field)}
                    onChange={(v) => {
                        if (field.onChange !== undefined) {
                            const newData = field.onChange(object, v);
                            if (setObject !== undefined) setObject(newData);
                        }
                        else onChange(field.field, v);
                    }} />
            }
            {
                field.type === 'autocomplete' &&
                <div className={`${className} input-autocomplete`}>
                    <FloatingInput
                        label={`${field.label || ''} ${field.required ? '*' : ''}`}
                        type={field.type || "text"}
                        value={autocompleteSearch}
                        onChange={(v) => onSearchAutocomplete(field, v)}
                    />
                    {
                        Boolean(autocompleteSearch && autocompleteResults?.length) &&
                        <ul>
                            {
                                autocompleteResults?.map(item => {
                                    return (
                                        <li key={`autoc-${field.field}-${item.id}`}
                                            onClick={() => selectAutocompleteItem(field, item)}>
                                            {field.displayValue !== undefined ? field.displayValue(item) : (item.name || item.title || item.description)}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>
            }
            <small style={{ color: "red" }}>{object ? object[field.field + '_error'] : ''}</small>
        </>
    );
}

export default GenericField;
