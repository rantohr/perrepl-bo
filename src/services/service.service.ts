import { AxiosResponse } from "axios";
import { getAll, getById, patch, post, put, remove } from "./main.service";
import { IService } from "../interfaces/iservice.interface"

const endpoint = "api/v2/service";
export const getServices = (limit?: number, offset?: number, filter?: any): Promise<AxiosResponse<{ count: number; results: IService[] }>> => {
  return getAll(endpoint, limit, offset, filter)
};

export const getServiceById = (id: string | undefined): Promise<AxiosResponse<IService>> => {
  return getById(endpoint, id)
};

export const postService = (data: IService): Promise<AxiosResponse<IService>> => {
  return post(endpoint, data);
};

export const patchService = (id: number | undefined, data: any): Promise<AxiosResponse<IService>> => {
  return patch(endpoint, id, data);
};

export const putService = (data: IService): Promise<AxiosResponse<IService>> => {
  return put(endpoint, data);
};

export const deleteService = (id: number | undefined): Promise<AxiosResponse<any>> => {
  return remove(endpoint, id);
};
