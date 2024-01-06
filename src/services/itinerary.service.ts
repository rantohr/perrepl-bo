import { AxiosResponse } from "axios";
import { getAll, getById, patch, post, put, remove } from "./main.service";
import { IItinerary } from "../interfaces/iitinerary.interface";

const endpoint = "api/v2/itinerary";
export const getItineraries = (limit?: number, offset?: number, filter?: any): Promise<AxiosResponse<{ count: number; results: IItinerary[] }>> => {
  return getAll(endpoint, limit, offset, filter)
};

export const getItineraryById = (id: string | undefined): Promise<AxiosResponse<IItinerary>> => {
  return getById(endpoint, id)
};

export const postItinerary = (data: IItinerary): Promise<AxiosResponse<IItinerary>> => {
  return post(endpoint, data);
};

export const patchItinerary = (id: number | undefined, data: any): Promise<AxiosResponse<IItinerary>> => {
  return patch(endpoint, id, data);
};

export const putItinerary = (data: IItinerary): Promise<AxiosResponse<IItinerary>> => {
  return put(endpoint, data);
};

export const deleteItinerary = (id: number | undefined): Promise<AxiosResponse<any>> => {
  return remove(endpoint, id);
};
