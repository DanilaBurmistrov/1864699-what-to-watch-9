export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  MoviePage = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const PLAYER_TIME_OUT = 1000;

export const DEFAULT_ACTIVE_GENRE = 'All genres';

export enum APIRoute {
  Films = '/films',
  Film = '/films/',
  PromoFilm = '/promo',
  Login = '/login',
  Logout = '/logout',
}
