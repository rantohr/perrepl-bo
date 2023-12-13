import { FC } from "react";
import GenericPageHeader from "../../components/genericList/GenericPageHeader";
import GenericListFilters from "../../components/genericList/GenericListFilters";
import { IListAction, IListFilter } from "../../interfaces/genricModule/icolumn.interface";
import { MdCarRental, MdCleaningServices, MdDescription, MdHouse, MdOutlineAdd, MdSnowboarding } from "react-icons/md";
import { useNavigate, Outlet } from "react-router-dom";

const LibraryList: FC = () => {
  const navigate = useNavigate()

  const actions: IListAction[] = [
    { label: "Nouvelle contenu", icon: <MdOutlineAdd />, callback: () => { }, className: "contained-button" },
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
    <div className="list-container order-list">
      <GenericPageHeader title="Librairie" total={8} actions={actions} />
      <GenericListFilters tabs={tabs} />
      <Outlet/>
    </div>
  );
}

export default LibraryList;
