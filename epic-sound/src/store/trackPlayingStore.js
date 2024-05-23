import { create } from "zustand";
// Boolean to know if the track is playing or not

export const usePlayingTrackStore = create((set) => ({
  playingTrack: false,
  setPlayingTrack: (playingTrack) => set({ playingTrack }),
}));
