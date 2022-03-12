import {createReducer} from '@reduxjs/toolkit';
import { getFilmsByGenre, setActiveGenre } from './action';
import { Film } from '../types/types';
import { DEFAULT_ACTIVE_GENRE } from '../const';

type InitialStateProps = {
  activeGenre: string,
  films: Film[],
};

const initialState: InitialStateProps = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  films: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      state.films = action.payload;
    });
});
