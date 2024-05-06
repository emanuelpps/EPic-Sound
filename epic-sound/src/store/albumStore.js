import { create } from "zustand";

export const useAlbumStore = create((set) => ({
  track: null,
  setTrack: (album) => set({ album }),
}));
