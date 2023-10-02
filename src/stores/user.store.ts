import { create } from "zustand";
import { IUser } from "../interfaces/iuser.interface";

interface IUserSlice {
  currentUser: IUser | null;
  setCurrentUser: (user: IUser | null) => void;
}
export const useUserStore = create<IUserSlice>((set) => ({
  currentUser: null,
  setCurrentUser(user) {
    set({ currentUser: user });
  },
}));
