import { format } from "date-fns";

export const formatDateWithDateFns = (date: string, formated?: string) => {
  return format(new Date(date), formated ? formated : "yyyy-MM-dd");
};
