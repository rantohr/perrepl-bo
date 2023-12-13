import React, { FC } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"

export type typeMark = {
  label: string
  icon?: any
  position: string
  color: string
}

const GenericCard: FC<{
  title: string
  image: string
  date?: string
  description?: string
  place?: string
  button?: string
  price?: number
  mark: typeMark
}> = ({ title, image, date, description, place, button, price, mark }) => {
  return (
    <div>
      <div className="w-100 p-4 flex justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm">
        <div className="flex">
          <div className="h-full relative min-h-[0] w-48 flex-shrink-0">
            <img
              className="h-full w-full transform rounded-lg object-cover transition-all duration-300 ease-in-out hover:scale-110"
              src={image}
              alt=""
            />
            {mark && (
              <span
                className={`flex items-center absolute ${mark.position} rounded-l-lg ${mark.color} bg-opacity-90 px-3 py-2 text-xs font-semibold text-white`}
              >
                <span className="mx-1">
                  {mark.icon &&
                    React.cloneElement(mark.icon, { style: { fontSize: "1rem" } })
                  }
                </span>
                {mark.label}
              </span>
            )}
          </div>
          <div className="h-100 w-100 flex flex-col justify-between px-4 py-0">
            <div>
              <h1 className="block text-2xl font-sans font-semibold leading-snug tracking-normal text-violet-1 antialiased">
                {title}
              </h1>
            </div>
            {date && <div className="text-base text-gray-500">{date}</div>}
            {description && (
              <div>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  {description}
                </p>
              </div>
            )}
            {place && <div className="flex items-baseline py-1 text-gray-800"><FaMapMarkerAlt class="mr-2"/> {place}</div>}
            {button && (
              <div className="pt-0">
                <button
                  data-ripple-light="true"
                  type="button"
                  className="transform select-none rounded-lg bg-violet-1 px-4 py-3 text-center align-middle font-sans text-base text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105"
                >
                  {button}
                </button>
              </div>
            )}
          </div>
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
  )
}

export default GenericCard
