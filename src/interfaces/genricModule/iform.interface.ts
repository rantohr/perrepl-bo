import { AxiosResponse } from "axios";

export interface IForm {
  initialData: any,
  fields: IField[],
  dividers?: { title: string, index: number }[],
  onCancel: () => void,
  onValidate?: (data: any) => { is_valid: boolean, result: any }
  onConfirm: (data: any) => void,
}

export interface IField {
  field: string,
  label: string,
  type?: string,
  required?: boolean,
  onChange?: (dataState: any, value: any) => any,
  size?: number,
  autocompleteGetter?: (limit?: number, offset?: number, filter?: any) => Promise<AxiosResponse<{ count: number; results: any[] }>>,
  displayOption?: (option: any) => string | number | null,
}