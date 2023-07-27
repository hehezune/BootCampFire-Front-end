import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export interface RootState {
  auth: {
    isLoggedIn: boolean;
  };
}

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;


