import { create } from "zustand";
import { IItinerary } from "../interfaces/iitinerary.interface";

interface IItinerarySlice {
  selectedItinerary: IItinerary | null;
  setSelectedItinerary: (itinerary: IItinerary | null) => void;

  itineraryList: IItinerary[];
  setItineraryList: (itinerary: IItinerary[]) => void;
}
export const useItineraryStore = create<IItinerarySlice>((set) => ({
  selectedItinerary: null,
  setSelectedItinerary(payload) {
    set({ selectedItinerary: payload });
  },

  itineraryList: [],
  setItineraryList(payload) {
    set({ itineraryList: payload });
  }
}));
