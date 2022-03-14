import {createReducer} from '@reduxjs/toolkit';
import { getFilmsByGenre, loadFilm, loadFilms, loadPromoFilm, setActiveGenre } from './action';
import { Film } from '../types/types';
import { DEFAULT_ACTIVE_GENRE } from '../const';

type InitialStateProps = {
  activeGenre: string,
  films: Film[],
  film: Film | object,
  promoFilm: Film | object,
  isDataLoaded: boolean,
};

const initialState: InitialStateProps = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  films: [],
  film: {},
  promoFilm: {},
  isDataLoaded: false,
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
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
      state.isDataLoaded = true;
    });
});
