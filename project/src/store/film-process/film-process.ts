import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_ACTIVE_GENRE, NameSpace } from '../../const';
import { FilmProcess } from '../../types/state';
import { Film } from '../../types/types';

const initialState: FilmProcess = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  films: [],
};

export const filmProcess = createSlice({
  name: NameSpace.film,
  initialState,
  reducers: {
    setActiveGenre: (state, action: PayloadAction<string>) => {
      state.activeGenre = action.payload;
    },
    getFilmsByGenre: (state, action: PayloadAction<Film[]>) => {
      state.films = action.payload;
    },
  },
});

export const {setActiveGenre, getFilmsByGenre} = filmProcess.actions;
