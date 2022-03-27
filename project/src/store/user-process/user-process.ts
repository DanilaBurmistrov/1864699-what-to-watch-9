import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userLoginData: {
    avatarUrl: '',
    email: '',
    id: 0,
    name: '',
    token: '',
  },
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    userData: (state, action) => {
      state.userLoginData = action.payload;
    },
  },
});

export const {requireAuthorization, userData} = userProcess.actions;
