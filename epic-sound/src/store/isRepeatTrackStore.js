import { create } from "zustand";

export const useIsRepeatTrackStore = create((set) => ({
  isRepeating: false,
  setIsRepeating: (isRepeating) => set({ isRepeating }),
}));
