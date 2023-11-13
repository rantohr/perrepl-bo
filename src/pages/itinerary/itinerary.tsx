import { FC, useState, useEffect, useRef } from "react";
import { AiOutlineCamera, AiOutlinePlus } from "react-icons/ai"
import { IoBed, IoCalendarOutline, IoPricetagOutline } from "react-icons/io5"
import { BsSendFill, BsFillCarFrontFill } from "react-icons/bs"
import { RiArrowDropDownLine } from "react-icons/ri"
import { BiSearch, BiSolidPlaneAlt } from "react-icons/bi"
import { TiDocumentText } from "react-icons/ti"
import { GiFootTrip } from "react-icons/gi"
import { HiMiniBuildingOffice } from "react-icons/hi2"
import { FaTaxi } from "react-icons/fa"
import { HiOutlinePhotograph } from "react-icons/hi"
import { CgFileDocument } from "react-icons/cg"
import FlightCard from "./components/event/flightCard";
import ActivityCard from "./components/event/activityCard";
import LodgingCard from "./components/event/lodgingCard";
import { Modal, Select, Button } from "flowbite-react";
import GenericUpload from "../../components/genericUpload/GenericUpload";
 
const Itinerary: FC = () =>{
    const [isOpenDropDownEvent, setIsOpenDropDownEvent] = useState<boolean>(false)
    const [isOpenDropDownInfo, setIsOpenDropDownInfo] = useState<boolean>(false)
    const dropdownEventRef = useRef<HTMLDivElement>(null)
    const dropdownInfoRef = useRef<HTMLDivElement>(null)


    const toggleDropdownEvent = () => {
        setIsOpenDropDownEvent(!isOpenDropDownEvent);
    };
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownEventRef.current && !dropdownEventRef.current.contains(event.target as Node)) {
                setIsOpenDropDownEvent(false);
            }
        };
    
        window.addEventListener('click', handleOutsideClick);
    
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    const toggleDropdownInfo = () => {
        setIsOpenDropDownInfo(!isOpenDropDownInfo);
    };
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownInfoRef.current && !dropdownInfoRef.current.contains(event.target as Node)) {
                setIsOpenDropDownInfo(false);
            }
        };
    
        window.addEventListener('click', handleOutsideClick);
    
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // CONFIG EVENT CATEGORIES
    interface IEventCategory {
        icon: JSX.Element;
        label: string;
    }
    const eventCategories: IEventCategory[] = [
        {
            icon: <BiSolidPlaneAlt />,
            label: 'Flight',
        },
        {
            icon: <BiSolidPlaneAlt />,
            label: 'Activite',
        },
        {
            icon: <GiFootTrip />,
            label: 'Excursion',
        },
        {
            icon: <HiMiniBuildingOffice />,
            label: 'Hebergement',
        },
        {
            icon: <FaTaxi />,
            label: 'Transfert',
        },
        {
            icon: <BsFillCarFrontFill />,
            label: 'Transport',
        },
        {
            icon: <BiSolidPlaneAlt />,
            label: 'Service',
        }
    ];
    // // Config Card
    const flightData = {
        title: 'DEPARTURE - Central European Summer Time',
        schedule: '22:53',
        airport: 'Paris-Charles De Gaulle (CDG)',
        airline: 'Air France',
        flightNumber: 'AF 934',
    };
    const activityData = {
        title: 'Visit to Ambohimanga Place',
        description: 'Réservez des Hebergements A Andasibe, Madagascar booking.com a été visité par plus d\'un million d\'utilisateurs au cours du mois dernier Auberges de Jeunesse Réservation Sécurisée',
        images: [
            'https://img.freepik.com/photos-gratuite/maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph',
            'https://img.freepik.com/photos-gratuite/maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph',
        ],
        tags: [
            { icon: <IoPricetagOutline className="mr-2"/>, label: 'Tour guide' },
            { icon: <IoPricetagOutline className="mr-2"/>, label: 'Prix d\'entree' }
        ],
    };
    const lodgingData = {
        title: 'Relais des Plateaux Hotel & Spa',
        description: 'Located less than 5 km from Ivato Airport...',
        image: 'https://img.freepik.com/photos-gratuite/maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph',
    };

    // VISIBILITY
    const [isFlightVisible, setIsFlightVisible] = useState(false)
    const [isActivityVisible, setIsActivityVisible] = useState(false)
    const [isLodgingVisible, setIsLodgingVisible] = useState(false)
    const handleFlightClick = () => {
        setIsFlightVisible(!isFlightVisible);
    };
    const handleActivityClick = () => {
        setIsActivityVisible(!isActivityVisible);
    };
    const handleLodgingClick = () => {
        setIsLodgingVisible(!isLodgingVisible);
    };

    // Modal
    const [openModal, setOpenModal] = useState(false)

    return <>
    {/* START HEADER */}
    <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b rotate-180 opacity-80 from-stone-900"></div>
        <div className="flex flex-col justify-between py-4 bg-cover bg-top bg-no-repeat" style={{backgroundImage: "url('../../../photos/bg_maki.png')", minHeight: "400px"}}>
            <div className="px-10 flex items-center justify-between">
                <div className="flex justify-between">
                    <div className="rounded-full bg-stone-950 opacity-80 p-3">
                        <AiOutlineCamera className="cursor-pointer" color="white" size="20px" fontWeight="bold" /></div>
                    <div></div>
                </div>
                <div className="flex items-center font-semibold">
                    <div className=" rounded-md bg-stone-950 opacity-80 border-white border-dashed border-2 text-white ml-2 px-2 py-1">
                        LOGO
                    </div>
                    <div className=" rounded-md bg-stone-950 opacity-80 border-white text-white ml-2 px-2 py-1">
                        Unbranded
                    </div>
                    <div className=" rounded-md bg-stone-950 opacity-80 border-white text-white ml-2 px-2 py-1">
                        <AiOutlinePlus color="white" fontSize="1.5em"/>
                    </div>
                </div>
            </div>
            <div className="px-10 mb-6 absolute bottom-0 flex justify-between w-full">
                <div className="flex flex-col items-start font-bold text-white">
                    <div className=" text-3xl py-4" style={{fontSize:"45px"}}>
                        Wildlif Exploration in Andasibe - Maruxi
                    </div>
                    <div className="flex items-center">
                        <div className="rounded-3xl p-2 flex items-center bg-stone-400 bg-opacity-50">
                            <img className="w-7 h-7 rounded-full mr-4" src="/profile-pic-test.jpg" alt="" style={{objectFit: "cover"}} />
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
                            <img className="w-10 h-10 rounded-lg mr-2" src="/profile-pic-test.jpg" alt="" style={{objectFit: "cover"}} />
                            <div className="flex  flex-col">
                                <span className=" text-white font-semibold">Kristin Watson</span>
                                <span className="text-white font-normale">Admin</span>
                            </div>
                        </div>
                        <button className="contained-button-secondary my-2">
                            <BsSendFill className="text-white"/>
                            <span>Envoyer</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full absolute -bottom-6">
                <div className="px-10 flex bg-white text-grey font-semibold rounded-2xl shadow-lg">
                    <div className="flex items-center justify-center py-3 px-8 uppercase cursor-pointer text-violet-pink border-b-4 border-violet-pink">ITINERAIRE</div>
                    <div className="flex items-center justify-center py-3 px-8 uppercase cursor-pointer">COTATIONS</div>
                    <div className="flex items-center justify-center py-3 px-8 uppercase cursor-pointer">TARIFS</div>
                    <div className="flex items-center justify-center py-3 px-8 uppercase cursor-pointer">FACTURATION</div>
                </div>
            </div>
        </div>
    </div>
    {/* END HEADER */}

    {/* START CONTAINER */}
    <div className="flex mt-16 w-full px-8">
        {/* SIDEBAR */}
        <div className="flex flex-col w-1/5 px-1">
            <div className="flex flex-col items-end mb-8">
                <button className="font-bold bg-violet-1 shadow-lg shadow-violet-300 text-white w-full flex items-center px-2 py-2 rounded-lg my-2">
                    <RiArrowDropDownLine className="text-white mx-4 w-10 h-10 font-light"/>
                    <span>ITINERAIRE</span>
                </button>
                <div className=" w-5/6 font-semibold text-grey">
                    <div className="cursor-pointer relative rounded-lg bg-white px-4 py-2 my-2">
                        <span className="absolute top-4 -left-1.5 bg-violet-1 w-3 h-3 rounded-full"></span>
                        <span className=" text-black">19 Septembre 2023</span>
                    </div>
                    <div className="cursor-pointer relative rounded-lg  px-4 py-2 my-2">
                        <span className=" ">20 Septembre 2023</span>
                    </div>
                </div>
                <div className="cursor-pointer flex w-full items-center text-violet-1 justify-start pl-6">
                    <AiOutlinePlus fontSize="1em" className="mr-2"/>
                    Nouveau jour
                </div>
            </div>
            <div className="flex flex-col items-end mb-8">
                <button className="font-bold bg-violet-1 shadow-lg shadow-violet-300 text-white w-full flex items-center px-2 py-2 rounded-lg my-2">
                    <RiArrowDropDownLine fontSize="40px" className="text-white mx-4"/>
                    <span>DETAILS</span>
                </button>
                <div className="cursor-pointer w-5/6 font-semibold text-grey">
                    <div className="relative rounded-lg px-4 py-2 my-2">
                        <span className="">Information & Documents</span>
                    </div>
                    <div className="cursor-pointer relative rounded-lg  px-4 py-2 my-2">
                        <span className=" ">Notes</span>
                    </div>
                </div>
                <div className="cursor-pointer flex w-full items-center text-violet-1 justify-start pl-6">
                    <AiOutlinePlus fontSize="1em" className="mr-2"/>
                    Nouvelle liste
                </div>
            </div>
        </div>
        {/* CONTENT */}
        <div className="flex flex-col w-4/5 px-6">
            <div className="flex w-full justify-between">
                <div className="flex flex-col">
                    <span className="text-black font-bold mt-6 mb-1" style={{fontSize:"30px"}}>19 Septembre 2023</span>
                    <span className="text-grey font-bold" style={{fontSize:"25px"}}>Ambohimanga Place</span>
                </div>
                <div className="relative inline-block text-left" ref={dropdownEventRef}>
                        
                    <button
                        onClick={() => setOpenModal(true)}
                        className="contained-button-secondary text-white w-full flex items-center px-4 py-4 rounded-lg my-2"
                    >
                        Open Modal
                    </button>
                    <button
                        onClick={toggleDropdownEvent}
                        className="font-bold bg-violet-1 shadow-lg shadow-violet-300 text-white w-full flex items-center px-4 py-4 rounded-lg my-2"
                    >
                        <AiOutlinePlus className="mr-4" />
                        Ajouter un événement
                    </button>
                    {isOpenDropDownEvent && (
                        <div
                        className="z-10 origin-top-right w-full absolute right-0 mt-2 rounded-lg shadow-lg bg-white divide-y divide-gray-100"
                        >
                            <ul className=" py-2 text-sm text-gray-700 dark:text-gray-200">
                                {eventCategories && 
                                    eventCategories.map((category, category_index) => {
                                        return (
                                            <li key={`event-category-${category_index}`}>
                                                <div
                                                className="hover-event-item flex items-center text-lg text-violet-1 font-semibold px-4 py-1 dark:hover:text-white cursor-pointer"
                                                onClick={
                                                    category.label === 'Flight'
                                                        ? handleFlightClick
                                                        : category.label === 'Activite'
                                                        ? handleActivityClick
                                                        : category.label === 'Hebergement'
                                                        ? handleLodgingClick 
                                                        : undefined
                                                }
                                                >
                                                    {category.icon && category.icon}
                                                    <span className="ml-4 text-base">{category.label && category.label}</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* EVENTS */}
            <div className="flex flex-col w-full">
                {isFlightVisible && <FlightCard {...flightData}/>}
                {isActivityVisible && <ActivityCard {...activityData}/>}
                {isLodgingVisible && <LodgingCard {...lodgingData}/>}
                
                {/* SEARCH BAR */}
                <div className="flex w-full mt-14">
                    <div className="flex w-full items-center bg-white rounded-xl px-10 py-1 mr-6 shadow-lg">
                        <BiSearch className="text-grey text-3xl"/>
                        <input type="text" className="flex w-full border-none p-4 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 focus:ring-0 focus:ring-offset-0" placeholder="Hotel, activites, location"/>
                    </div>
                    <div className="bg-white w-14 h-14 flex items-center justify-center rounded-xl p-4 cursor-pointer">
                        <TiDocumentText className="text-grey text-3xl"/>
                    </div>
                </div>
            </div>

            {/* INFORMATIONS & DOCUMENT */}
            <div className="flex flex-col w-full mt-14">
                <div className="text-black text-md font-bold mt-2 mb-4" style={{fontSize:"25px"}}>Informations & Documents</div>
                <div className="flex">
                    <div className="flex w-full items-center bg-white rounded-xl px-10 pt-1 pb-8 mr-6 shadow-lg">
                        <textarea 
                            className="flex w-full border-none py-4 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 focus:ring-0 focus:ring-offset-0" 
                            placeholder="Ajouter plus d'informations"/>
                    </div>
                    <div className="relative w-auto flex h-full" ref={dropdownInfoRef}>
                        <button 
                            onClick={toggleDropdownInfo}
                            className="bg-white w-14 h-14 flex items-center justify-center rounded-xl p-4 cursor-pointer">
                            <AiOutlinePlus className="text-grey text-3xl"/>
                        </button>
                        {isOpenDropDownInfo && (
                            <div
                            className="origin-bottom-right absolute right-0 top-full mt-2 rounded-lg shadow-lg bg-white divide-y divide-gray-100" style={{minWidth: "230px"}}
                            >
                                <ul className="flex flex-col py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        <div className="flex items-center justify-start text-lg text-green-400 bg-green-100 my-1 py-1 rounded-lg font-semibold mx-4 px-2 cursor-pointer">
                                            <HiOutlinePhotograph/>
                                            <span className="ml-3 text-base">Photos ou videos</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center justify-start text-lg text-blue-400 bg-blue-100 my-1 py-1 rounded-lg font-semibold mx-4 px-2 cursor-pointer">
                                            <CgFileDocument/>
                                            <span className="ml-3 text-base">Documents</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* NOTES */}
            <div className="flex flex-col w-full mt-10">
                <div className="text-grey text-md font-bold mb-3" style={{fontSize:"25px"}}>Notes</div>
                <div className="flex w-full">
                    <div className="flex w-full items-center bg-white rounded-xl px-10 py-1 mr-6 shadow-lg">
                        <BiSearch className="text-grey text-3xl"/>
                        <input type="text" className="flex w-full border-none p-4 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 focus:ring-0 focus:ring-offset-0" placeholder="Hotel, activites, location"/>
                    </div>
                    <div className="bg-white w-14 h-14 flex items-center justify-center rounded-xl p-4 cursor-pointer">
                        <AiOutlinePlus className="text-grey text-3xl"/>
                    </div>
                </div>
                <div className="my-4">
                    <button className="contained-button-secondary px-4 py-3">
                        <AiOutlinePlus className="text-xl font-semibold" />
                        <span className="text-semibold">Nouvelle liste</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    {/* END CONTAINER */}

    {/* START MODAL */}
    <Modal size="3xl" dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
        <div className="form-modal">
            <Modal.Header className="form-modal-header border-0 py-0">
                <div className=" rounded-full p-2 bg-violet-200">
                    <HiMiniBuildingOffice />
                </div>
            </Modal.Header>
            <Modal.Body className="py-0">
                <div className="form-modal-body">
                    <div className="flex">
                        <div className="flex flex-col">
                            <div className="text-violet-1 text-lg font-semibold">Relais des Plateaux Hotel & Spa</div>
                            <div className="text-grey text-xs">Located less than 5 km from Ivato Airport, the Relais des Plateaux features a restaurant, a tropical garden and a 24-hour reception. This hotel provides a free shuttle to the airport and Antananarivo, the capital, is 19 km away.</div>
                        </div>
                        <div className="flex w-auto mx-4">
                            <div className="rounded-2xl flex w-36 gap-5">
                                <img className="rounded-xl" src="https://img.freepik.com/photos-gratuite/maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full my-6">
                        <div className="flex items-center">
                            <span className="text-violet-1 text-lg font-semibold">Configuration de chambre</span>
                            <div className="flex h-auto ml-2">
                                <div className="mx-2 text-grey text-sm font-normal border-r-2 border-stone-300 pr-2">SGL <span className="text-violet-1 font-semibold mx-1">2</span></div>
                                <div className="mx-2 text-grey text-sm font-normal border-r-2 border-stone-300 pr-2">DBL <span className="text-violet-1 font-semibold mx-1">2</span></div>
                                <div className="mx-2 text-grey text-sm font-normal">TPL <span className="text-violet-1 font-semibold mx-1">1</span></div>
                            </div>
                        </div>

                        <div>
                            <table className="text-grey w-full mt-4">
                                <thead>
                                    <tr>
                                        <th className=" font-semibold py-2 text-sm text-start pl-2">Room Type</th>
                                        <th className=" font-semibold py-2 text-sm text-start pl-2">Room Category</th>
                                        <th className=" font-semibold py-2 text-sm text-start pl-2">Base</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <>
                                        <tr key={index} className="">
                                            <td className="pr-2">
                                                <select className="border-grey text-grey text-sm rounded-lg focus:ring-grey w-full p-2.5">
                                                    <option selected>Single</option>
                                                </select>
                                            </td>
                                            <td className="pr-2">
                                                <select className="border-grey text-grey text-sm rounded-lg focus:ring-grey w-full p-2.5">
                                                    <option selected>Standard Room</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select className="border-grey text-grey text-sm rounded-lg focus:ring-grey w-full p-2.5">
                                                    <option selected>B&B</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <div className="mb-2"></div>
                                    </>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="form-modal-footer">
                    <Button color="gray" onClick={() => setOpenModal(false)}>Annuler</Button>
                    <Button onClick={() => setOpenModal(false)} className="contained-button">VALIDER</Button>
                </div>
            </Modal.Body>
        </div>
        </Modal.Body>
    </Modal>
    {/*  END MODAL */}

    {/*  GENERIC UPLOAD */}
    <GenericUpload />

    </>
}

export default Itinerary