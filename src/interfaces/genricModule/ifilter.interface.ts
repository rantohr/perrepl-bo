export interface IFilter {
  type: "custom" | "period" | "select",
  field: string,
  label: string,
  onChange?: (input: any) => void,
  options?: { value: string, label: string }[]
}
