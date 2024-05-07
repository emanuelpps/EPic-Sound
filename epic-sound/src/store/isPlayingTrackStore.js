import { create } from "zustand";

export const useIsPlayingTrackStore = create((set) => ({
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
}));
