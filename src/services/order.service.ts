import { AxiosResponse } from "axios";
import { IOrder } from "../interfaces/iorder.interface";
import { getAll, getById, patch, post, put, remove } from "./main.service";

const endpoint = "api/v2/order";
export const getOrders = (
  limit?: number,
  offset?: number,
  filter?: any
): Promise<AxiosResponse<{ count: number; results: IOrder[] }>> => {
  return getAll(endpoint, limit, offset, filter);
};

export const getOrderById = (
  id: string | undefined
): Promise<AxiosResponse<IOrder>> => {
  return getById(endpoint, id);
};

export const postOrder = (data: IOrder): Promise<AxiosResponse<IOrder>> => {
  return post(endpoint, data);
};

export const patchOrder = (
  id: number | undefined,
  data: any
): Promise<AxiosResponse<IOrder>> => {
  return patch(endpoint, id, data);
};

export const putOrder = (data: IOrder): Promise<AxiosResponse<IOrder>> => {
  return put(endpoint, data);
};

export const deleteOrder = (
  id: number | undefined
): Promise<AxiosResponse<any>> => {
  return remove(endpoint, id);
};
