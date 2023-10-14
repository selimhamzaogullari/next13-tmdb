import {GenresIF} from '@/interfaces';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

export const useGenreStore = create(
  persist(
    (set, get) => ({
      genres: [],
      add: (genres: Array<GenresIF>) => set(() => ({genres: genres})),
    }),
    {
      name: 'all-genres',
      storage: createJSONStorage(() => localStorage),
      partialize: (state: any) =>
        Object.fromEntries(Object.entries(state).filter(([key]) => !['all-genres'].includes(key))),
    },
  ),
);
