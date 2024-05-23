import { create } from "zustand";
import getPlaylist from "@/services/getPlaylist";
/// Store the playlist information

export const usePlaylistStore = create((set) => ({
  playlist: null,
  isFirstLoad: false,
  setPlaylist: async (playlistId) => {
    const playlist = await getPlaylist(playlistId);
    set({ playlist });
  },
  setIsFirstLoad: (isFirstLoad) => set({ isFirstLoad }),
  getPlaylistId: () => {
    return get().playlist?.id;
  },
}));
