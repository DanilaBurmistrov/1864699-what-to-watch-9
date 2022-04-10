import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { filmData } from './film-data/film-data';
import { userData } from './user-data/user-data';

export const rootReducer = combineReducers({
  [NameSpace.Data]: filmData.reducer,
  [NameSpace.User]: userData.reducer,
});
