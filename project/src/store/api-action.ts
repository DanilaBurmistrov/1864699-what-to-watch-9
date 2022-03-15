import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute } from '../const';
import { Film } from '../types/types';
import { loadFilm, loadFilms, loadPromoFilm } from './action';

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    store.dispatch(loadFilms(data));
  },
);

export const fetchFilmAction = createAsyncThunk(
  'data/fetchFilm',
  async (filmId: number) => {
    const {data} = await api.get<Film>(`${APIRoute.Film}${filmId}`);
    store.dispatch(loadFilm(data));
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    const {data} = await api.get<Film>(APIRoute.PromoFilm);
    store.dispatch(loadPromoFilm(data));
  },
);
