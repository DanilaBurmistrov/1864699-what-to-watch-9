import { HTTP_CODE } from '../const';
import { store } from '../store';
import { setError } from '../store/action';
import { clearError } from '../store/api-action';
import { ErrorType } from '../types/types';
import request from 'axios';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(setError(message));
    store.dispatch(clearError());
  };

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        handleError(response.data.error);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        handleError(response.data.error);
        break;
      case HTTP_CODE.NOT_FOUND:
        handleError(response.data.error);
        break;
    }
  }
};
