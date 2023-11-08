import { FC } from "react"
import GenericCard from "../../components/genericCard/GenericCard"

const ItineraryListCards: FC = () => {
	return (
		<GenericCard
			title="Road Trip a Madagascar"
			image="https://img.freepik.com/photos-gratuite/maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph"
			date="01 JUIN - 10 JUIN | 9 Jours"
			button="Paysages des hauts plateaux"
			price={440}
			mark={
				{
					label: "NOUVEAU",
					position: "right-0 top-4",
					color: "bg-green-400"
				}
			}
		/>
	)
}

export default ItineraryListCards;