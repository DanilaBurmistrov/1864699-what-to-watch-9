import { AuthorizationStatus } from '../const.js';
import {store} from '../store/index.js';
import { Film } from './types.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserData = {
  authorizationStatus: AuthorizationStatus;
  userLoginData?: {
    avatarUrl: string;
    email: string;
    id: number;
    name: string;
    token: string;
  },
};

export type FilmData = {
  genres: string[],
  films: Film[],
  isDataLoaded: boolean,
  promoFilm: Film | undefined,
  error: string,
  activeGenre: string,
};
