export const DEFAULT_ACTIVE_GENRE = 'All genres';

export const MIN_LENGTH_TEXT = 50;

export const MAX_LENGTH_TEXT = 400;

export const PLAYER_TIME_OUT = 400;

export const TIMEOUT_SHOW_ERROR = 2000;

export const FILM_COUNT_PER_STEP = 8;

export const MAX_RATING_STARS = 10;

export const STARS_ARRAY = new Array(MAX_RATING_STARS).fill(0).map((_, index) => String(MAX_RATING_STARS - index));

export const MAX_SIMILAR_FILMS = 4;

export const MAX_GENRES = 9;

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  MoviePage = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  ServerError= '/500',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Film = '/films/',
  PromoFilm = '/promo',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum HttpCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

export enum TabType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum FilmTextRating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

