import { ILocation } from "./ilocation.interface"

export interface IService {
  id: number,
  title: string,
  description?: string,
  locations?: ILocation[],
  images?: string[]
}