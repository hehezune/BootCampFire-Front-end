import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  nickname: string | null;
  email: string | null;
  isAdmin: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  nickname: null,
  email: null,
  isAdmin: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ nickname: string; email: string; isAdmin: boolean }>) => {
      state.isLoggedIn = true;
      state.nickname = action.payload.nickname;
      state.email = action.payload.email;
      state.isAdmin = action.payload.isAdmin;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.nickname = null;
      state.email = null;
      state.isAdmin = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
