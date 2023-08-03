import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import selectSliceReducer from './selectSlice';

export interface RootState {
  auth: {
    userId: number;
    isAdmin: boolean;
    nickname: string;
    isLoggedIn: boolean;
    bootcampId: number;
    email: string;
  };
  select: {
    item_lst: string[];
    tmp_lst: string[];
    sel_lst: boolean[];
    category: boolean[];
  };
  manageState: {
    img: string | null;
    nickname: string | null;
    bootcampId: number;
  };
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    select: selectSliceReducer,
  },
});
export default store;
