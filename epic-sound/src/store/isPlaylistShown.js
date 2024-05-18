import { create } from "zustand";

export const useIsPlaylistShownStore = create((set) => ({
  isPlaylistShown: false,
  setIsPlaylistShown: (isPlaylistShown) => set({ isPlaylistShown }),
}));
