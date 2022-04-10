import { createSelector } from 'reselect';
import { AuthorizationStatus, DEFAULT_ACTIVE_GENRE, MAX_GENRES, NameSpace } from '../const';
import { State } from '../types/state';
import { Film, ReviewData } from '../types/types';

export const getFilms = (state: State): Film[] => state[NameSpace.Data].films;

export const getFilmById = (id: number) => (state: State) => getFilms(state).find((item) => item.id === id);

export const isCheckedAuth = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getPromoFilm = (state: State): Film | undefined => state[NameSpace.Data].promoFilm;

export const getActiveGenre = (state: State): string => state[NameSpace.Data].activeGenre;

export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export const getUserLoginData = (state: State) => state[NameSpace.User].userLoginData;

export const getFilmsByActiveGenre = createSelector(
  getFilms,
  getActiveGenre,
  (films, activeGenre) =>
    (activeGenre === 'All genres')
      ? films : films.filter((film) =>
        film.genre === activeGenre),
);

export const getFilmsGenres = createSelector(
  getFilms,
  (films) =>
    [DEFAULT_ACTIVE_GENRE, ...new Set(films.map((film) => film.genre))].slice(0, MAX_GENRES),
);

export const getSimilarFilms = (state: State): Film[] => state[NameSpace.Data].similarFilms;

export const getReviews = (state: State): ReviewData[] => state[NameSpace.Data].reviews;

export const getMyListFilms = (state: State): Film[] => state[NameSpace.Data].myListFilms;

export const getIsDisabledForm = (state: State): boolean => state[NameSpace.Data].isDisabledForm;

export const getReviewSendStatus = (state: State): string => state[NameSpace.Data].reviewSendStatusItem;
