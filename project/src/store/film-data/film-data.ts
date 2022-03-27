import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  DEFAULT_ACTIVE_GENRE, NameSpace } from '../../const';
import { FilmData } from '../../types/state';
import { Film } from '../../types/types';

const initialState: FilmData = {
  genres: [],
  films: [],
  isDataLoaded: false,
  promoFilm: undefined,
  avatarUrl: '',
  film: undefined,
  error: '',
};

export const filmData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadFilms: (state, action: PayloadAction<Film[]>) => {
      state.genres = [DEFAULT_ACTIVE_GENRE, ...new Set(action.payload.map((film) => film.genre))];
      state.films = action.payload;
      state.isDataLoaded = true;
    },
    loadPromoFilm: (state, action: PayloadAction<Film>) => {
      state.promoFilm = action.payload;
    },
    loadFilm: (state, action: PayloadAction<Film>) => {
      state.film = action.payload;
    },
    setAvatarUrl: (state, action: PayloadAction<string>) => {
      state.avatarUrl = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {loadFilms, loadPromoFilm, loadFilm, setAvatarUrl, setError} = filmData.actions;
