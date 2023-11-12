export interface IColumn {
  field: string;
  label: string;
  sortable?: boolean;
  sort?: "asc" | "desc" | null;
  displayValue?: (value: any, row?: any) => any;
  displayExportValue?: (value: any, row?: any) => string;
}

export interface IListAction {
  label: string;
  icon?: any;
  className?: string;
  callback: (row?: any) => void;
}

export interface IListFilter {
  type: "custom" | "period" | "select";
  field: string;
  label: string;
  onChange?: (input: any) => void;
  options?: { value: string; label: string }[];
}

export interface ICardOptions {
  image: string;
  title: string;
  subtitle: { icon?: any; text: string };
  label?: { icon: any; text: string; backgroundColor?: string };
  content?: {
    content_icon?: any;
    content_title?: string;
    content_subtitle?: string;
  };
  actions?: {
    main_title?: string;
    main_callback?: () => void;
    secondary_icon?: any;
    secondary_callback?: () => void;
  };
  footer?: { title?: string; subtitle?: string };
}
export interface IListOptions {
  title: string;
  total?: number;
  actions?: IListAction[];
  tabs?: IListAction[];
  mainFilters?: IListAction[];
  filters?: IListFilter[];
  columns: IColumn[];
  rows: any[];
  rowActions?: IListAction[];
  displayModeChange?: (mode: "list" | "table" | "card") => void;
}
