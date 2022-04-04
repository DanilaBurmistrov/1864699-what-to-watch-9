import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  DEFAULT_ACTIVE_GENRE, NameSpace } from '../../const';
import { FilmData } from '../../types/state';
import { Film, ReviewData } from '../../types/types';

const initialState: FilmData = {
  genres: [],
  films: [],
  isDataLoaded: false,
  promoFilm: undefined,
  error: '',
  activeGenre: DEFAULT_ACTIVE_GENRE,
  similarFilms: [],
  reviews: [],
  myListFilms: [],
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
    loadFilm: (state, action: PayloadAction<Film>) => {
      state.films.push(action.payload);
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setActiveGenre: (state, action: PayloadAction<string>) => {
      state.activeGenre = action.payload;
    },
    loadSimilarFilms: (state, action: PayloadAction<Film[]>) => {
      state.similarFilms = action.payload;
    },
    loadReviews: (state, action: PayloadAction<ReviewData[]>) => {
      state.reviews = action.payload;
    },
    loadMyListFilms: (state, action: PayloadAction<Film[]>) => {
      state.myListFilms = action.payload;
    },
    changeMyListFilms: (state, action: PayloadAction<Film>) => {
      state.films = state.films.map((film) => film.id === action.payload.id ? action.payload : film);
      state.promoFilm = state.promoFilm?.id === action.payload.id ? action.payload : state.promoFilm;
    },
  },
},
);

export const {loadFilms,
  loadPromoFilm,
  loadFilm,
  setError,
  setActiveGenre,
  loadSimilarFilms,
  loadReviews,
  loadMyListFilms,
  changeMyListFilms,
} = filmData.actions;
