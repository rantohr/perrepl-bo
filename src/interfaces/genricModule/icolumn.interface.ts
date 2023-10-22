export interface IColumn {
  field: string,
  label: string,
  sortable?: boolean,
  sort?: 'asc' | 'desc' | null,
  displayValue?: (value: any, row?: any) => any,
  displayExportValue?: (value: any, row?: any) => string
}

export interface IListAction {
  label: string,
  icon?: any,
  callback: (row?: any) => void
}
export interface IListFilter {
  type: "custom" | "period" | "select",
  field: string,
  label: string,
  onChange?: (input: any) => void,
  options?: { value: string, label: string }[]
}
