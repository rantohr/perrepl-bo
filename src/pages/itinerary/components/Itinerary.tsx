import { FC, useState, useEffect, useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { IoPricetagOutline } from "react-icons/io5"
import { BsFillCarFrontFill } from "react-icons/bs"
import { BiSolidPlaneAlt } from "react-icons/bi"
import { GiFootTrip } from "react-icons/gi"
import { FaTaxi } from "react-icons/fa"
import { RiArrowDropDownLine } from "react-icons/ri"
import { HiMiniBuildingOffice } from "react-icons/hi2"
import { BiSearch } from "react-icons/bi"
import { TiDocumentText } from "react-icons/ti"
import { HiOutlinePhotograph } from "react-icons/hi"
import { CgFileDocument } from "react-icons/cg"
import FlightCard from "./event/flightCard"
import ActivityCard from "./event/activityCard"
import LodgingCard from "./event/lodgingCard";
import { Modal, Button } from "flowbite-react";
import { useItineraryStore } from "../../../stores/itinerary.store";
import { IItinerary } from "../../../interfaces/iitinerary.interface";
import { format } from "date-fns";
import { ILocation } from "../../../interfaces/ilocation.interface";
import GenericField from "../../../components/generciForm/GenericField";
import { getLocations } from "../../../services/location.service";
import { getAccommodations } from "../../../services/accommodation.service";
import { IAccommodation } from "../../../interfaces/iaccommodation.interface";
import { getActivities } from "../../../services/activity.service";
import { IActivity } from "../../../interfaces/iactivity.interface";
import { postItinerary } from "../../../services/itinerary.service";
import { useNavigate } from "react-router-dom";
import { IListAction } from "../../../interfaces/genricModule/icolumn.interface";
import GenericBtnDropdown from "../../../components/genericBtnDropdown/genericBtnDropdown";

const Itinerary: FC = () => {

    const navigate = useNavigate();

    const selectedItinerary = useItineraryStore(state => state.selectedItinerary);
    const setSelectedItinerary = useItineraryStore(state => state.setSelectedItinerary);

    const [selectedSegmentIndex, setSelectedSegmentIndex] = useState<number>(0);
    const [openDesti, setOpenDesti] = useState(false);
    const [add_mode, setAddMode] = useState('');

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

    // CONFIG EVENT CATEGORIES
    interface IEventCategory {
        icon: JSX.Element;
        label: string;
        onClick?: () => void;
    }
    const eventCategories: IEventCategory[] = [
        {
            icon: <BiSolidPlaneAlt />,
            label: 'Flight',
            callback: () => {handleFlightClick}
        },
        {
            icon: <BiSolidPlaneAlt />,
            label: 'Activité',
            onClick: () => setAddMode('activity')
        },
        {
            icon: <GiFootTrip />,
            label: 'Excursion'
        },
        {
            icon: <HiMiniBuildingOffice />,
            label: 'Hébergement',
            onClick: () => setAddMode('accommodation')
        },
        {
            icon: <FaTaxi />,
            label: 'Transfert',
            callback: () => {}
        },
        {
            icon: <BsFillCarFrontFill />,
            label: 'Transport',
            callback: () => {}
        },
        {
            icon: <BiSolidPlaneAlt />,
            label: 'Service',
            callback: () => {}
        }
    ];
    const dropdownEvent: IListAction = {
        label: "Ajouter un événement",
        icon: <AiOutlinePlus className="mr-4" />,
        callback: () => {alert("OK")},
        actions: eventCategories
    }

    // // Config Card
    const flightData = {
        title: 'DEPARTURE - Central European Summer Time',
        schedule: '22:53',
        airport: 'Paris-Charles De Gaulle (CDG)',
        airline: 'Air France',
        flightNumber: 'AF 934',
    };

    // Modal
    const [openModal, setOpenModal] = useState(false)

    /** DAYS HANDLING */
    const addDay = () => {
        setOpenDesti(false);
    };
    const removeDay = () => {
        const itinerary: IItinerary = JSON.parse(JSON.stringify(selectedItinerary));
        if (selectedSegmentIndex === itinerary.segments.length - 1) setSelectedSegmentIndex(itinerary.segments.length - 2 >= 0 ? itinerary.segments.length - 2 : 0);
        if (itinerary.segments.length) itinerary.segments.pop();
        setSelectedItinerary(itinerary);
    };

    /** Destination */
    const onSelectDestination = (destination: ILocation) => {
        const itinerary: IItinerary = JSON.parse(JSON.stringify(selectedItinerary));

        let start = new Date();
        if (itinerary.segments.length && itinerary.segments[itinerary.segments.length - 1]) start = new Date(itinerary.segments[itinerary.segments.length - 1].arrival_time_utc || '');
        else if (itinerary.order![0]?.arrival_datetime) start = new Date(itinerary.order![0]?.arrival_datetime || '');

        const end = new Date(start.getTime());
        end.setDate(end.getDate() + 1);

        itinerary.segments.push({
            duration: 1,
            start_location: [destination],
            departure_time_utc: start.toUTCString(),
            arrival_time_utc: end.toUTCString(),
            hotels: [],
            activities: [],
            explorations: [],
            services: [],
            transfers: [],
            transportations: [],
        });
        setSelectedItinerary(itinerary);

        setOpenDesti(false);
    };

    /** Hotels */
    const onSelectHotel = (hotel: IAccommodation) => {
        const itinerary: IItinerary = JSON.parse(JSON.stringify(selectedItinerary));

        if (!itinerary?.segments![selectedSegmentIndex]?.hotels?.length) {
            itinerary.segments[selectedSegmentIndex].hotels = [];
        }
        itinerary.segments[selectedSegmentIndex].hotels?.push(hotel);
        setSelectedItinerary(itinerary);
        setAddMode('');
    };

    const onRemoveHotel = (index: number) => {
        const itinerary: IItinerary = JSON.parse(JSON.stringify(selectedItinerary));

        if (itinerary?.segments![selectedSegmentIndex]?.hotels![index]) {
            itinerary.segments[selectedSegmentIndex].hotels?.splice(index, 1);
        }
        setSelectedItinerary(itinerary);
        setAddMode('');
    };

    /** activities */
    const onSelectActivity = (item: IActivity) => {
        const itinerary: IItinerary = JSON.parse(JSON.stringify(selectedItinerary));

        if (!itinerary?.segments![selectedSegmentIndex]?.activities?.length) {
            itinerary.segments[selectedSegmentIndex].activities = [];
        }
        itinerary.segments[selectedSegmentIndex].activities?.push(item);
        setSelectedItinerary(itinerary);
        setAddMode('');
    };
    const onRemoveActivity = (index: number) => {
        const itinerary: IItinerary = JSON.parse(JSON.stringify(selectedItinerary));

        if (itinerary?.segments![selectedSegmentIndex]?.activities![index]) {
            itinerary.segments[selectedSegmentIndex].activities?.splice(index, 1);
        }
        setSelectedItinerary(itinerary);
        setAddMode('');
    };

    /** CONFIRM */
    const createItinerary = () => {
        console.log('<<createItinerary>>', selectedItinerary)
        if (selectedItinerary) {
            const validated: any = {
                title: selectedItinerary.title,
                description: '',
                availability: '',
                duration: selectedItinerary.segments?.length || 0,
                segments: selectedItinerary.segments?.map(segment => {
                    return {
                        description: '',
                        duration: 1,
                        start_location: [segment.start_location![0]?.id],
                        end_location: [],
                        arrival_time_utc: segment.arrival_time_utc,
                        departure_time_utc: segment.departure_time_utc,
                        hotels: segment.hotels?.map(i => i.hotel_id),
                        activities: segment.activities?.map(i => i.id),
                    }
                })
            }
            postItinerary(validated)
                .then(response => {
                    console.log('Created');
                    navigate('/app/itinerary/list');
                })
                .catch(err => console.log('Error: ', err));
        }
    };

    return <>
        <div className="flex w-full">
            {/* SIDEBAR */}
            <div className="flex flex-col w-1/5 px-1">
                <div className="flex flex-col items-end mb-8">
                    <button className="font-bold bg-violet-1 shadow-lg shadow-violet-300 text-white w-full flex items-center px-2 py-2 rounded-lg my-2">
                        <RiArrowDropDownLine className="text-white mx-4 w-10 h-10 font-light" />
                        <span>ITINERAIRE</span>
                    </button>
                    <div className=" w-5/6 font-semibold text-grey">
                        {
                            selectedItinerary?.segments?.map((segment, segment_i) => {
                                return (
                                    <div key={`segment-day-${segment_i}`} onClick={() => setSelectedSegmentIndex(segment_i)} className="cursor-pointer relative rounded-lg bg-white px-4 py-2 my-2">
                                        {
                                            segment_i === selectedSegmentIndex &&
                                            <span className="absolute top-4 -left-1.5 bg-violet-1 w-3 h-3 rounded-full"></span>
                                        }
                                        <span className=" text-black">{segment.arrival_time_utc ? format(new Date(segment.arrival_time_utc), 'dd/MM/yyyy') : `Jour ${segment_i + 1}`}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        (selectedItinerary?.segments?.length || 0) <= (selectedItinerary?.order![0]?.trip_duration || 1000) &&
                        <div className="cursor-pointer flex w-full items-center text-violet-1 justify-start pl-6" onClick={() => setOpenDesti(true)}>
                            <AiOutlinePlus fontSize="1em" className="mr-2" />
                            Nouveau jour
                        </div>
                    }
                    {
                        Boolean(selectedItinerary?.segments?.length) &&
                        <div className="cursor-pointer flex w-full items-center text-violet-1 justify-start pl-6" onClick={removeDay}>
                            <AiOutlineMinus fontSize="1em" className="mr-2" />
                            Supprimer le dernier jour
                        </div>
                    }
                </div>
                <div className="flex flex-col items-end mb-8">
                    <button className="font-bold bg-violet-1 shadow-lg shadow-violet-300 text-white w-full flex items-center px-2 py-2 rounded-lg my-2">
                        <RiArrowDropDownLine fontSize="40px" className="text-white mx-4" />
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
                        <AiOutlinePlus fontSize="1em" className="mr-2" />
                        Nouvelle liste
                    </div>
                </div>
            </div>
            {/* CONTENT */}
            <div className="flex flex-col w-4/5 px-6">
                {
                    selectedItinerary && Boolean(selectedItinerary?.segments[selectedSegmentIndex]) &&
                    <div className="flex w-full justify-between">
                        <div className="flex flex-col">
                            <span className="text-black font-bold mt-6 mb-1" style={{ fontSize: "30px" }}>{format(new Date(selectedItinerary.segments[selectedSegmentIndex].arrival_time_utc || ''), 'dd LLLL yyyy')}</span>
                            <span className="text-grey font-bold mt-3" style={{ fontSize: "25px" }}>{
                                selectedItinerary.segments[selectedSegmentIndex].start_location![0]?.commune || selectedItinerary.segments[selectedSegmentIndex].start_location![0]?.district || selectedItinerary.segments[selectedSegmentIndex].start_location![0]?.region
                            }</span>
                        </div>
                        <div className="relative inline-block text-left" ref={dropdownEventRef}>
                            {/* <button
                                onClick={() => setOpenModal(true)}
                                className="contained-button-secondary text-white w-full flex items-center px-4 py-4 rounded-lg my-2"
                            >
                                Open Modal
                            </button> */}
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
                                                            className="flex items-center text-lg text-violet-1 font-semibold px-4 py-1 dark:hover:text-white cursor-pointer"
                                                            onClick={category.onClick}
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
                }

                {/* EVENTS */}
                {
                    Boolean(selectedItinerary?.segments?.length) &&
                    <div className="flex flex-col w-full">
                        {/* SEARCH BAR */}
                        {
                            Boolean(add_mode) &&
                            <div className="flex w-full mt-14">
                                {
                                    add_mode === "accommodation" &&
                                    <GenericField
                                        object={selectedItinerary?.segments[selectedSegmentIndex]} field={{
                                            field: 'hotels', label: 'Rechercher un hôtel', onChange: (f, v) => onSelectHotel(v),
                                            type: "autocomplete", autocompleteGetter: getAccommodations, displayValue: (item) => item.name || item.title
                                        }} />
                                }
                                {
                                    add_mode === "activity" &&
                                    <GenericField
                                        object={selectedItinerary?.segments[selectedSegmentIndex]} field={{
                                            field: 'activities', label: 'Rechercher une activité', onChange: (f, v) => onSelectActivity(v),
                                            type: "autocomplete", autocompleteGetter: getActivities, displayValue: (item) => item.name || item.title
                                        }} />
                                }
                                {/* <div className="flex w-full items-center bg-white rounded-xl px-10 py-1 mr-6 shadow-lg">
                                    <BiSearch className="text-grey text-3xl" />
                                    <input type="text" className="flex w-full border-none p-4 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 focus:ring-0 focus:ring-offset-0" placeholder="Hotel, activites, location" />
                                </div>
                                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-xl p-4 cursor-pointer">
                                    <TiDocumentText className="text-grey text-3xl" />
                                </div> */}
                            </div>
                        }
                        {/* {isFlightVisible && <FlightCard {...flightData} />} */}
                        {
                            selectedItinerary?.segments[selectedSegmentIndex]?.hotels?.map((hotel, h_i) => {
                                return (<LodgingCard key={"hotel-" + h_i} hotel={hotel} onRemove={() => onRemoveHotel(h_i)} />);
                            })
                        }
                        {
                            selectedItinerary?.segments[selectedSegmentIndex]?.activities?.map((activity, a_i) => {
                                return (
                                    <ActivityCard key={"act-" + a_i} activity={activity}
                                        onRemove={() => onRemoveActivity(a_i)}
                                        tags={
                                            [
                                                { icon: <IoPricetagOutline className="mr-2" />, label: 'Tour guide' },
                                                { icon: <IoPricetagOutline className="mr-2" />, label: 'Prix d\'entree' }
                                            ]
                                        } />
                                );
                            })
                        }
                    </div>
                }

                {/* INFORMATIONS & DOCUMENT */}
                {/* <div className="flex flex-col w-full mt-14">
                    <div className="text-black text-md font-bold mt-2 mb-4" style={{ fontSize: "25px" }}>Informations & Documents</div>
                    <div className="flex">
                        <div className="flex w-full items-center bg-white rounded-xl px-10 pt-1 pb-8 mr-6 shadow-lg">
                            <textarea
                                className="flex w-full border-none py-4 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 focus:ring-0 focus:ring-offset-0"
                                placeholder="Ajouter plus d'informations" />
                        </div>
                        <div className="relative w-auto flex h-full" ref={dropdownInfoRef}>
                            <button
                                onClick={toggleDropdownInfo}
                                className="bg-white w-14 h-14 flex items-center justify-center rounded-xl p-4 cursor-pointer">
                                <AiOutlinePlus className="text-grey text-3xl" />
                            </button>
                            {isOpenDropDownInfo && (
                                <div
                                    className="origin-bottom-right absolute right-0 top-full mt-2 rounded-lg shadow-lg bg-white divide-y divide-gray-100" style={{ minWidth: "230px" }}
                                >
                                    <ul className="flex flex-col py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <div className="flex items-center justify-start text-lg text-green-400 bg-green-100 my-1 py-1 rounded-lg font-semibold mx-4 px-2 cursor-pointer">
                                                <HiOutlinePhotograph />
                                                <span className="ml-3 text-base">Photos ou videos</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center justify-start text-lg text-blue-400 bg-blue-100 my-1 py-1 rounded-lg font-semibold mx-4 px-2 cursor-pointer">
                                                <CgFileDocument />
                                                <span className="ml-3 text-base">Documents</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div> */}
                {/* NOTES */}
                {/* <div className="flex flex-col w-full mt-10">
                    <div className="text-grey text-md font-bold mb-3" style={{ fontSize: "25px" }}>Notes</div>
                    <div className="flex w-full">
                        <div className="flex w-full items-center bg-white rounded-xl px-10 py-1 mr-6 shadow-lg">
                            <BiSearch className="text-grey text-3xl" />
                            <input type="text" className="flex w-full border-none p-4 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 focus:ring-0 focus:ring-offset-0" placeholder="Hotel, activites, location" />
                        </div>
                        <div className="bg-white w-14 h-14 flex items-center justify-center rounded-xl p-4 cursor-pointer">
                            <AiOutlinePlus className="text-grey text-3xl" />
                        </div>
                    </div>
                    <div className="my-4">
                        <button className="contained-button-secondary px-4 py-3">
                            <AiOutlinePlus className="text-xl font-semibold" />
                            <span className="text-semibold">Nouvelle liste</span>
                        </button>
                    </div>
                </div> */}
                <div className="flex justify-end">
                    <button
                        onClick={createItinerary}
                        className="contained-button-secondary text-white flex items-center px-8 py-4 rounded-lg my-2"
                    >Créer l'itinéraire</button>
                </div>
            </div>

        </div>

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

        {/* DESTINATION MODAL */}
        <Modal size="xl" dismissible show={Boolean(openDesti)} onClose={() => setOpenDesti(false)}>
            <Modal.Body>
                <div className="form-modal">
                    <Modal.Header className="form-modal-header border-0 py-0">
                        <div className=" rounded-full p-2 bg-violet-200">
                            <HiMiniBuildingOffice />
                        </div>
                    </Modal.Header>
                    <Modal.Body className="py-0">
                        <div className="form-modal-body">
                            <GenericField object={selectedItinerary?.segments[selectedSegmentIndex]} field={{
                                field: 'start_location', label: 'Destination', onChange: (f, v) => onSelectDestination(v),
                                type: "autocomplete", autocompleteGetter: getLocations, displayValue: (item) => item.commune || item.district || item.region
                            }} />
                        </div>
                        <div className="form-modal-footer">
                            <Button color="gray" onClick={() => setOpenDesti(false)}>Annuler</Button>
                            <Button onClick={addDay} className="contained-button">VALIDER</Button>
                        </div>
                    </Modal.Body>
                </div>
            </Modal.Body>
        </Modal>
        {/*  DESTINATION MODAL */}
    </>
}
export default Itinerary