import { State } from '../types/state';

export const getFilms = (state: State) => state.films;

export const getFilmById = (id: number) => (state: State) => getFilms(state).find((item) => item.id === id);
