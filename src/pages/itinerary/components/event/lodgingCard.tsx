import { FC } from "react";
import { HiMiniBuildingOffice } from "react-icons/hi2"
import { IAccommodation } from "../../../../interfaces/iaccommodation.interface";
import { Button } from "flowbite-react";

const LodgingCard: FC<{
    hotel: IAccommodation;
    onRemove: () => void
}> = ({ hotel, onRemove }) => {
    const temp_img = 'https://img.freepik.com/photos-gratuite/maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph';
    return (
        <div className=" relative bg-white rounded-tr-3xl rounded-br-3xl rounded-bl-3xl px-10 pt-4 pb-6 ml-6 mt-8 mr-14">
            <div className=" absolute top-5 right-5 bg-white p-1">
                <Button onClick={onRemove}>Supprimer</Button>
            </div>
            <div className=" absolute -top-4 -left-7 rounded-full bg-white border-violet-pink border-2 p-1">
                <HiMiniBuildingOffice className=" text-violet-pink text-xl" />
            </div>
            <div className="dashed-line"></div>
            <div className="text-violet-1 text-lg font-semibold">{hotel.name}</div>
            <div className="text-grey text-xs">{hotel.description}</div>
            <div className="flex w-full">
                <div className="rounded-2xl flex w-36 gap-5 mt-4 mr-1">
                    <img className="rounded-xl" src={hotel.images![0] || temp_img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LodgingCard;
