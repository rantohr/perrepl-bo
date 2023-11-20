import { FC } from "react";
import LayoutItinerary from "./LayoutItinerary";
import { Outlet } from "react-router-dom";
 
const ItineraryPage: FC = () =>{

    // const itemsTabs = 
    

    return <>
        {/* HEADER */}
        <LayoutItinerary />

        {/* CONTAINER */}
        <div className="flex mt-16 w-full px-8">
            <Outlet/>
        </div>
    </>
}

export default ItineraryPage