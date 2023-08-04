import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import selectSliceReducer from './selectSlice';
import searchReducer from './searchSlice';
import commentReducer from './commentSlice';
import { Comment } from 'components/Board/interface';
import loginSelectSliceReducer from './loginSelectSlice';
import bootcampListSlice from './bootcampListSlice';
import programmingSlice from './programmingSlice';

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
  search: {
    keyword: string;
    sort: number;
    type: number;
  };
  comment: {
    commentCnt: number;
    commentList: Comment[];
  };
  bootcamp: {
    bootcamp: BootcampItem[];
    loading: boolean;
    error: null;
  };
  programming: {
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
    manageState: selectSliceReducer,
    search: searchReducer,
    comment: commentReducer,
    login: loginSelectSliceReducer,
    bootcamp: bootcampListSlice,
    programming: programmingSlice,
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
