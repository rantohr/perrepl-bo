import { FC } from "react";
import { BiSolidPlaneAlt } from "react-icons/bi"

export type Tag = {
    icon: any
    label: string
}

const ActivityCard: FC<{
    title: string
    description: string
    images: string[]
    tags: Tag[]
}> = ({ title, description, images, tags }) =>{
    return (
        <div className=" relative bg-white rounded-tr-3xl rounded-br-3xl rounded-bl-3xl px-10 pt-4 pb-6 ml-6 mt-8 mr-14">
            <div className=" absolute -top-4 -left-7 rounded-full bg-white border-violet-pink border-2 p-1">
                <BiSolidPlaneAlt className=" text-violet-pink text-xl"/>
            </div>
            <div className="dashed-line"></div>
            <div className="text-violet-1 text-lg font-semibold">{title}</div>
            <div className="text-grey text-xs">{description}</div>
            <div className="flex w-full">
            {images.map((image, index) => (
                <div key={index} className="rounded-2xl flex w-36 gap-5 mt-4 mr-1">
                <img className="rounded-xl" src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
            </div>
            <div className="flex mt-4">
            {tags.map((tag, index) => (
                <div key={index} className="flex items-center bg-stone-100 font-semibold text-sm text-grey rounded-2xl p-2 mr-5">
                {tag.icon}
                <span className="ml-2">{tag.label}</span>
                </div>
            ))}
            </div>
        </div>
    );
}
export default ActivityCard