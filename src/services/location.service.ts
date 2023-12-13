import { AxiosResponse } from "axios";
import { getAll } from "./main.service";
import { ILocation } from "../interfaces/ilocation.interface";

const endpoint = "api/v2/find/madacountry";
export const getLocations = (limit?: number, offset?: number, filter?: any): Promise<AxiosResponse<{ count: number; results: ILocation[] }>> => {
  return getAll(endpoint, limit, offset, filter)
};