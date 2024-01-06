import React, { FC, useEffect, useState } from "react";
import { useSnackbar } from 'notistack';
import { IAccommodation, IRoom } from "../../../interfaces/iaccommodation.interface";
import { ILocation } from "../../../interfaces/ilocation.interface";
import { postAccommodation, putAccommodation } from "../../../services/accommodation.service";

interface AccommodationFormProps {
    onConfirm: (data: IAccommodation) => void;
    onCancel: () => void;
    selectedItem?: IAccommodation | null;
}

const AccommodationForm: FC<AccommodationFormProps> = ({ onConfirm, onCancel, selectedItem }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [formData, setFormData] = useState<IAccommodation | null>(null);

    useEffect(() => {
        if (selectedItem) {
            const cleanData: IAccommodation = {
                ...selectedItem,
                locations: selectedItem.locations?.length ? selectedItem.locations : [{} as ILocation],
                rooms: selectedItem.rooms?.length ? selectedItem.rooms : [{} as IRoom],
            };

            setFormData(cleanData);
        }
    }, [selectedItem]);

    const handleInputChange = (field: string, value: any) => {
        setFormData(prevData => {
            if (prevData) {
                return {
                    ...prevData,
                    [field]: value
                };
            }
            return prevData;
        });
    };
    

    const handleLocationInputChange = (index: number, field: string, value: any) => {
        setFormData(prevData => {
            if (prevData && prevData.locations) {
                const updatedLocations = [...prevData.locations];
                updatedLocations[index] = {
                    ...updatedLocations[index],
                    [field]: value
                };
                return {
                    ...prevData,
                    locations: updatedLocations
                };
            }
            return prevData;
        });
    };
    
    
    const handleRoomInputChange = (index: number, field: string, value: any) => {
        setFormData(prevData => {
            if (prevData && prevData.rooms) {
                const updatedRooms = [...prevData.rooms];
                updatedRooms[index] = {
                    ...updatedRooms[index],
                    [field]: value
                };
                return {
                    ...prevData,
                    rooms: updatedRooms
                };
            }
            return prevData;
        });
    };
    

    const beforeConfirm = () => {
        if (onConfirm && formData) {
            if (selectedItem) {
                // Mettre à jour l'hébergement existant
                putAccommodation(formData)
                    .then(() => {
                        enqueueSnackbar("Hébergement mis à jour avec succès", { variant: "success" });
                        onConfirm(formData);
                    })
                    .catch(() => {
                        enqueueSnackbar("Erreur lors de la mise à jour de l'hébergement", { variant: "error" });
                    });
            } else {
                // Créer un nouvel hébergement
                postAccommodation(formData)
                    .then(() => {
                        enqueueSnackbar("Hébergement créé avec succès", { variant: "success" });
                        onConfirm(formData);
                    })
                    .catch(() => {
                        enqueueSnackbar("Erreur lors de la création de l'hébergement", { variant: "error" });
                    });
            }
        }
    };
{console.log("FormData: " + formData)}
    if (!formData) return null;

    return (
        <>
            <label htmlFor="name">Nom</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData?.name || ''}
                onChange={(e) => handleInputChange('name', e.target.value)}
            />

            <label htmlFor="description">Description</label>
            <textarea
                id="description"
                name="description"
                value={formData?.description || ''}
                onChange={(e) => handleInputChange('description', e.target.value)}
            />

            <label htmlFor="province">Province</label>
            <input
                type="text"
                id="province"
                name="province"
                value={formData?.locations?.[0]?.province || ''}
                onChange={(e) => handleLocationInputChange(0, 'province', e.target.value)}
            />

            <label htmlFor="city">Ville</label>
            <input
                type="text"
                id="city"
                name="city"
                value={formData?.locations?.[0]?.commune || ''}
                onChange={(e) => handleLocationInputChange(0, 'city', e.target.value)}
            />

            <label htmlFor="roomNumber">Numéro de chambre</label>
            <input
                type="text"
                id="roomNumber"
                name="roomNumber"
                value={formData?.rooms?.[0]?.room_number || ''}
                onChange={(e) => handleRoomInputChange(0, 'room_number', e.target.value)}
            />

            <label htmlFor="bedType">Type de lit</label>
            <input
                type="text"
                id="bedType"
                name="bedType"
                value={formData?.rooms?.[0]?.bed_type || ''}
                onChange={(e) => handleRoomInputChange(0, 'bed_type', e.target.value)}
            />
        </>

    );
}

export default AccommodationForm;
