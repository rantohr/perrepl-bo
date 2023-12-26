import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import GenericList from "../../../components/genericList/GenericList";
import {
  IColumn,
  IListAction,
} from "../../../interfaces/genricModule/icolumn.interface";
// import { ITraveler } from "../../../interfaces/itraveler.interface";
import { IOrderResults } from "../../../interfaces/results/iorder.interface.result";
import { formatDateWithDateFns } from "../../../functions";

type IClient = {
  img: string;
  client: string;
  clientId: string;
  arrival: string | null;
  arrivalStatus: string | null;
  clientType: string;
  by: string;
  role: string;
  demande: number;
};

export default function AllBadge() {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { clientList } = useOutletContext<{
    clientList: IOrderResults[];
  }>();

  let rows = clientList;

  const rowActions: IListAction[] = [
    {
      label: "Voir",
      //   icon: MdDelete,
      callback: () => navigate("/app/client/overview/view/general"),
    },
    {
      label: "Effacer",
      //   icon: MdModeEdit,
      callback: () => alert("No action"),
    },
    {
      label: "Archiver",
      //   icon: MdModeEdit,
      callback: () => alert("No action"),
    },
  ];

  const columns: IColumn[] = [
    {
      field: "img",
      label: ``,
      displayValue: (value: string) => {
        return value ? <img src={value} /> : "";
      },
    },
    {
      field: "client",
      label: "Client",
      displayValue: (value: string, row: IOrderResults) => {
        // IClient no teto taloha
        return (
          <div className="text-left">
            <p className="font-bold text-violet-2 ">
              {row.order_creator.first_name.toUpperCase()}{" "}
              {row.order_creator.last_name.toUpperCase()}
            </p>
            <p className="font-normal text-grey-5">{row.order_creator.id}</p>
          </div>
          // <div className="text-left">
          //   <p className="font-bold text-violet-2 ">{row.client}</p>
          //   <p className="font-normal text-grey-5">{row.clientId}</p>
          // </div>
        );
      },
    },
    {
      field: "arrival",
      label: "Arrivé",
      displayValue: (value: string, row: IOrderResults) => {
        if (row.arrival_datetime) {
          return (
            <div className="text-left">
              <p className="font-bold text-neutre">
                {formatDateWithDateFns(row.arrival_datetime, "dd LLL yyyy")}
              </p>
              {/* <p className="text-neutre">{row.arrivalStatus}</p> */}
            </div>
          );
        } else {
          return (
            <div className="text-left">
              <p className="font-bold text-neutre">Date à confirmer</p>
              <p className="text-neutre">Vol à confirmer</p>
            </div>
          );
        }
      },
    },
    {
      field: "clientType",
      label: "Type de client",
      displayValue: (value: string, row: IOrderResults) => {
        return (
          <p className="text-neutre font-bold text-left">{row.client_type}</p>
        );
      },
    },
    {
      field: "by",
      label: "Traitée par",
      displayValue: (value: string, row: IClient) => {
        return (
          <div className="text-left">
            <p className="font-bold text-violet-2 ">{row.by}</p>
            <p className="font-normal text-grey-5">{row.role}</p>
          </div>
        );
      },
    },
    {
      field: "demande",
      label: "Demande",
      displayValue: (value: string, row: IOrderResults) => {
        return (
          <span
            className="bg-yellow-2 text-yellow-1 text-xs font-bold me-2 
          px-2.5 py-1.5 rounded-full "
          >
            {/* En cours */}
            {row.order_statuses.order_status}
          </span>
        );
      },
    },
  ];
  // let rows: IClient[] = [
  //   {
  //     img: "/profile-pic-test.jpg",
  //     client: "Annette",
  //     clientId: "#ID25858",
  //     arrival: "28 JUN 2012",
  //     arrivalStatus: "AF 720",
  //     clientType: "B2B (Toursoft)",
  //     by: "Kristin Watson",
  //     role: "Admin",
  //     demande: 0,
  //   },
  //   {
  //     img: "/profile-pic-test.jpg",
  //     client: "Kathryn Murphy",
  //     clientId: "#ID25858",
  //     arrival: null,
  //     arrivalStatus: null,
  //     clientType: "B2C",
  //     by: "Kristin Watson",
  //     role: "Admin",
  //     demande: 0,
  //   },
  // ];

  // if (pathname.includes("b2c")) {
  //   rows = rows.filter((item) => item.clientType.toLowerCase().includes("b2c"));
  // }

  // if (pathname.includes("b2b")) {
  //   rows = rows.filter((item) => item.clientType.toLowerCase().includes("b2b"));
  // }

  if (pathname.includes("b2c")) {
    rows = rows.filter((item) =>
      item.client_type.toLowerCase().includes("b2c")
    );
  }

  if (pathname.includes("b2b")) {
    rows = rows.filter((item) =>
      item.client_type.toLowerCase().includes("b2b")
    );
  }

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
