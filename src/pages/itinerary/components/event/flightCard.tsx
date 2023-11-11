import { FC } from "react";
import "./EventCard.css"
import { TbClockHour5 } from "react-icons/tb"
import { BiSolidPlaneAlt } from "react-icons/bi"

const FlightCard: FC<{
    title: string;
    schedule: string;
    airport: string;
    airline: string;
    flightNumber: string;
}> = ({ title, schedule, airport, airline, flightNumber }) =>{
    return (
        <div className=" relative bg-white rounded-tr-3xl rounded-br-3xl rounded-bl-3xl px-10 pt-4 pb-6 ml-6 mt-8 mr-14">
            <div className=" absolute -top-4 -left-7 rounded-full bg-white border-violet-pink border-2 p-1">
                <BiSolidPlaneAlt className=" text-violet-pink text-xl"/>
            </div>
            <div className="dashed-line"></div>
            <div className="text-violet-1 text-lg font-semibold">{title}</div>
            <div className="flex w-full">
                <div className="flex flex-col justify-start mt-4 pr-10 mr-8 border-r-2 border-r-grey">
                    <div className="text-grey font-normal flex items-center"><TbClockHour5/> Horaire</div>
                    <span className="font-semibold text-violet-1">{schedule}</span>
                </div>
                <div className="flex flex-col justify-start mt-4 pr-10 mr-8 border-r-2 border-r-grey">
                    <div className="text-grey font-normal flex items-center">AEROPORT</div>
                    <span className="font-semibold text-violet-1">{airport}</span>
                </div>
                <div className="flex flex-col justify-start mt-4 pr-10 mr-8 border-r-2 border-r-grey">
                    <div className="text-grey font-normal flex items-center">AIRLINE</div>
                    <span className="font-semibold text-violet-1">{airline}</span>
                </div>
                <div className="flex flex-col justify-start mt-4">
                    <div className="text-grey font-normal flex items-center">FLIGHT NUMBER</div>
                    <span className="font-semibold text-violet-1">{flightNumber}</span>
                </div>
            </div>
        </div>
    );
}
export default FlightCard