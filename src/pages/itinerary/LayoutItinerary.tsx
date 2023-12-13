import { FC } from "react";
import { AiOutlineCamera, AiOutlinePlus } from "react-icons/ai"
import { IoBed, IoCalendarOutline } from "react-icons/io5"
import { BsSendFill } from "react-icons/bs"
import { useLocation, useNavigate } from "react-router-dom";
import Tabs from "../../components/tabs/Tabs"
import { useItineraryStore } from "../../stores/itinerary.store";

const LayoutItinerary: FC = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const selectedItinerary = useItineraryStore(state => state.selectedItinerary);
    const setSelectedItinerary = useItineraryStore(state => state.setSelectedItinerary);

    return <>
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b rotate-180 opacity-80 from-stone-900"></div>
            <div className="flex flex-col justify-between py-4 bg-cover bg-top bg-no-repeat" style={{ backgroundImage: "url('../../../../photos/bg_maki.png')", minHeight: "400px" }}>
                <div className="px-10 flex items-center justify-between">
                    <div className="flex justify-between">
                        <div className="rounded-full bg-stone-950 opacity-80 p-3">
                            <AiOutlineCamera className="cursor-pointer" color="white" size="20px" fontWeight="bold" /></div>
                        <div></div>
                    </div>
                    <div className="flex items-center font-semibold">
                        {/* <div className=" rounded-md bg-stone-950 opacity-80 border-white border-dashed border-2 text-white ml-2 px-2 py-1">
                            LOGO
                        </div>
                        <div className=" rounded-md bg-stone-950 opacity-80 border-white text-white ml-2 px-2 py-1">
                            Unbranded
                        </div>
                        <div className=" rounded-md bg-stone-950 opacity-80 border-white text-white ml-2 px-2 py-1">
                            <AiOutlinePlus color="white" fontSize="1.5em"/>
                        </div> */}
                    </div>
                </div>
                <div className="px-10 mb-6 absolute bottom-0 flex justify-between w-full">
                    <div className="flex flex-col items-start font-bold text-white">
                        <div className=" text-3xl py-4" style={{ fontSize: "45px" }}>
                            {selectedItinerary?.title}
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-3xl p-2 flex items-center bg-stone-400 bg-opacity-50">
                                <img className="w-7 h-7 rounded-full mr-4" src="/profile-pic-test.jpg" alt="" />
                                <div className="">Brooklyn Simmons</div>
                            </div>
                            <div className="flex items-center mx-6 pr-6 border-r-2 border-white">
                                <img src="/photos/people.svg" className="mr-2" alt="" />
                                <span className="mx-2">4 Adults</span>
                                <span className="mx-2">3 Enfants</span>
                            </div>
                            <div className="flex items-center">
                                <IoBed className="mx-2" />
                                <span className="mx-2">2 SGL</span>
                                <span className="mx-2">2 DBL</span>
                                <span className="mx-2">1 TPL</span>
                            </div>
                        </div>
                        <div className="flex items-center my-5">
                            <IoCalendarOutline className="mx-4" />
                            19 SEP 2023  -  21 SEP 2023
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="flex flex-col">
                            <div className=" font-normale text-white my-1">Cree par:</div>
                            <div className="flex items-center">
                                <img className="w-10 h-10 rounded-lg mr-2" src="/profile-pic-test.jpg" alt="" />
                                <div className="flex  flex-col">
                                    <span className=" text-white font-semibold">Kristin Watson</span>
                                    <span className="text-white font-normale">Admin</span>
                                </div>
                            </div>
                            <button className="contained-button-secondary my-2">
                                <BsSendFill className="text-white" />
                                <span>Envoyer</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full absolute -bottom-6">
                    <div className="px-10 flex bg-white text-grey font-semibold rounded-2xl shadow-lg">
                        <Tabs
                            items={[
                                {
                                    active: pathname.includes("new"),
                                    label: "Itinéraire",
                                    callback: () => {
                                        navigate("/app/itinerary/new")
                                    }
                                },
                                {
                                    active: pathname.includes("quotations"),
                                    label: "Cotations",
                                    callback: () => {
                                        navigate("/app/itinerary/quotations")
                                    }
                                },
                                {
                                    active: pathname.includes("rates"),
                                    label: "Tarifs",
                                    callback: () => {
                                        navigate("/app/itinerary/rates")
                                    }
                                },
                                {
                                    active: pathname.includes("invoicing"),
                                    label: "Facturation",
                                    callback: () => {
                                        navigate("/app/itinerary/invoicing")
                                    }
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default LayoutItinerary