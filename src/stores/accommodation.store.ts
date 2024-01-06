import { create } from "zustand";
import { IAccommodation } from "../interfaces/iaccommodation.interface";

interface IAccommodationSlice {
    selectedAccommodation: IAccommodation | null;
    setSelectedAccommodation: (accommodation: IAccommodation | null) => void;

    accommodationList: IAccommodation[];
    setAccommodationList: (accommodations: IAccommodation[]) => void;
}
export const useAccommodationStore = create<IAccommodationSlice>((set) => ({
    selectedAccommodation: null,
    setSelectedAccommodation(payload) {
        set({ selectedAccommodation: payload });
    },

    accommodationList: [],
    setAccommodationList(payload) {
        set({ accommodationList: payload });
    }
}));