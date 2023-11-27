import { create } from "zustand";
import { useUserStore } from "./user.store";
import { useOrderStore } from "./order.store";

export const useGlocalStore = create(() => ({
  user: useUserStore(),
  order: useOrderStore(),
}));
