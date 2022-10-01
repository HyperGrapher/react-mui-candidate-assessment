import { IUser } from "interfaces/auth.interface";
import create from "zustand";

interface IAuthStore {
	user: IUser | undefined;
	setUser: (user: IUser) => void;
}

const useAuthStore = create<IAuthStore>((set) => ({
	user: undefined,
	setUser: (user: IUser) => set({ user }),
}));

export default useAuthStore;
