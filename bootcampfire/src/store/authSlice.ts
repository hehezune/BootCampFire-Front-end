import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  nickname: string | null;
  email: string | null;
  isAdmin: boolean;
  bootcampId: number;
}

const initialState: AuthState = {
  isLoggedIn: false,
  nickname: null,
  email: null,
  isAdmin: false,
  bootcampId: -1,

};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    login: (
      state,
      action: PayloadAction<{ nickname: string; email: string; isAdmin: boolean; bootcampId: number }>
    ) => {

      state.isLoggedIn = true;
      state.nickname = action.payload.nickname;
      state.email = action.payload.email;
      state.isAdmin = action.payload.isAdmin;
      state.bootcampId = action.payload.bootcampId;

    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.nickname = null;
      state.email = null;
      state.isAdmin = false;
      state.bootcampId = -1;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
