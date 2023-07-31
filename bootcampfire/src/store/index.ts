import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import selectSliceReducer from './selectSlice';
import loginSelectSliceReducer from './loginSelectSlice';

export interface RootState {
  auth: {
    isAdmin: any;
    nickname: any;
    isLoggedIn: boolean;
  };
  select: {
    item_lst: string[];
    tmp_lst: string[];
    sel_lst: boolean[];
    category: boolean[];
  };
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    select: selectSliceReducer,
    login: loginSelectSliceReducer,
  },
});
export default store;
