import { AxiosResponse } from "axios";
import { getAll, getById, patch, post, put, remove } from "./main.service";
import { ITransportation } from "../interfaces/itransportation.interface";

const endpoint = "api/v2/transportation";
export const getTransportations = (limit?: number, offset?: number, filter?: any): Promise<AxiosResponse<{ count: number; results: ITransportation[] }>> => {
  return getAll(endpoint, limit, offset, filter)
};

export const getTransportationById = (id: string | undefined): Promise<AxiosResponse<ITransportation>> => {
  return getById(endpoint, id)
};

export const postTransportation = (data: ITransportation): Promise<AxiosResponse<ITransportation>> => {
  return post(endpoint, data);
};

export const patchTransportation = (id: number | undefined, data: any): Promise<AxiosResponse<ITransportation>> => {
  return patch(endpoint, id, data);
};

export const putTransportation = (data: ITransportation): Promise<AxiosResponse<ITransportation>> => {
  return put(endpoint, data);
};

export const deleteTransportation = (id: number | undefined): Promise<AxiosResponse<any>> => {
  return remove(endpoint, id);
};
