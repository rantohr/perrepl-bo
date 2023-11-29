import React, { FC, useEffect, useState } from "react";
import FloatingInput from "../../components/input/FloatingInput";
import { updateObjectField } from "../../functions/objectHandler";
import { Button } from "flowbite-react";
import { useSnackbar } from 'notistack';
import { IField, IForm } from "../../interfaces/genricModule/iform.interface";

const GenericForm: FC<{ formData: IForm }> = ({ formData }) => {

    const { enqueueSnackbar } = useSnackbar();
    const { initialData, onConfirm, onCancel, onValidate, fields, dividers } = formData;

    /** LOCAL STATE */
    const [data, setData] = useState<any | null>(null);
    const [autocompleteSearch, setAutocompleteSearch] = useState<string>('');
    const [autocompleteResults, setAutocompleteResults] = useState<any[]>([]);

    useEffect(() => {
        if (initialData) {
            setData(initialData);
        }
    }, [initialData]);

    /** FORM MANIPULATON */
    const updateField = (field: string, value: any) => {
        updateObjectField(data, field, value, setData);
    };

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
        console.log('searcValue cccccc', value)
        if (field.onChange !== undefined) {
            const newData = field.onChange(data, value);
            setData(newData);
        }
        else updateField(field.field, value);
        setAutocompleteResults([]);
        const searcValue = field.displayOption !== undefined ? field.displayOption(value) : (value.name || value.title || value.description);
        console.log('searcValue', {value, searcValue})
        setAutocompleteSearch(searcValue);
    };

    /** FORM CONFIRMATION */
    const validate = () => {
        let valid = true;
        let obj_copy = JSON.parse(JSON.stringify(data));
        for (const key in obj_copy) {
            if (key.includes("_error")) {
                delete obj_copy[key];
            }
        }
        const required_fields = fields?.filter(f => f.required)?.map(f => f.field) || [];
        required_fields.forEach(field => {
            if (!obj_copy[field] || (Array.isArray(obj_copy[field]) && !obj_copy[field].length)) {
                obj_copy[field + '_error'] = 'Champ requis';
                valid = false;
            }
        });
        if (onValidate) {
            const { is_valid, result } = onValidate(obj_copy);
            valid = is_valid;
            obj_copy = result;
        }
        if (!valid) {
            const firstErrorKey = Object.keys(obj_copy).find((key) => key.includes('error'));
            if (firstErrorKey) {
                const field = firstErrorKey.split('_')[0];
                const element = document.getElementById(field);
                if (element) element.scrollIntoView();
            }
            enqueueSnackbar('Certains champs sont invalides', { variant: 'error' });
            setData((obj_copy as any));
            return;
        }
        if (onConfirm !== undefined && onConfirm !== null) onConfirm(obj_copy);
    };

    if (!data) return <></>;

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                fields.map((field, index) => {
                    const divider = dividers?.find(d => d.index === index);
                    return (
                        <React.Fragment key={`field-${field}-${index}`}>
                            {
                                Boolean(divider) &&
                                <div className="col-span-3"><h6>{divider?.title}</h6></div>
                            }
                            <div className={`col-span-${field.size || 3}`}>
                                {
                                    field.type !== 'autocomplete' &&
                                    <FloatingInput
                                        label={`${field.label || ''} ${field.required ? '*' : ''}`}
                                        type={field.type || "text"}
                                        value={data[field.field]}
                                        onChange={(v) => {
                                            if (field.onChange !== undefined) {
                                                const newData = field.onChange(data, v);
                                                setData(newData);
                                            }
                                            else updateField(field.field, v);
                                        }} />
                                }
                                {
                                    field.type === 'autocomplete' &&
                                    <div className="input-autocomplete">
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
                                                                {field.displayOption !== undefined ? field.displayOption(item) : (item.name || item.title || item.description)}
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        }
                                    </div>
                                }
                                <small style={{ color: "red" }}>{data[field.field + '_error']}</small>
                            </div>
                        </React.Fragment>
                    )
                })
            }
            <div className="col-span-3 form-modal-footer">
                <Button color="gray" onClick={onCancel}>Annuler</Button>
                <Button onClick={validate} className="contained-button">Confirmer</Button>
            </div>
        </div>
    );
}

export default GenericForm;
