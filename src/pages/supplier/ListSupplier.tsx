import { useEffect, useState } from "react";
import GenericList from "../../components/genericList/GenericList";
import {
  IColumn,
  IListAction,
} from "../../interfaces/genricModule/icolumn.interface";
import { ISupplier } from "../../interfaces/supplier";
import { getAllSupplier } from "../../services/supplier.service";
import { useContextLayoutSupplier } from "./LayoutSupplier";

export default function ListSupplier() {
  const { open } = useContextLayoutSupplier();

  const [rows, setRows] = useState<ISupplier[]>([]);
  const rowActions: IListAction[] = [
    {
      label: "Voir",
      //   icon: MdDelete,
      callback: () => "",
    },
    {
      label: "Effacer",
      //   icon: MdModeEdit,
      callback: () => "",
    },
  ];
  const columns: IColumn[] = [
    {
      field: "name",
      label: "Nom du prestataire",
      displayValue: (value: string) => {
        return (
          <div>
            <span className="font-bold text-xs text-violet-2">{value}</span>
          </div>
        );
      },
    },
    {
      field: "location",
      label: "Localisation",
      displayValue: (value: string) => {
        return (
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M512 512a192 192 0 1 0 0-384a192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512a256 256 0 0 1 0 512"
              />
              <path
                fill="currentColor"
                d="M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32"
              />
              <path
                fill="currentColor"
                d="M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912"
              />
            </svg>
            <span className="text-neutre text-xs font-bold font-lato">
              {value}
            </span>
          </div>
        );
      },
    },
    {
      field: "website",
      label: "Site web",
      displayValue: (value: string) => {
        return (
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 36 36"
            >
              <path
                fill="currentColor"
                d="M26.54 18a19.38 19.38 0 0 0-.43-4h3.6a12.3 12.3 0 0 0-.67-1.6h-3.35a19.72 19.72 0 0 0-2.89-5.87a12.3 12.3 0 0 0-2.55-.76a17.83 17.83 0 0 1 3.89 6.59h-5.39V5.6h-1.5v6.77h-5.39a17.83 17.83 0 0 1 3.9-6.6a12.28 12.28 0 0 0-2.54.75a19.72 19.72 0 0 0-2.91 5.85H6.94A12.3 12.3 0 0 0 6.26 14h3.63a19.38 19.38 0 0 0-.43 4a19.67 19.67 0 0 0 .5 4.37H6.42A12.34 12.34 0 0 0 7.16 24h3.23a19.32 19.32 0 0 0 2.69 5.36a12.28 12.28 0 0 0 2.61.79A17.91 17.91 0 0 1 12 24h5.26v6.34h1.5V24H24a17.9 17.9 0 0 1-3.7 6.15a12.28 12.28 0 0 0 2.62-.81A19.32 19.32 0 0 0 25.61 24h3.2a12.34 12.34 0 0 0 .74-1.6H26a19.67 19.67 0 0 0 .54-4.4m-9.29 4.37h-5.74a17.69 17.69 0 0 1-.09-8.4h5.83Zm7.24 0h-5.74V14h5.83a18.21 18.21 0 0 1 .42 4a18.12 18.12 0 0 1-.51 4.37"
                // class="clr-i-outline clr-i-outline-path-1"
              />
              <path
                fill="currentColor"
                d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14"
                // class="clr-i-outline clr-i-outline-path-2"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
            <span className="text-neutre text-xs font-bold font-lato">
              {value}
            </span>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getAllSupplier().then(({ data }) => {
      const { results } = data;
      setRows(results);
    });
  }, [open]);

  return (
    <div>
      <GenericList
        title=""
        columns={columns}
        rows={rows}
        rowActions={rowActions}
      />
    </div>
  );
}
