export const MIN_LENGTH_TEXT = 50;

export const MAX_LENGTH_TEXT = 400;

export const PLAYER_TIME_OUT = 1000;

export const TIMEOUT_SHOW_ERROR = 2000;

export const FILM_COUNT_PER_STEP = 8;

export const STAR_COUNT = 10;

export const ratingStars: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  MoviePage = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const DEFAULT_ACTIVE_GENRE = 'All genres';

export enum APIRoute {
  Films = '/films',
  Film = '/films/',
  PromoFilm = '/promo',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
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

