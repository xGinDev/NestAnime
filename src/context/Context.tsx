import { create } from "zustand";

interface IFavAnime {
  id: string;
  title: string;
  cover: string;
  slug: string;
}

interface AppState {
  favAnime: IFavAnime[];
  openSearch: boolean;
  setOpenSearch: (openSearch: boolean) => void;
}

export const appContext = create<AppState>((set) => ({
  favAnime: [],
  openSearch: false,
  setOpenSearch: (openSearch: boolean) => set({ openSearch }),
}));
