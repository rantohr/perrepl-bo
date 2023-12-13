import { ILocation } from "./ilocation.interface"

export interface ITransfer {
  id: number,
  type: string, // ex: Voiture, Bateau, Taxi, etc
  title: string,
  description?: string,
  nb_place?: number,
  locations?: ILocation[],
  images?: string[]
}