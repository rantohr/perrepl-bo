import { IOrderStatus } from "./iorderStatus.interface";
import { ITraveler } from "./itraveler.interface";

export interface IOrder {
  id: number;
  order_statuses: IOrderStatus;
  order_creator: ITraveler;
  departure_datetime: string;
  arrival_datetime: string;
  trip_duration: number;
  client_type: string;
  room_type: string;
  description: string;
  trip_interest: string;
  trip_reason: string;
  custom_trip_reason: string;
  pax_type: string;
  created_at: string;
  // user: number;
}
