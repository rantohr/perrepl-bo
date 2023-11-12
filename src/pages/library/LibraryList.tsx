import { FC } from "react";
import { HiBuildingOffice } from "react-icons/hi2"
import GenericCard from "../../components/genericCard/GenericCard";
import { typeMark } from "../../components/genericCard/GenericCard";
import GenericPageHeader from "../../components/genericList/GenericPageHeader";
import GenericListFilters from "../../components/genericList/GenericListFilters";
import { IListAction, IListFilter } from "../../interfaces/genricModule/icolumn.interface";
import { MdCarRental, MdCleaningServices, MdDescription, MdHouse, MdOutlineAdd, MdSnowboarding } from "react-icons/md";

const LibraryList: FC = () => {

  // CONFIG CARD
  const exampleMark: typeMark = {
    label: "HÉBERGEMENT",
    position: "right-2 top-2/3",
    color: "bg-orange-400",
    icon: <HiBuildingOffice />
  };

  const actions: IListAction[] = [
    { label: "Nouvelle contenu", icon: <MdOutlineAdd />, callback: () => { }, className: "contained-button" },
  ];

  const mainFilters: IListAction[] = [
    { label: "Tout", callback: () => console.log('all') },
    { label: "Activité", icon: <MdSnowboarding />, callback: () => console.log('new') },
    { label: "Hébergement", icon: <MdHouse />, callback: () => console.log('on going') },
    { label: "Transport", icon: <MdCarRental />, callback: () => console.log('waiting') },
    { label: "Service", icon: <MdCleaningServices />, callback: () => console.log('sent') },
    { label: "Document", icon: <MdDescription />, callback: () => console.log('traveling') },
  ];

  const filters: IListFilter[] = [
    { label: "", type: "select", field: "", options: [{ label: "Nom de client", value: "client" }] }
  ];

  const tabs: IListAction[] = [
    { label: "Contenu", callback: () => console.log('content clicked') },
    { label: "Media", callback: () => console.log('media clicked') },
    { label: "Document", callback: () => console.log('document clicked') },
  ];

  return (
    <div className="list-container order-list">
      <GenericPageHeader title="Librairie" total={8} actions={actions} />
      <GenericListFilters tabs={tabs} mainFilters={mainFilters} />
      <GenericCard
        title="Carlton Madagascar"
        image="https://img.freepik.com/photos-gratuite/maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph"
        description="Réservez des Hebergements A Andasibe, Madagascar booking.com a été visité par plus d'un million d'utilisateurs au cours du mois dernier Auberges de Jeunesse Réservation Sécurisée"
        place="Antananarivo, Analamanga"
        mark={
          exampleMark
        }
      />
    </div>
  );
}

export default LibraryList;
