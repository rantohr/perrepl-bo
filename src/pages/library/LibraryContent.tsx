import { FC, useState } from "react";
import { MdCarRental, MdCleaningServices, MdDescription, MdHouse, MdSnowboarding } from "react-icons/md";
import { IListAction } from "../../interfaces/genricModule/icolumn.interface";
import GenericCard from "../../components/genericCard/GenericCard";
import BadgeCustom from "../components/BadgeCustom";

    // CONFIG mark
    const marks = {
        hotel: {
            label: "HÉBERGEMENT",
            position: "right-2 top-2/3",
            color: "bg-orange-400",
            icon: <MdHouse />
        },
        activity: {
            label: "ACTIVITÉ",
            position: "right-2 top-2/3",
            color: "bg-green-400",
            icon: <MdSnowboarding />
        },
        transport: {
            label: "TRANSPORT",
            position: "right-2 top-2/3",
            color: "bg-blue-400",
            icon: <MdCarRental />
        },
        service: {
            label: "SERVICE",
            position: "right-2 top-2/3",
            color: "bg-pink-400",
            icon: <MdCarRental />
        }
    };

    const mainFilters: IListAction[] = [
        { label: "Tout", callback: () => console.log('all') },
        { label: "Activité", icon: <MdSnowboarding />, callback: () => console.log("new") },
        { label: "Hébergement", icon: <MdHouse />, callback: () => console.log('on going') },
        { label: "Transport", icon: <MdCarRental />, callback: () => console.log('waiting') },
        { label: "Service", icon: <MdCleaningServices />, callback: () => console.log('sent') }
    ]

const LibrairyContent: FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>("Tout");

    const handleFilterClick = (filterLabel: string) => {
        setActiveFilter(filterLabel);
    };

    const filteredFilters = mainFilters.filter(filter => filter.label === activeFilter);
    const filteredCards = filteredFilters.length > 0 ? filteredFilters : mainFilters;

    return <>
        <span className="flex gap-2 mx-5">
            {mainFilters?.map((filter) => (
                <BadgeCustom
                    key={filter.label}
                    label={filter.label}
                    icon={filter.icon}
                    active={filter.label === activeFilter}
                    onClick={() => handleFilterClick(filter.label)}
                />
            ))}
        </span>

        <div className="flex flex-col gap-3 py-2">
            {filteredCards.map((filter) => (
                <GenericCard
                    key={filter.label}
                    title="Carlton Madagascar"
                    image="https://img.freepik.com/photos-gratuite/maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph"
                    description="Réservez des Hebergements A Andasibe, Madagascar booking.com a été visité par plus d'un million d'utilisateurs au cours du mois dernier Auberges de Jeunesse Réservation Sécurisée"
                    place="Antananarivo, Analamanga"
                    mark={marks.service}
                />
            ))}
        </div>
    </>
}
export default LibrairyContent