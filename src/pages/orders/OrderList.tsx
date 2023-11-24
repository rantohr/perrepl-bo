import { FC, useEffect, useState } from "react";
import { MdModeEdit, MdDelete, MdOutlineAdd, MdOutlineSend } from "react-icons/md";
import { IColumn, IListAction } from "../../interfaces/genricModule/icolumn.interface";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { IOrder } from "../../interfaces/iorder.interface";
import GenericList from "../../components/genericList/GenericList";
import OrderCreateDialog from "./OrderCreateDialog";
import { useOrderStore } from "../../stores/order.store";

const OrderList: FC = () => {

  /** STORE */
  const setSelectedItem = useOrderStore(state => state.setSelectedOrder);

  /** LOCAL STATE */
  const [openModal, setOpenModal] = useState(false);

  /** LIST CONFIG */
  const actions: IListAction[] = [
    { label: "Nouvelle demande", icon: <MdOutlineAdd />, callback: () => onCreate() },
    { label: "Envoyer un formulaire", icon: <MdOutlineSend />, callback: () => console.log('send form') },
  ];

  const mainFilters: IListAction[] = [
    { label: "Tout", callback: () => console.log('all') },
    { label: "Nouvelle", callback: () => console.log('new') },
    { label: "En cours", callback: () => console.log('on going') },
    { label: "En attente", callback: () => console.log('waiting') },
    { label: "Envoyée", callback: () => console.log('sent') },
    { label: "En voyage", callback: () => console.log('traveling') },
    { label: "Confirmée", callback: () => console.log('confirmed') },
  ];

  const tabs: IListAction[] = [];

  /** ORDER TABLE CONFIGS */
  const rowActions: IListAction[] = [
    { label: "Modifier", icon: MdModeEdit, callback: (row: any) => console.log('edit clicked', row) },
    { label: "Supprimer", icon: MdDelete, callback: (row: any) => console.log('delete clicked', row) },
  ];

  const columns: IColumn[] = [
    {
      field: "image", label: "",
      displayValue: (src: string) => <img src={src} />
    },
    { field: "client", label: "Client", sortable: true },
    { field: "created_date", label: "Demande", sortable: true, displayValue: (date: string) => date ? format(new Date(date), 'dd/MM/yyyy', { locale: fr }) : '' },
    {
      field: "arrival_date", label: "Arrivé", sortable: true,
      displayValue: (date: string) => (
        <>
          <p><b>{date ? format(new Date(date), 'dd/MM/yyyy', { locale: fr }) : ''}</b></p>
          <p>{date ? format(new Date(date), 'H:m', { locale: fr }) : ''}</p>
        </>
      )
    },
    { field: "type", label: "Type de client" },
    {
      field: "status", label: "Status",
      displayValue: (status: string) => <div className="status" style={{ color: getStatusColor(status), backgroundColor: getStatusBgColor(status) }}>{status}</div>
    },
  ];

  const [rows, setRows] = useState<IOrder[]>([]);
  useEffect(() => {
    setRows([]);
  }, []);
  /** ****** */

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Nouvelle':
        return "#00d971";
      default:
        return "#00d971";
        break;
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'Nouvelle':
        return "#00d9712b";
      default:
        return "#00d9712b";
    }
  };

  const onCreate = () => {
    setSelectedItem(({} as any));
    setOpenModal(true);
  };
  
  const onCancelCreate = () => {
    setSelectedItem(null);
    setOpenModal(false);
  };

  return (
    <>
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

      <OrderCreateDialog open={openModal} onClose={onCancelCreate} />
    </>
  );
}

export default OrderList;
