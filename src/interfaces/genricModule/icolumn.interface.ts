export interface IColumn {
  id?: number,
  order: number,
  field: string,
  label: string,
  width?: number,
  sortable?: boolean,
  active: boolean,
  ordering_asc?: boolean | null,
  module?: string,
  field_name?: string,
  can_edit?: boolean,
  fullWidth?: boolean,
  displayValue?: (value: any, row?: any) => any,
  displayExportValue?: (value: any, row?: any) => string
}
