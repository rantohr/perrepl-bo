import { AxiosResponse } from "axios";
import { getAll, getById, patch, post, put, remove } from "./main.service";
import { IAccommodation } from "../interfaces/iaccommodation.interface";

const endpoint = "api/v2/hotel";
export const getAccommodations = (limit?: number, offset?: number, filter?: any): Promise<AxiosResponse<{ count: number; results: IAccommodation[] }>> => {
  return getAll(endpoint, limit, offset, filter)
};

export const getAccommodationById = (id: string | undefined): Promise<AxiosResponse<IAccommodation>> => {
  return getById(endpoint, id)
};

export const postAccommodation = (data: IAccommodation): Promise<AxiosResponse<IAccommodation>> => {
  return post(endpoint, data);
};

export const patchAccommodation = (id: number | undefined, data: any): Promise<AxiosResponse<IAccommodation>> => {
  return patch(endpoint, id, data);
};

export const putAccommodation = (data: IAccommodation): Promise<AxiosResponse<IAccommodation>> => {
  return put(endpoint, data);
};

export const deleteAccommodation = (id: number | undefined): Promise<AxiosResponse<any>> => {
  return remove(endpoint, id);
};
