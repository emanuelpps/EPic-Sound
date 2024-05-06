import { create } from 'zustand';

export const useTrackStore = create((set) => ({
  track: null,
  setTrack: (track) => set({ track }),
}))
