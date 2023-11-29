import { FC, useState } from "react"
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

const ItineraryList: FC = () => {
	const navigate = useNavigate();

	const setSelectedItinerary = useItineraryStore(state => state.setSelectedItinerary);

	const [openForm, setOpenForm] = useState(false);
	const formData: IForm = {
		initialData: { title: '', order: null },
		fields: [
			{ field: 'title', label: "Titre", required: true, size: 3 },
			{ field: 'order', label: "Demande", size: 3, type: "autocomplete" },
		],
		onCancel: () => setOpenForm(false),
		onConfirm: (data) => confirmOrder(data)
	};

	const cards: props[] = [
		{
			title: "Road Trip a Madagascar",
			image: "/photos/Rectangle-2384.jpg",
			content: {
				img_profil: "/profile-pic-test.jpg",
				name_profil: "Jane Cooper",
				nb_person: "2 Adultes",
				date: "20 JUIN - 29 JUIN | 9Jours"
			},
			action: { action: "Paysages des hauts plateaux", callback: () => { } },
			price: 440,
			mark: {
				label: "NOUVEAU"
			}
		},
		{
			title: "Road Trip a Madagascar",
			image: "/photos/rec-1.jpg",
			content: {
				img_profil: "/profile-pic-test.jpg",
				name_profil: "Jane Cooper",
				nb_person: "2 Adultes",
				date: "20 JUIN - 29 JUIN | 9Jours"
			},
			action: { action: "Paysages des hauts plateaux", callback: () => { } },
			price: 440,
			mark: {
				label: "NOUVEAU"
			}
		},
		{
			title: "Road Trip a Madagascar",
			image: "/photos/rec-3.jpg",
			content: {
				img_profil: "/profile-pic-test.jpg",
				name_profil: "Jane Cooper",
				nb_person: "2 Adultes",
				date: "20 JUIN - 29 JUIN | 9Jours"
			},
			action: { action: "Paysages des hauts plateaux", callback: () => { } },
			price: 440,
			mark: {
				label: "NOUVEAU"
			}
		},

	]

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