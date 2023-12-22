import { ILocation } from "./ilocation.interface"

export interface ITransportation {
  id: number,
  type: string, // ex: Voiture, Bateau, etc
  name: string,
  description?: string,
  nb_place?: number,
  locations?: ILocation[],
  images?: string[]
}