/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const updateObjectField = (object: any, field: string, value: any, updateFunction: (object: any) => void): void => {
    const editable: any = { ...object };
    const fields = field?.split('.');
    switch (fields.length) {
        case 1:
            editable[fields[0]] = value;
            break;
        case 2:
            editable[fields[0]][fields[1]] = value;
            break;
        case 3:
            editable[fields[0]][fields[1]][fields[2]] = value;
            break;
        case 4:
            editable[fields[0]][fields[1]][fields[2]][fields[3]] = value;
            break;
        default:
            break;
    }
    if (!field.includes('_error')) {
        editable[field + "_error"] = '';
    }
    updateFunction(editable);
};

export const convertToIdsArray = (input: any[]) => {
    if (Array.isArray(input)) {
        if (typeof input[0] === 'object' && input[0] !== null) return input.map(obj => obj.id);
        else return input;
    } else return [];
};

export const convertToId = (obj: any, property: string) => {
    if (obj && obj[property]) {
        if (obj[property].id) {
            obj[property] = obj[property].id;
        } else if (typeof obj[property] === 'object' && !('id' in obj[property])) {
            delete obj[property];
        }
    }
};
