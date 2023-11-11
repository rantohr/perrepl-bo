import { FC } from "react";
import { HiMiniBuildingOffice } from "react-icons/hi2"

const LodgingCard: FC<{
    title: string;
    description: string;
    image: string;
}> = ({ title, description, image }) => {;
  return (
    <div className=" relative bg-white rounded-tr-3xl rounded-br-3xl rounded-bl-3xl px-10 pt-4 pb-6 ml-6 mt-8 mr-14">
        <div className=" absolute -top-4 -left-7 rounded-full bg-white border-violet-pink border-2 p-1">
            <HiMiniBuildingOffice className=" text-violet-pink text-xl"/>
        </div>
        <div className="dashed-line"></div>
        <div className="text-violet-1 text-lg font-semibold">{title}</div>
        <div className="text-grey text-xs">{description}</div>
        <div className="flex w-full">
            <div className="rounded-2xl flex w-36 gap-5 mt-4 mr-1">
                <img className="rounded-xl" src={image} alt="" />
            </div>
        </div>
    </div>
  );
};

export default LodgingCard;
