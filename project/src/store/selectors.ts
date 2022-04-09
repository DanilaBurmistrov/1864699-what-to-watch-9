import { createSelector } from 'reselect';
import { AuthorizationStatus, DEFAULT_ACTIVE_GENRE, NameSpace } from '../const';
import { State } from '../types/state';
import { Film, ReviewData } from '../types/types';

export const getFilms = (state: State): Film[] => state[NameSpace.data].films;

export const getFilmById = (id: number) => (state: State) => getFilms(state).find((item) => item.id === id);

export const isCheckedAuth = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;

export const getPromoFilm = (state: State): Film | undefined => state[NameSpace.data].promoFilm;

export const getActiveGenre = (state: State): string => state[NameSpace.data].activeGenre;

export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;

export const getError = (state: State): string => state[NameSpace.data].error;

export const getUserLoginData = (state: State) => state[NameSpace.user].userLoginData;

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
    [DEFAULT_ACTIVE_GENRE, ...new Set(films.map((film) => film.genre))],
);

export const getSimilarFilms = (state: State): Film[] => state[NameSpace.data].similarFilms.slice(0, 4);

export const getReviews = (state: State): ReviewData[] => state[NameSpace.data].reviews;

export const getMyListFilms = (state: State): Film[] => state[NameSpace.data].myListFilms;

export const getIsDisabledForm = (state: State): boolean => state[NameSpace.data].isDisabledForm;

export const getReviewSendStatus = (state: State): string => state[NameSpace.data].reviewSendStatusItem;
