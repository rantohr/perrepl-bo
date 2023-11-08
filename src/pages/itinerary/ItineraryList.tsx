import { FC } from "react"
import GenericVariantSquareCard from "../../components/genericVariantSquareCard/GenericVariantSquareCard"
import { props } from "../../components/genericVariantSquareCard/GenericVariantSquareCard"
import GenericPageHeader from "../../components/genericList/GenericPageHeader"
import GenericListFilters from "../../components/genericList/GenericListFilters"
import { IListAction, IListFilter } from "../../interfaces/genricModule/icolumn.interface"
import { MdOutlineAdd } from "react-icons/md"

const ItineraryList: FC = () => {
	const cards: props[] = [
		{
			title: "Road Trip a Madagascar",
			image: "https://img.freepik.com/photos-gratuite/maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph",
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
			image: "https://img.freepik.com/photos-gratuite/maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph",
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
			image: "https://img.freepik.com/photos-gratuite/maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph",
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
		}
	]

	const actions: IListAction[] = [
		{ label: "Nouvelle itinéraire", icon: <MdOutlineAdd />, callback: () => { }, className: "contained-button" },
	];

	const filters: IListFilter[] = [
		{ label: "", type: "select", field: "", options: [{ label: "Nom de client", value: "client" }] }
	];

	return (
		<div className="list-container order-list">
			<GenericPageHeader title="Itinéraire" total={8} actions={actions} />
			<GenericListFilters filters={filters} />

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
		</div>
	)
}

export default ItineraryList