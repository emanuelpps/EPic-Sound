import { create } from "zustand";

export const usePageSelectionStore = create((set) => ({
  page: 0,
  setPage: (page) => set({ page }),
}));
