import { ITraveler } from "./itraveler.interface";

export interface IOrder {
  id: number;
  departure_datetime?: string;
  arrival_datetime?: string;
  trip_duration?: number;
  client_type: string;
  room_type: string;
  pax_type: string;
  travelers: ITraveler[];
  trip_interest?: string;
  trip_reason?: string;
  custom_trip_reason?: string;
  description?: string;
}
