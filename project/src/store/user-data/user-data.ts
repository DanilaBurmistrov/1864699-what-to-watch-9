import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserData } from '../../types/state';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userLoginData: {
    avatarUrl: '',
    email: '',
    id: 0,
    name: '',
    token: '',
  },
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    saveUserData: (state, action) => {
      state.userLoginData = action.payload;
    },
  },
});

export const {requireAuthorization, saveUserData} = userData.actions;
