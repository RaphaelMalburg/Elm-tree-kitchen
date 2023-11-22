import { create } from "zustand";
//import prepListType from "../types/prepListType";

type CurrentListState = {
  currentList: string[];
  addToList: (item: string) => void;
  removeFromList: (item: string) => void;
  clearList: () => void;
};

export const useCurrentList = create<CurrentListState>((set) => ({
  currentList: [],
  addToList: (item: string) => set((state) => ({ currentList: [...state.currentList, item] })),
  removeFromList: (item: string) => set((state) => ({ currentList: state.currentList.filter((i) => i !== item) })),
  clearList: () => set({ currentList: [] }),
}));
