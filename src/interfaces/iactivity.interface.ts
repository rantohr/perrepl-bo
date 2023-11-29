import { ILocation } from "./ilocation.interface"

export interface IActivity {
  id: number,
  title: string,
  description?: string,
  locations?: ILocation[],
  images?: string[]
}