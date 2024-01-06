import { FC, useState } from "react";
import GenericPageHeader from "../../components/genericList/GenericPageHeader";
import GenericListFilters from "../../components/genericList/GenericListFilters";
import { IListAction, IListFilter } from "../../interfaces/genricModule/icolumn.interface";
import { MdCarRental, MdCleaningServices, MdDescription, MdHouse, MdOutlineAdd, MdSnowboarding } from "react-icons/md";
import { useNavigate, Outlet } from "react-router-dom";
import { useAccommodationStore } from "../../stores/accommodation.store";
import AccommodationCreateDialog from "./accommodation/AccommodationCreateDialog";
import { IAccommodation } from "../../interfaces/iaccommodation.interface";

const LibraryList: FC = () => {
  const navigate = useNavigate()

  /** STORE */
  const setSelectedItem = useAccommodationStore(state => state.setSelectedAccommodation);

  /** LOCAL STATE */
  const [openAddAccommodationModal, setOpenAddAccommodationModal] = useState(false);


  const onCreateActivity = () => {
      setSelectedItem(({} as any));
      setOpenAddAccommodationModal(true);
  };

  const onEdit = (item: IAccommodation) => {
  };

  const onCancelAction = () => {
      setSelectedItem(null);
      setOpenAddAccommodationModal(false);
  };

  const action: IListAction[] = [
    { label: "Activité", icon: <MdSnowboarding />, callback: () => {setOpenAddAccommodationModal(true)} },
    { label: "Hébergement", icon: <MdHouse />, callback: () => {}, },
    { label: "Transport", icon: <MdCarRental />, callback: () => {} },
    { label: "Service", icon: <MdCleaningServices />, callback: () => {} },
  ]

  const actions: IListAction[] = [
    { label: "Nouvelle contenu", icon: <MdOutlineAdd />, callback: () => {}, className: "contained-button", actions: action },
  ];

  const mainFilters: IListAction[] = [
    { label: "Tout", callback: () => console.log('all') },
    { label: "Activité", icon: <MdSnowboarding />, callback: () => console.log("new") },
    { label: "Hébergement", icon: <MdHouse />, callback: () => console.log('on going') },
    { label: "Transport", icon: <MdCarRental />, callback: () => console.log('waiting') },
    { label: "Service", icon: <MdCleaningServices />, callback: () => console.log('sent') },
    { label: "Document", icon: <MdDescription />, callback: () => console.log('traveling') },
  ];

  const filters: IListFilter[] = [
    { label: "", type: "select", field: "", options: [{ label: "Nom de client", value: "client" }] }
  ];

  const tabs: IListAction[] = [
    { label: "Contenu", callback: () => navigate("/app/library") },
    { label: "Media", callback: () => navigate("/app/library/media") },
    { label: "Document", callback: () => navigate("/app/library/document") },
  ];

  return (
    <div className="relative list-container order-list">
      <GenericPageHeader title="Librairie" total={8} actions={actions}/>
      <GenericListFilters tabs={tabs} />
      <Outlet/>

      <AccommodationCreateDialog open={openAddAccommodationModal} onClose={onCancelAction} onSuccess={onCreateActivity} />
    </div>
  );
}

export default LibraryList;
