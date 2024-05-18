import { create } from "zustand";

export const usePlayingTrackStore = create((set) => ({
  playingTrack: false,
  
  setPlayingTrack: (playingTrack) => set({ playingTrack }),
}));
