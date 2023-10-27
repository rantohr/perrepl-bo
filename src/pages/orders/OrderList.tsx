import { FC, useEffect, useState } from "react";
import { MdModeEdit, MdDelete, MdOutlineAdd, MdOutlineSend } from "react-icons/md";
import { HiBuildingOffice } from "react-icons/hi2"
import { IColumn, IListAction, IListFilter } from "../../interfaces/genricModule/icolumn.interface";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { IOrder } from "../../interfaces/iorder.interface";
import GenericList from "../../components/genericList/GenericList";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { GrAddCircle } from "react-icons/gr";
import GenericCard from "../../components/genericCard/GenericCard";
import { typeMark } from "../../components/genericCard/GenericCard";

const OrderList: FC = () => {

  const [openModal, setOpenModal] = useState(false);

  /** LIST CONFIG */
  const actions: IListAction[] = [
    { label: "Nouvelle demande", icon: <MdOutlineAdd />, callback: () => setOpenModal(true) },
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

  const filters: IListFilter[] = [
    { label: "", type: "select", field: "", options: [{ label: "Nom de client", value: "client" }] }
  ];

  const tabs: IListAction[] = [];
  // const tabs: IListAction[] = [
  //   { label: "Contenu", callback: () => console.log('content clicked') },
  //   { label: "Media", callback: () => console.log('media clicked') },
  //   { label: "Document", callback: () => console.log('document clicked') },
  // ];

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
    const fake_rows: IOrder[] = [
      { id: 1, client: "Annette Black", created_date: '2023-11-12', arrival_date: '2023-11-13 08:15:00', type: "B2B", status: "Nouvelle", image: "/profile-pic-test.jpg" },
      { id: 2, client: "Allison Page", created_date: '2023-11-02', arrival_date: '2023-11-02 13:55:00', type: "B2B", status: "Nouvelle", image: "/profile-pic-test.jpg" },
      { id: 3, client: "Léon Harper", created_date: '2023-11-11', arrival_date: '2023-11-16 09:18:00', type: "B2C", status: "Nouvelle", image: "/profile-pic-test.jpg" },
    ];
    setRows(fake_rows);
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

  // CONFIG CARD
  let exampleMark: typeMark = {
    label: "HÉBERGEMENT",
    position: "right-2 top-2/3",
    color: "bg-orange-400",
    icon: <HiBuildingOffice />
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
        filters={filters}
        tabs={tabs}
      />

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <div className="form-modal">
            <Modal.Header className="form-modal-header">
              <GrAddCircle />
              <h3>Nouvelle demande</h3>
              <p>Ajouter une nouvelle demande</p>
            </Modal.Header>
            <Modal.Body>
              <div className="form-modal-body">
                <div className="relative z-0 w-full mb-6 group">
                  <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email1"
                      value="Your email"
                    />
                  </div>
                  <TextInput
                    id="email1"
                    placeholder="name@flowbite.com"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div className="form-modal-footer">
                <Button color="gray" onClick={() => setOpenModal(false)}>Annuler</Button>
                <Button onClick={() => setOpenModal(false)} className="contained-button">Passer la demande</Button>
              </div>
            </Modal.Body>
          </div>
        </Modal.Body>
      </Modal>

      <GenericCard
        title="Carlton Madagascar"
        image="https://img.freepik.com/photos-gratuite/maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph"
        description="Réservez des Hebergements A Andasibe, Madagascar booking.com a été visité par plus d'un million d'utilisateurs au cours du mois dernier Auberges de Jeunesse Réservation Sécurisée"
        place="Antananarivo, Analamanga"
        mark={
          exampleMark
        }
      />
      <GenericCard
        title="Road Trip a Madagascar"
        image="https://img.freepik.com/photos-gratuite/maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph"
        date="01 JUIN - 10 JUIN | 9 Jours"
        button="Paysages des hauts plateaux"
        price={440}
        mark={
          {
            label: "NOUVEAU",
            position: "right-0 top-4",
            color: "bg-green-400"
          }
        }
      />
    </>
  );
}

export default OrderList;
