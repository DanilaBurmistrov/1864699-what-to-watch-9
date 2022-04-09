import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '.';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { handleError } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { AuthData, Film, FilmId, MyListStatusData, ReviewData, User, UserReview } from '../types/types';
import { redirectToRoute } from './action';
import { loadFilms, loadFilm, loadPromoFilm, setError, loadSimilarFilms, loadReviews, changeMyListFilms, loadMyListFilms, disableForm, enableForm, reviewSendStatus } from './film-data/film-data';
import { requireAuthorization, saveUserData } from './user-data/user-data';

export const fetchFilms = createAsyncThunk<void, undefined, {extra: Api}>(
  'data/fetchFilms',
  async (_:undefined, {dispatch, extra}) => {
    const {data} = await extra.get<Film[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  },
);

export const fetchFilm = createAsyncThunk<void, number, {extra: Api}>(
  'data/fetchFilm',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Film}${filmId}`);
    dispatch(loadFilm(data));
  },
);

export const fetchPromoFilm = createAsyncThunk<void, undefined, {extra: Api}>(
  'data/fetchPromoFilm',
  async (_, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.PromoFilm);
    dispatch(loadPromoFilm(data));
  },
);

export const clearError = createAsyncThunk<void, undefined, {extra: Api}>(
  'data/clearError',
  (_, {dispatch}) => {
    setTimeout(
      () => dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchCheckAuth = createAsyncThunk<void, undefined, {extra: Api}>(
  'user/checkAuth',
  async (_, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(saveUserData(data));
    } catch(error) {
      handleError(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const fetchLogin = createAsyncThunk<void, AuthData, {extra: Api}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<User>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(saveUserData(data));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch(error) {
      handleError(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const fetchLogout = createAsyncThunk<void, undefined, {extra: Api}>(
  'user/logout',
  async (_, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchSimilarFilms = createAsyncThunk<void, FilmId, {extra: Api}>(
  'data/fetchSimilarFilms',
  async ({filmId}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film[]>(`/films/${filmId}/similar`);
      dispatch(loadSimilarFilms(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchReviews = createAsyncThunk<void, FilmId, {extra: Api}>(
  'data/review',
  async ({filmId}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<ReviewData[]>(`/comments/${filmId}`);
      dispatch(loadReviews(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const sendReview = createAsyncThunk<void, UserReview, {extra: Api}>(
  'data/newReview',
  async ({comment, rating, filmId}, {dispatch, extra: api}) => {
    try {
      dispatch(disableForm());
      const {data} = await api.post<ReviewData[]>(`/comments/${filmId}`, {comment, rating});
      dispatch(loadReviews(data));
      dispatch(enableForm());
      dispatch(reviewSendStatus(''));
      dispatch(redirectToRoute(`/films/${filmId}`));
    } catch (error) {
      handleError(error);
      dispatch(enableForm());
      dispatch(reviewSendStatus('error'));
    }
  },
);

export const changeMyListStatus = createAsyncThunk<void, MyListStatusData, {extra: Api}>(
  'data/changeMyListStatus',
  async ({filmId, status}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Film>(`/favorite/${filmId}/${status}`);
      dispatch(changeMyListFilms(data));
    } catch(error) {
      handleError(error);
    }
  },
);

export const fetchMyListFilms = createAsyncThunk<void, undefined, {extra: Api}>(
  'data/fetchMyListFilms',
  async (_, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film[]>(APIRoute.Favorite);
      dispatch(loadMyListFilms(data));
    } catch(error) {
      handleError(error);
    }
  },
);
