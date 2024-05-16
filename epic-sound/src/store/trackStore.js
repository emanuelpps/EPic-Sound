import { create } from "zustand";

export const useTrackStore = create((set) => ({
  track: null,
  progress: 0,
  leftTime: 0,
  currentTime: 0,
  setLeftTime: (leftTime) => set({ leftTime }),
  setCurrentTime: (currentTime) => set({ currentTime }),
  setProgress: (progress) => set({ progress }),
  setTrack: (track) => set({ track }),
}));
