import { HttpCode } from '../const';
import { store } from '../store';
import { clearError } from '../store/api-action';
import { ErrorType } from '../types/types';
import request from 'axios';
import { setError } from '../store/film-data/film-data';


export const handleError = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BAD_REQUEST:
      case HttpCode.UNAUTHORIZED:
      case HttpCode.NOT_FOUND: {
        store.dispatch(setError(response.data.error));
        store.dispatch(clearError());
        break;
      }
      default: store.dispatch(setError('Something went wrong. Please try again'));
        store.dispatch(clearError());
        break;
    }
  }
};
