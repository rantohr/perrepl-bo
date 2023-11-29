import { ILocation } from "./ilocation.interface"

export interface IAccommodation {
  id: number,
  title: string,
  description?: string,
  locations?: ILocation[],
  rooms?: IRoom[],
  images?: string[]
}

export interface IRoom {
  id: number,
  room_number: number,
  bed_type: string, 
  is_available: boolean,
  images?: string[]
}