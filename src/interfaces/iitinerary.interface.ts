import { IAccommodation } from "./iaccommodation.interface"
import { IActivity } from "./iactivity.interface"
import { IExploration } from "./iexploration.interface"
import { ILocation } from "./ilocation.interface"
import { IOrder } from "./iorder.interface"
import { IService } from "./iservice.interface"
import { ITransfer } from "./itransfer.interface"
import { IUser } from "./iuser.interface"

export interface IItinerary {
  id?: number,
  title: string,
  image?: string,
  description?: string,
  availability?: string,
  duration: number,
  segments: ISegment[],
  client?: IUser[],
  order?: IOrder[],
}

export interface ISegment {
  id?: number,
  description?: string,
  duration: number,
  start_location?: ILocation[],
  end_location?: ILocation[],
  departure_time_utc?: string,
  arrival_time_utc?: string,
  hotels?: IAccommodation[],
  activities?: IActivity[],
  explorations?: IExploration[],
  services?: IService[],
  transfers?: ITransfer[],
  transportations?: ITransfer[],
}