import { FC, useState } from "react";
import { MdCarRental, MdCleaningServices, MdDescription, MdHouse, MdSnowboarding } from "react-icons/md";
import { IListAction } from "../../interfaces/genricModule/icolumn.interface";
import BadgeCustom from "../components/BadgeCustom";
import AccommodationList from "./accommodation/AccommodationList";
import ActivityList from "./activity/ActivityList";

// CONFIG mark
export const marks = {
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
    { label: "Activité", icon: <MdSnowboarding />, callback: () => console.log("activity") },
    { label: "Hébergement", icon: <MdHouse />, callback: () => console.log('accommodation') },
    { label: "Transport", icon: <MdCarRental />, callback: () => console.log('transport') },
    { label: "Service", icon: <MdCleaningServices />, callback: () => console.log('service') }
]

const LibrairyContent: FC = () => {
  
    /** STORE */

    const [activeFilter, setActiveFilter] = useState<string>("Tout");

    const handleFilterClick = (filterLabel: string) => {
        setActiveFilter(filterLabel);
    };


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
        <AccommodationList/>
        <ActivityList/>

    </>
}
export default LibrairyContent