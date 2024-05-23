import { create } from "zustand";
//get track time information and progress
//get track information

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
