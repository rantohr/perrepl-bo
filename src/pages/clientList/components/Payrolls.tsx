import { format } from "date-fns";
import GenericList from "../../../components/genericList/GenericList";
import { IColumn } from "../../../interfaces/genricModule/icolumn.interface";

type IPayrolls = {
  paymentDate: string;
  client: string;
  travelDate: string;
  tranche: string;
};

export default function Payrolls() {
  const columns: IColumn[] = [
    {
      field: "paymentDate",
      label: "Date de paiements",
      sortable: true,
      displayValue: (date: string) => {
        return <span className="font-bold uppercase font-lato">{date}</span>;
      },
    },
    {
      field: "client",
      label: "Client",
      sortable: true,
      displayValue: (client: string) => {
        return <span className="font-bold text-grey-1">{client}</span>;
      },
    },
    {
      field: "travelDate",
      label: "Date du voyage",
      sortable: true,
      displayValue: (travelDate: string) => {
        return (
          <span className="uppercase text-neutre font-bold font-sans">
            {travelDate}
          </span>
        );
      },
    },
    {
      field: "tranche",
      label: "Tranche",
      sortable: true,
      displayValue: (tranche: string) => {
        return <span className="text-grey-1 font-bold">{tranche}</span>;
      },
    },
  ];

  const rows: IPayrolls[] = [
    {
      client: "Darlene Robertson",
      paymentDate: format(new Date(), "dd MMM yyyy"),
      tranche: "1 er",
      travelDate: "24 JUL - 27 JUL",
    },
  ];
  return (
    <div>
      <GenericList
        title=""
        // total={3}
        columns={columns}
        rows={rows}
        // actions={actions}
        // rowActions={rowActions}
        // mainFilters={mainFilters}
        // filters={filters}
        // tabs={tabs}
      />
    </div>
  );
}
