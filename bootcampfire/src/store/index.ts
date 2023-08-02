import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import selectSliceReducer from './selectSlice';
import loginSelectSliceReducer from './loginSelectSlice';
import bootcampListSlice from './bootcampListSlice';

export interface RootState {
  auth: {
    isAdmin: any;
    nickname: any;
    isLoggedIn: boolean;
    bootcampId: number;
  };
  select: {
    item_lst: string[];
    tmp_lst: string[];
    sel_lst: boolean[];
    category: boolean[];
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
