import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrorState {
  errorMsg: string;
  msg: string;
}

const initialState: ErrorState = {
  errorMsg: "",
  msg: "",
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    error(state, action: PayloadAction<ErrorState>) {
      state.errorMsg = action.payload.errorMsg;
      state.msg = action.payload.msg;
    },
  },
});

export const { error } = errorSlice.actions;

export default errorSlice.reducer;
