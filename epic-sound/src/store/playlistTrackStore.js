import { create } from "zustand";
import getPlaylistTracks from "@/services/getPlaylistTracks";
// Get the information of every track in playlist

export const usePlaylistTracksStore = create((set) => ({
  playlistTracks: null,
  setPlaylistTracks: async (playlistId) => {
    const playlistTracks = await getPlaylistTracks(playlistId);
    set({ playlistTracks });
  },
  getPlaylistId: () => {
    return get().playlistTracks?.id;
  },
}));
