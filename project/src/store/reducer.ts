import {createReducer} from '@reduxjs/toolkit';
import { getFilmsByGenre, loadFilm, loadFilms, loadPromoFilm, requireAuthorization, setActiveGenre, setError } from './action';
import { Film } from '../types/types';
import { AuthorizationStatus, DEFAULT_ACTIVE_GENRE } from '../const';

type InitialStateProps = {
  genres: string[],
  activeGenre: string,
  films: Film[],
  film: Film | undefined,
  promoFilm: Film | undefined,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  error: string,
};

const initialState: InitialStateProps = {
  genres: [],
  activeGenre: DEFAULT_ACTIVE_GENRE,
  films: [],
  film: undefined,
  promoFilm: undefined,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.genres = [DEFAULT_ACTIVE_GENRE, ...new Set(action.payload.map((film) => film.genre))];
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
