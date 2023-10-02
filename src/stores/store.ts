import { create } from "zustand";
import { useUserStore } from "./user.store";

export const useGlocalStore = create(() => ({
  user: useUserStore(),
}));
