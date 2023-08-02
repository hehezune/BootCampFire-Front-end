import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface searchState {
    keyword: string;
    sort: number;
    type: number;
}

// initialState는 추후 백에 요청하여 받아오는 방식으로 해야 한다.
const initialState: searchState = {
    keyword: "",
    sort: 0,
    type: 0,
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSort: (
        state, 
        action: PayloadAction<{sort: number}>
    ) => {
        state.sort = action.payload.sort;
    },
    setKeyword: (
        state, 
        action: PayloadAction<{keyword: string}>
    ) => {
        state.keyword = action.payload.keyword;
    },
    setType: (
        state, 
        action: PayloadAction<{type: number}>
    ) => {
        state.type = action.payload.type;
    },
  },
});

export const {setSort, setKeyword, setType} = searchSlice.actions;
export default searchSlice.reducer;
