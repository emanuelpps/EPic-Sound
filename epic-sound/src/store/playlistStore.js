import { create } from "zustand";
import getPlaylist from "@/services/getPlaylist";

export const usePlaylistStore = create((set) => ({
  playlist: null,
  setPlaylist: async (playlistId) => {
    const playlist = await getPlaylist(playlistId);
    set({ playlist });
  },
  getPlaylistId: () => {
    return get().playlist?.id;
  },
}));



