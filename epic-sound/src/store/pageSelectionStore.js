import { create } from "zustand";

export const usePageSelectionStore = create((set) => ({
  track: null,
  setTrack: (pageSelection) => set({ pageSelection }),
}));
