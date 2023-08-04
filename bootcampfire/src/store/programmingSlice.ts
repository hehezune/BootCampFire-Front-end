import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const item_lst_text: Array<string> = [
  'Spring',
  'C',
  'C++',
  'React',
  'Vue',
  'JavaScript',
  'Django',
  'Python',
  'RaspberryPi',
];

interface SBoxState {
  item_lst: string[];
  tmp_lst: string[];
  sel_lst: boolean[];
  category: boolean[];
}

const initialState: SBoxState = {
  item_lst: item_lst_text,
  tmp_lst: [],
  sel_lst: Array(item_lst_text.length).fill(false),
  category: Array(4).fill(false),
};

const programmingSlice = createSlice({
  name: 'programming',
  initialState,
  reducers: {
    onoff_num: (state, action) => {
      state.sel_lst[action.payload] = !state.sel_lst[action.payload];
      state.tmp_lst = state.item_lst.filter((item, index) => state.sel_lst[index]);
    },

    category_onoff: (state, action) => {
      state.category[action.payload] = !state.category[action.payload];
    },
    onoff_text: (state, action) => {
      const index = state.item_lst.indexOf(action.payload);
      state.sel_lst[index] = !state.sel_lst[index];
    },
  },
});

export const { onoff_text, onoff_num, category_onoff } = programmingSlice.actions;
export default programmingSlice.reducer;
