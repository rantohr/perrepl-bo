import { IUser } from "./iuser.interface"

export interface ILocation {
  id: number,
  geographical_coordinates: [
    {
      longitude: number,
      latitude: number
    }
  ],
  country_code?: string,
  province?: string,
  region?: string,
  district?: string,
  commune?: string,
  user?: IUser
}