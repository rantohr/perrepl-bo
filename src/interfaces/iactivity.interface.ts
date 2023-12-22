import { ILocation } from "./ilocation.interface"

export interface IActivity {
  id: number,
  name: string,
  description?: string,
  location: ILocation,
  images?: string[]
}