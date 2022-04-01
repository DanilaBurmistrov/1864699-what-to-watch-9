import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  DEFAULT_ACTIVE_GENRE, NameSpace } from '../../const';
import { FilmData } from '../../types/state';
import { Film } from '../../types/types';

const initialState: FilmData = {
  genres: [],
  films: [],
  isDataLoaded: false,
  promoFilm: undefined,
  error: '',
  activeGenre: DEFAULT_ACTIVE_GENRE,
  similarFilms: [],
};

export const filmData = createSlice({

  name: NameSpace.data,
  initialState,
  reducers: {
    loadFilms: (state, action: PayloadAction<Film[]>) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    },
    loadPromoFilm: (state, action: PayloadAction<Film>) => {
      state.promoFilm = action.payload;
    },
    loadFilm: (state, action) => {
      state.films.push(action.payload);
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setActiveGenre: (state, action: PayloadAction<string>) => {
      state.activeGenre = action.payload;
    },
    loadSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
    },
  },
});

export const {loadFilms, loadPromoFilm, loadFilm, setError, setActiveGenre, loadSimilarFilms} = filmData.actions;
