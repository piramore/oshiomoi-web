import { create } from "zustand";
import { IUser } from "../interfaces/user.interface";
import { getStorage } from "../helpers/storage.helper";

export const useAuthStore = create<{
  user: IUser | null;
  setUser: (v: IUser | null) => void;
}>()((set) => ({
  user: getStorage("user") || null,
  setUser: (v) => set(() => ({ user: v })),
}));
