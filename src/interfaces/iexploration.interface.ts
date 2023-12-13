import { ILocation } from "./ilocation.interface"

export interface IExploration {
  id: number,
  title: string,
  description?: string,
  locations?: ILocation[],
  images?: string[]
}