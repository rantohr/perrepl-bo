import { create } from "zustand";
import { IOrder } from "../interfaces/iorder.interface";

interface IOrderSlice {
  selectedOrder: IOrder | null;
  setSelectedOrder: (order: IOrder | null) => void;

  orderList: IOrder[];
  setOrderList: (order: IOrder[]) => void;
}
export const useOrderStore = create<IOrderSlice>((set) => ({
  selectedOrder: null,
  setSelectedOrder(payload) {
    set({ selectedOrder: payload });
  },

  orderList: [],
  setOrderList(payload) {
    set({ orderList: payload });
  }
}));
