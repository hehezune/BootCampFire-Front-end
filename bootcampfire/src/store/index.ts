import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import selectSliceReducer from './selectSlice';
import loginSelectSliceReducer from './loginSelectSlice';
import bootcampListSlice from './bootcampListSlice';

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
  bootcamp: {
    bootcamp : BootcampItem[],
    loading : boolean,
    error: null,
  };

}

const store = configureStore({
  reducer: {
    auth: authReducer,
    select: selectSliceReducer,
    manageState: selectSliceReducer,
    login: loginSelectSliceReducer,
    bootcamp: bootcampListSlice,

  },
});
export default store;

interface BootcampItem {
  id: number;
  name: string;
  cost: boolean;
  support: boolean;
  hasCodingtest: boolean;
  onOff: string;
  startDate: Date; 
  endDate: Date;   
  imgUrl: string;
  reviewCnt: number;
  score: number;
  tracks: { id: number; name: string }[];
  regions: { id: number; name: string }[];
}    
