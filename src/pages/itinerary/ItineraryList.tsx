import { FC, useEffect, useState } from "react"
import GenericVariantSquareCard from "../../components/genericVariantSquareCard/GenericVariantSquareCard"
import { props } from "../../components/genericVariantSquareCard/GenericVariantSquareCard"
import GenericPageHeader from "../../components/genericList/GenericPageHeader"
import { IListAction } from "../../interfaces/genricModule/icolumn.interface"
import { MdOutlineAdd } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useItineraryStore } from "../../stores/itinerary.store"
import { IItinerary } from "../../interfaces/iitinerary.interface"
import { Modal } from "flowbite-react"
import { GrAddCircle } from "react-icons/gr"
import { IForm } from "../../interfaces/genricModule/iform.interface"
import GenericForm from "../../components/generciForm/GenericForm"
import { getOrders } from "../../services/order.service"
import { getItineraries } from "../../services/itinerary.service"
import { format } from "date-fns"

const ItineraryList: FC = () => {
	const navigate = useNavigate();

	const setSelectedItinerary = useItineraryStore(state => state.setSelectedItinerary);

	const [openForm, setOpenForm] = useState(false);
	const [cards, setCards] = useState<any[]>([]);
	const formData: IForm = {
		initialData: { title: '', order: null },
		fields: [
			{ field: 'title', label: "Titre", required: true, size: 3 },
			{ field: 'order', label: "Demande", size: 3, type: "autocomplete", autocompleteGetter: getOrders },
		],
		onCancel: () => setOpenForm(false),
		onConfirm: (data) => confirmOrder(data)
	};

	const getTravelerPax: any = (inputString: string | null | undefined) => {
		if (!inputString) return { adultsCount: 0, childrenCount: 0, infantsCount: 0 };
		const keyValuePairs = inputString.split(',');

		const counts: any = {};

		keyValuePairs.forEach(pair => {
			const [key, value] = pair.split(':');
			counts[key] = parseInt(value, 10);
		});

		const adultsCount = counts['ADT'] || 0;
		const childrenCount = counts['CNN'] || 0;
		const infantsCount = counts['INF'] || 0;

		return { adultsCount, childrenCount, infantsCount };
	}

	useEffect(() => {
		getItineraries(20, 0)
			.then(response => {
				if (response.data.results) {
					setCards(response.data.results?.map(i => {
						const pax = getTravelerPax(i?.order?.pax_type);
						return {
							title: i.title,
							image: i.image || "/photos/Rectangle-2384.jpg",
							content: {
								img_profil: "/profile-pic-test.jpg",
								name_profil: `${i.client?.first_name || ''} ${i.client?.last_name || ''}`,
								nb_person: `${pax?.adultsCount ? pax?.adultsCount + 'Adulte(s) - ' : '0'}${pax?.childrenCount ? pax?.childrenCount + 'Enfant(s) - ' : '0'}${pax?.infantsCount ? pax?.infantsCount + 'Bébé(s)' : '0'}`,
								date: `${i?.order?.arrival_datetime ? format(new Date(i.order.arrival_datetime), 'dd MMM yyyy') : ''} - 
								${i?.order?.departure_datetime ? format(new Date(i.order.departure_datetime), 'dd MMM yyyy') : ''} | ${i.duration} Jours`
							},
							action: { action: "Modifier", callback: () => { } },
							// price: 440,
							mark: {
								label: "NOUVEAU"
							}
						}
					}));
				}
			})
			.catch(err => console.error(err));
	}, []);

	const actions: IListAction[] = [
		{ label: "Nouvelle itinéraire", icon: <MdOutlineAdd />, callback: () => setOpenForm(true), className: "contained-button" },
	];

	const confirmOrder = (data: any) => {
		const itinerary: IItinerary = {
			title: data.title || "",
			duration: 0,
			segments: [],
			order: [],
			client: [],
		};
		if (data.order) itinerary.order = [data.order];
		setSelectedItinerary(itinerary);
		setOpenForm(false);
		navigate('/app/itinerary/new');
	};

	return (
		<div className="list-container order-list">
			<GenericPageHeader title="Itinéraire" total={8} actions={actions} />

			<div className="cards">
				{cards.map((card, card_index) => {
					return (
						<GenericVariantSquareCard key={'card-' + card_index}
							title={card.title}
							image={card.image}
							content={card.content}
							action={card.action}
							price={card.price}
							mark={card.mark}
						/>
					)
				})}
			</div>

			<Modal dismissible show={openForm} onClose={() => setOpenForm(false)} className="glass-container">
				<Modal.Body>
					<div className="form-modal">
						<Modal.Header className="form-modal-header">
							<GrAddCircle />
							<h3>Nouvelle Itinéraire</h3>
							<p>Ajouter une nouvelle itinéraire</p>
						</Modal.Header>
						<Modal.Body>
							<GenericForm formData={formData} />
						</Modal.Body>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	)
}

export default ItineraryList