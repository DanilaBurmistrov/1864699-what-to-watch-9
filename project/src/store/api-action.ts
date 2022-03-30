import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { handleError } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { AuthData, Film, User } from '../types/types';
import { redirectToRoute } from './action';
import { loadFilms, loadFilm, loadPromoFilm, setError } from './film-data/film-data';
import { requireAuthorization, saveUserData } from './user-data/user-data';

export const fetchFilms = createAsyncThunk<void, undefined, {extra: typeof api}>(
  'data/fetchFilms',
  async (_:undefined, {dispatch, extra}) => {
    const {data} = await extra.get<Film[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  },
);

export const fetchFilm = createAsyncThunk(
  'data/fetchFilm',
  async (filmId: number) => {
    const {data} = await api.get<Film>(`${APIRoute.Film}${filmId}`);
    store.dispatch(loadFilm(data));
  },
);

export const fetchPromoFilm = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    const {data} = await api.get<Film>(APIRoute.PromoFilm);
    store.dispatch(loadPromoFilm(data));
  },
);

export const clearError = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchCheckAuth = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(saveUserData(data));
    } catch(error) {
      handleError(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const fetchLogin = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data} = await api.post<User>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(saveUserData(data));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch(error) {
      handleError(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const fetchLogout = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      handleError(error);
    }
  },
);
