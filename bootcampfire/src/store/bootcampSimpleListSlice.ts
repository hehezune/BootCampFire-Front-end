import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface bootcampSimpleListState {
  bootcampInfo: BootcampInfoItem[];
}
const initialState: bootcampSimpleListState = {
  bootcampInfo: [],
};

const bootcampSimpleListSlice = createSlice({
  name: 'bootcampSimpleListSlice',
  initialState,
  reducers: {
    setBootcampInfo(state, action: PayloadAction<{ list: BootcampInfoItem[] }>) {
      state.bootcampInfo = action.payload.list;
    },
  },
});

export const { setBootcampInfo } = bootcampSimpleListSlice.actions;

export default bootcampSimpleListSlice.reducer;

interface BootcampInfoItem {
  id: number;
  name: string;
}
