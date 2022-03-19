export type Film = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
};

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  avatarUrl: string
  email: string
  id: number
  name: string
  token: string
};

export type ErrorType = unknown;
