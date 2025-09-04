import { create } from "zustand";

interface AppState {
  favAnime: any;
}

export const appContext = create<AppState>(() => ({
  favAnime: [],
}));
