export interface IForm {
  initialData: any;
  fields: {
    field: string;
    label: string;
    type?: string;
    required?: boolean;
    onChange?: (dataState: any, value: any) => any;
    size?: number;
    defaultValue?: string;
  }[];
  dividers?: { title: string; index: number }[];
  onCancel: () => void;
  onValidate?: (data: any) => { is_valid: boolean; result: any };
  onConfirm: (data: any) => void;
}
