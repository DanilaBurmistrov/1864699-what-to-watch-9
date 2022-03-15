import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/types';

export const setActiveGenre = createAction<string>('main/setActiveGenre');

export const getFilmsByGenre = createAction<Film[]>('genre/getFilmsByGenre');

export const loadFilm = createAction<Film>('data/loadFilm');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');
