import { create } from "zustand";

export const useIsShuffleTrackStore = create((set) => ({
  isShuffle: false,
  setIsShuffle: (isShuffle) => set({ isShuffle }),
}));
