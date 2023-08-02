import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import selectSliceReducer from './selectSlice';
import searchReducer from './searchSlice';
import commentReducer from './commentSlice';
import { Comment } from 'components/Board/interface';
export interface RootState {
  auth: {
    isAdmin: boolean;
    nickname: string;
    isLoggedIn: boolean;
    bootcampId: number;
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
  }
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    select: selectSliceReducer,
    manageState: selectSliceReducer,
    search: searchReducer,
    comment: commentReducer
}});
export default store;
