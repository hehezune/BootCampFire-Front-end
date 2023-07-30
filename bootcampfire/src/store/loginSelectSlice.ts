import { createSlice } from "@reduxjs/toolkit";

interface loginSelectState {
  bootcamp: string[];
}

const initialState: loginSelectState = {
  bootcamp: [],
};

const loginSelectSlice = createSlice({
  name: "loginSelect",
  initialState,
  reducers: {},
});

export default loginSelectSlice.reducer;
