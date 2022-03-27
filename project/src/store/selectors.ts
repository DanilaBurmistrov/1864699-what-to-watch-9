import { AuthorizationStatus, NameSpace } from '../const';
import { State } from '../types/state';
import { Film } from '../types/types';

export const getFilms = (state: State): Film[] => state[NameSpace.data].films;

export const getFilmById = (id: number) => (state: State) => getFilms(state).find((item) => item.id === id);

export const isCheckedAuth = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;

// export const getFilmsByGenre = (state: State) => (state.activeGenre === 'All genres') ? state.films : state.films.filter(({genre}) => state.activeGenre === genre);

// export const getAvatarUrl = (state: State): string => state[NameSpace.data].avatarUrl;

export const getPromoFilm = (state: State): Film | undefined => state[NameSpace.data].promoFilm;

export const getFilm = (state: State): Film | undefined => state[NameSpace.data].film;

export const getGenre = (state: State): string => state[NameSpace.film].activeGenre;

export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;

export const getError = (state: State): string => state[NameSpace.data].error;

export const getGenres = (state: State): string[] => state[NameSpace.data].genres;

export const getUserLoginData = (state: State) => state[NameSpace.user].userLoginData;
