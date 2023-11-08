import { FC } from "react";
import { MdAddLocation, MdContentCopy, MdDirectionsCar, MdOutlineAdd } from "react-icons/md";
import { ICardOptions, IListAction, IListFilter } from "../../interfaces/genricModule/icolumn.interface";
import GenericSquareCard from "../../components/genericSquareCard/GenericSquareCard";
import GenericPageHeader from "../../components/genericList/GenericPageHeader";
import GenericListFilters from "../../components/genericList/GenericListFilters";

const TemplateList: FC = () => {

  const cards: ICardOptions[] = [
    {
      image: "/profile-pic-test.jpg",
      title: "Titre du template",
      subtitle: { icon: <MdAddLocation />, text: "Catégorie" },
      label: { icon: <MdDirectionsCar />, text: "Transport", },
      content: { content_icon: <MdAddLocation />, content_title: "12 jours", content_subtitle: "50.000Ar" },
      actions: { main_title: "Explorer", main_callback: () => { }, secondary_icon: <MdContentCopy />, secondary_callback: () => { } },
    },
    {
      image: "/profile-pic-test.jpg",
      title: "Titre du template",
      subtitle: { icon: <MdAddLocation />, text: "Catégorie" },
      label: { icon: <MdDirectionsCar />, text: "Transport", },
      content: { content_icon: <MdAddLocation />, content_title: "12 jours", content_subtitle: "50.000Ar" },
      actions: { main_title: "Explorer", main_callback: () => { }, secondary_icon: <MdContentCopy />, secondary_callback: () => { } },
    },
    {
      image: "/profile-pic-test.jpg",
      title: "Titre du template",
      subtitle: { icon: <MdAddLocation />, text: "Catégorie" },
      label: { icon: <MdDirectionsCar />, text: "Transport", },
      content: { content_icon: <MdAddLocation />, content_title: "12 jours", content_subtitle: "50.000Ar" },
      actions: { main_title: "Explorer", main_callback: () => { }, secondary_icon: <MdContentCopy />, secondary_callback: () => { } },
    }
  ]

	const actions: IListAction[] = [
		{ label: "Ajouter un template", icon: <MdOutlineAdd />, callback: () => { }, className: "contained-button" },
	];

	const filters: IListFilter[] = [
		{ label: "", type: "select", field: "", options: [{ label: "Nom de client", value: "client" }] }
	];

  return (
    <div className="list-container order-list">
      <GenericPageHeader title="Template" total={12} actions={actions} />
      <GenericListFilters filters={filters} />

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
    </div>
  );
}

export default TemplateList;
