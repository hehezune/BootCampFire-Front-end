import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import selectSliceReducer from "./selectSlice";

export interface RootState {
  auth: {
    isLoggedIn: boolean;
  };
  select: {
    item_lst: string[];
    tmp_lst:string[];
    sel_lst: boolean[];
    category: boolean[];
  }
}


const store = configureStore({
  reducer: {
    auth: authReducer,
    select: selectSliceReducer,
  },
});

export default store;


