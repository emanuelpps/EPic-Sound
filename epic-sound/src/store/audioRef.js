import { create } from "zustand";

export const useAudioRefStore = create((set) => ({
  audioRef: null,
  setAudioRef: (audioRef) => set({ audioRef }),
}));
