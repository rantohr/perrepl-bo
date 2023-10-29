import { FC } from "react";
import { MdAddLocation, MdContentCopy, MdDirectionsCar } from "react-icons/md";
import { ICardOptions } from "../../interfaces/genricModule/icolumn.interface";
import GenericSquareCard from "../../components/genericSquareCard/GenericSquareCard";

const TemplateList: FC = () => {

  const cards: ICardOptions[] = [
    {
      image: "/profile-pic-test.jpg",
      title: "Titre du template",
      subtitle: { icon: <MdAddLocation />, text: "Catégorie" },
      label: { icon: <MdDirectionsCar />, text: "Transport", },
      content: { content_icon: <MdAddLocation />, content_title: "12 jours", content_subtitle: "50.000Ar" },
      actions: { main_title: "Explorer", main_callback: () => { }, secondary_icon: <MdContentCopy />, secondary_callback: () => { } },
      footer: { title: "Ajoutée par", subtitle: "Jean Louis" }
    },
    {
      image: "/profile-pic-test.jpg",
      title: "Titre du template",
      subtitle: { icon: <MdAddLocation />, text: "Catégorie" },
      label: { icon: <MdDirectionsCar />, text: "Transport", },
      content: { content_icon: <MdAddLocation />, content_title: "12 jours", content_subtitle: "50.000Ar" },
      actions: { main_title: "Explorer", main_callback: () => { }, secondary_icon: <MdContentCopy />, secondary_callback: () => { } },
      footer: { title: "Ajoutée par", subtitle: "Jean Louis" }
    },
    {
      image: "/profile-pic-test.jpg",
      title: "Titre du template",
      subtitle: { icon: <MdAddLocation />, text: "Catégorie" },
      label: { icon: <MdDirectionsCar />, text: "Transport", },
      content: { content_icon: <MdAddLocation />, content_title: "12 jours", content_subtitle: "50.000Ar" },
      actions: { main_title: "Explorer", main_callback: () => { }, secondary_icon: <MdContentCopy />, secondary_callback: () => { } },
      footer: { title: "Ajoutée par", subtitle: "Jean Louis" }
    }
  ]

  return (
    <div className="square-cards">
      {cards.map((card, card_index) => {
        return (
          <GenericSquareCard key={'card-' + card_index}
            title={card.title}
            subtitle={card.subtitle}
            image={card.image}
            label={card.label}
            content={card.content}
            actions={card.actions}
            footer={card.footer}
          />
        )
      })}
    </div>
  );
}

export default TemplateList;
