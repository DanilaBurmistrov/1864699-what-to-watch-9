import { AuthorizationStatus } from '../const.js';
import {store} from '../store/index.js';
import { Film, User } from './types.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserData = {
  authorizationStatus: AuthorizationStatus;
  userLoginData?: User,
};

export type FilmData = {
  genres: string[],
  films: Film[],
  isDataLoaded: boolean,
  promoFilm: Film | undefined,
  error: string,
  activeGenre: string,
  similarFilms: Film[],
};
