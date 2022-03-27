import { HTTP_CODE } from '../const';
import { store } from '../store';
import { clearError } from '../store/api-action';
import { ErrorType } from '../types/types';
import request from 'axios';
import { setError } from '../store/film-data/film-data';

export const handleError = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const errorHandle = (message: string) => {
    store.dispatch(setError(message));
    store.dispatch(clearError());
  };

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
      case HTTP_CODE.UNAUTHORIZED:
      case HTTP_CODE.NOT_FOUND:
        errorHandle(response.data.error);
        break;
    }
  }
};
