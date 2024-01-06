import { ILocation } from "./ilocation.interface"

export interface IExploration {
  id: number,
  name: string,
  description?: string,
  locations?: ILocation[],
  images?: string[]
}