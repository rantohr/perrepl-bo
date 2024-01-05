import { FC, useEffect, useState } from "react";
import {
  MdModeEdit,
  MdDelete,
  MdOutlineAdd,
  MdOutlineSend,
} from "react-icons/md";
import {
  IColumn,
  IListAction,
} from "../../interfaces/genricModule/icolumn.interface";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { IOrder } from "../../interfaces/iorder.interface";
import GenericList from "../../components/genericList/GenericList";
import OrderCreateDialog from "./OrderCreateDialog";
import { useOrderStore } from "../../stores/order.store";
import { deleteOrder, getOrders } from "../../services/order.service";
import { useSnackbar } from "notistack";
import { Spinner } from "flowbite-react";
import OrderEditDialog from "./OrderEditDialog";
import { ITraveler } from "../../interfaces/itraveler.interface";
import { IOrderStatus } from "../../interfaces/iorderStatus.interface";
import OrderChangeStatus from "./OrderChangeStatus";
import { LIST_VARIABLES, getColorByStatusOrder } from "../../functions";
import BadgeCustom from "../components/BadgeCustom";
import { last } from "lodash";

const OrderList: FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  /** STORE */
  const setSelectedItem = useOrderStore((state) => state.setSelectedOrder);

  /** LOCAL STATE */
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openChangeStatus, setOpenChangeStatus] = useState<IOrder | null>(null);

  /** LIST CONFIG */
  const actions: IListAction[] = [
    {
      label: "Nouvelle demande",
      icon: <MdOutlineAdd />,
      callback: () => onCreate(),
    },
    {
      label: "Envoyer un formulaire",
      icon: <MdOutlineSend />,
      callback: () => console.log("TODO: send form"),
    },
  ];

  const mainFilters: IListAction[] = LIST_VARIABLES.ORDER_STATUS.map(
    (item) => ({ label: item.label, callback: () => {} })
  );
  //  [
  //   { label: "Tout", callback: () => console.log("all") },
  //   { label: "Nouvelle", callback: () => console.log("new") },
  //   { label: "En cours", callback: () => console.log("on going") },
  //   { label: "En attente", callback: () => console.log("waiting") },
  //   { label: "Envoyée", callback: () => console.log("sent") },
  //   { label: "En voyage", callback: () => console.log("traveling") },
  //   { label: "Confirmée", callback: () => console.log("confirmed") },
  // ];

  const tabs: IListAction[] = [];

  /** ORDER TABLE CONFIGS */
  const rowActions: IListAction[] = [
    {
      label: "Modifier",
      icon: MdModeEdit,
      callback: (row: any) => onEdit(row),
    },
    {
      label: "Changer de status",
      // icon: MdModeEdit,
      callback: (row: any) => {
        setOpenChangeStatus(row);
      },
    },
    {
      label: "Supprimer",
      icon: MdDelete,
      callback: (row: IOrder) => {
        deleteOrder(row.id)
          .then(() => {
            loadData();
          })
          .catch((err) => console.log("err", err));
      },
    },
  ];

  const columns: IColumn[] = [
    // {
    //   field: "image", label: "",
    //   displayValue: (src: string) => <img src={src} />
    // },
    {
      field: "order_creator", // "travelers"
      label: "Client",
      sortable: true,
      displayValue: (value: ITraveler) => {
        return value.first_name + " " + value.last_name;
        // `${value![0]?.first_name || ""} ${value![0]?.last_name || ""}`,
      },
    },
    {
      field: "created_at", // created_date
      label: "Demande",
      sortable: true,
      displayValue: (date: string) =>
        date ? format(new Date(date), "dd/MM/yyyy", { locale: fr }) : "",
    },
    {
      field: "arrival_datetime", // arrival_date
      label: "Arrivé",
      sortable: true,
      displayValue: (date: string) => (
        <>
          <p>
            <b>
              {date ? format(new Date(date), "dd/MM/yyyy", { locale: fr }) : ""}
            </b>
          </p>
          <p>{date ? format(new Date(date), "H:m", { locale: fr }) : ""}</p>
        </>
      ),
    },
    {
      field: "departure_datetime",
      label: "Départ",
      sortable: true,
      displayValue: (date: string) => (
        <>
          <p>
            <b>
              {date ? format(new Date(date), "dd/MM/yyyy", { locale: fr }) : ""}
            </b>
          </p>
          <p>{date ? format(new Date(date), "H:m", { locale: fr }) : ""}</p>
        </>
      ),
    },
    // { field: "type", label: "Type de client" },
    { field: "trip_duration", label: "Durée (en j)" },
    {
      field: "order_statuses",
      label: "Status",
      displayValue: (status: IOrderStatus) => (
        <div
          className="status"
          style={{
            color: getColorByStatusOrder(status.order_status).color, // getStatusColor(status.order_status),
            backgroundColor: getColorByStatusOrder(status.order_status).bg, //getStatusBgColor(status.order_status),
          }}
        >
          {status.order_status}
        </div>
      ),
    },
  ];

  const [rows, setRows] = useState<IOrder[]>([]);
  useEffect(() => {
    loadData();
  }, []);
  /** ****** */

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Nouvelle":
        return "#00d971";
      default:
        return "#00d971";
        break;
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case "Nouvelle":
        return "#00d9712b";
      default:
        return "#00d9712b";
    }
  };

  const onCreate = () => {
    setSelectedItem({} as any);
    setOpenAddModal(true);
  };

  const onEdit = (item: IOrder) => {
    setSelectedItem(item);
    setOpenEditModal(true);
  };

  const onCancelAction = () => {
    setSelectedItem(null);
    setOpenAddModal(false);
    setOpenEditModal(false);
  };

  const loadData = () => {
    setLoading(true);
    getOrders(20, 0)
      .then((response) => {
        setLoading(false);
        setRows(response.data.results);
      })
      .catch((error) => {
        if (error.response?.data?.errors) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          for (const [_key, value] of Object.entries(
            error.response.data.errors
          )) {
            if (Array.isArray(value)) {
              value.map((error) =>
                enqueueSnackbar(`${error}`, { variant: "error" })
              );
            } else {
              enqueueSnackbar(`${value}`, { variant: "error" });
            }
          }
        } else if (error.response) {
          if (error.response.status === 400) {
            for (const [key, value] of Object.entries(error.response.data)) {
              if (Array.isArray(value)) {
                value.map((error) =>
                  enqueueSnackbar(`${key} : ${error}`, { variant: "error" })
                );
              } else {
                enqueueSnackbar(`${key} : ${value}`, { variant: "error" });
              }
            }
          } else if (
            error.response.status === 401 ||
            error.response.status === 403
          ) {
            enqueueSnackbar("Problème de permission", { variant: "error" });
          } else if (error.response.status === 500) {
            enqueueSnackbar("Erreur du serveur", { variant: "error" });
          }
        } else if (error.request) {
          console.log("error.request : ", error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

  return (
    <>
      {/* <div className="flex gap-2 mt-4">
        {LIST_VARIABLES.ORDER_STATUS.map((item, index) => {
          return (
            <BadgeCustom
              key={index}
              label={item.label}
              active={false}
              onClick={() => {
                // navigate("/app/client");
              }}
            />
          );
        })}
      </div> */}
      <GenericList
        title="Demandes"
        total={3}
        columns={columns}
        rows={rows}
        actions={actions}
        rowActions={rowActions}
        mainFilters={mainFilters}
        tabs={tabs}
      />

      <OrderCreateDialog
        open={openAddModal}
        onClose={onCancelAction}
        onSuccess={loadData}
      />
      <OrderEditDialog
        open={openEditModal}
        onClose={onCancelAction}
        onSuccess={loadData}
      />

      <OrderChangeStatus
        currentOrder={openChangeStatus}
        setOpen={setOpenChangeStatus}
        loadData={loadData}
      />
      {loading && (
        <div className="big-loader">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default OrderList;
