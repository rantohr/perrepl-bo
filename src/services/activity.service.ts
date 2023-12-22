import { AxiosResponse } from "axios";
import { getAll, getById, patch, post, put, remove } from "./main.service";
import { IActivity } from "../interfaces/iactivity.interface";

const endpoint = "api/v2/activity";
export const getActivities = (limit?: number, offset?: number, filter?: any): Promise<AxiosResponse<{ count: number; results: IActivity[] }>> => {
  return getAll(endpoint, limit, offset, filter)
};

export const getActivityById = (id: string | undefined): Promise<AxiosResponse<IActivity>> => {
  return getById(endpoint, id)
};

export const postActivity = (data: IActivity): Promise<AxiosResponse<IActivity>> => {
  return post(endpoint, data);
};

export const patchActivity = (id: number | undefined, data: any): Promise<AxiosResponse<IActivity>> => {
  return patch(endpoint, id, data);
};

export const putActivity = (data: IActivity): Promise<AxiosResponse<IActivity>> => {
  return put(endpoint, data);
};

export const deleteActivity = (id: number | undefined): Promise<AxiosResponse<any>> => {
  return remove(endpoint, id);
};
