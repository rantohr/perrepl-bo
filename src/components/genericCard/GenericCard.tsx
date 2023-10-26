import React, { FC } from "react";

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
    <div className="p-3">
      <div className="w-100 mx-4 p-4 flex justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm">
        <div className="flex">
          <div className="h-full relative min-h-[0] w-48 flex-shrink-0">
            <img
              className="h-full w-full transform rounded-lg object-cover transition-all duration-300 ease-in-out hover:scale-110"
              src={image}
              alt=""
            />
            {mark && (
              <span
                className={`absolute ${mark.position} rounded-l-lg ${mark.color} bg-opacity-90 px-3 py-2 text-xs font-semibold text-white`}
              >
                {mark.label}
              </span>
            )}
          </div>
          <div className="h-100 w-100 flex flex-col justify-between px-4 py-0">
            <div>
              <h1 className="block text-2xl font-sans font-semibold leading-snug tracking-normal text-fuchsia-950 antialiased">
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
            {place && <div className="py-1 text-gray-800">{place}</div>}
            {button && (
              <div className="pt-0">
                <button
                  data-ripple-light="true"
                  type="button"
                  className="transform select-none rounded-lg bg-fuchsia-950 px-4 py-3 text-center align-middle font-sans text-base text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105"
                >
                  {button}
                </button>
              </div>
            )}
          </div>
        </div>
        {price && (
          <div className="w-100 h-100 px-4">
            <span className="text-2xl font-medium text-fuchsia-950">
              {price}€
            </span>
            <span className="text-gray-500">/pax</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default GenericCard
