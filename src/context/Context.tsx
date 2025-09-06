import { create } from "zustand";

interface AppState {
  favAnime: any[];
  openSearch: boolean;
  setOpenSearch: (openSearch: boolean) => void;
}

export const appContext = create<AppState>((set) => ({
  favAnime: [],
  openSearch: false,
  setOpenSearch: (openSearch: boolean) => set({ openSearch }),
}));
