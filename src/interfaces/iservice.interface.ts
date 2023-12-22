import { ILocation } from "./ilocation.interface"

export interface IService {
  id: number,
  name: string,
  description?: string,
  locations?: ILocation[],
  images?: string[]
}