import { FC } from "react"
import "./GenericVariantSquareCard.css"
import "../../../public/photos/people.svg"
import { Button } from "flowbite-react";

export type typeMark = {
  label: string
  icon?: any
  bg?: string
}
export type props = {
  title: string
  image: string
  content: {img_profil: string, name_profil: string, nb_person: string, date: string}
  action: { action: string, callback?: () => void }
  price: number
  mark: typeMark
}

const GenericVariantSquareCard: FC<props> = ({ title, image, content, action, price, mark }) => {
  const clickAction = () => {
    if (action.callback !== undefined) action.callback();
  };
  
  return (
    <div className="card">
      {mark && (
        <span
          className={`flex items-center absolute right-0 top-4 rounded-l-lg ${mark.bg ? mark.bg : "bg-green-400"} bg-opacity-90 px-3 py-2 text-xs font-semibold text-white`}
        >
          <span className="mx-1">
            {mark.icon &&
              mark.icon
            }
          </span>
          {mark.label && mark.label}
        </span>
      )}
      <img className="card-image" src={image && image} alt="" />
      <div className="card-body">
        <div className="card-header">
          <svg className="card-arc">
            <path></path>
          </svg>
          <div className="title">
            {title &&
              title
            }
          </div>
          <div className="flex flex-col w-full">
            {content && (
              <>
                <div className="card-container">
                  <img className="card-thumb rounded-full" src={content.img_profil && content.img_profil} alt="" />
                  <div className="card-header-text">
                    <h3 className="card-title">{content.name_profil && content.name_profil}</h3>
                    <img src="/photos/people.svg" className="mr-2" alt="" />
                    <h5 className="">{content.nb_person && content.nb_person}</h5>
                  </div>
                </div>
                {content.date && <div className="text-base text-gray-500 mb-4">{content.date}</div>}
              </>
            )}
            <div className="card-action">
              <div className="pt-0">
                {action && action.action && (
                  <Button outline className="contained-button" onClick={clickAction}> {action.action} </Button>
                )}
              </div>
              {price && (
                <div className="w-100 h-100 px-4">
                  <span className="text-2xl font-medium text-violet-1">
                    {price}€
                  </span>
                  <span className="text-violet-light font-light">/pax</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenericVariantSquareCard
