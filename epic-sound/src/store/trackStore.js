import { create } from 'zustand';
//import trendingTracks from '@/services/trendingTracks';

export const useTrackStore = create((set) => ({
  track: null,
  setTrack: (track) => set({ track }),
}))
