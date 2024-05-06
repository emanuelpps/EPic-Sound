import { create } from "zustand";
import getAlbum from "@/services/getAlbum";

export const useAlbumStore = create((set) => ({
  album: null,
  setAlbum: async (albumId) => {
    const album = await getAlbum(albumId);
    set({ album });
  },
  getAlbumId: () => {
    return get().album?.id;
  },
}));



