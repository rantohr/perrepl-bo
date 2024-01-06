import { IOrder } from "../interfaces/iorder.interface";
import { ITraveler } from "../interfaces/itraveler.interface";

export type CreateOrderDto = Omit<
  IOrder,
  "id" | "order_statuses" | "order_creator" | "created_at"
> & {
  travelers: Omit<ITraveler, "id" | "created_at">[];
};
