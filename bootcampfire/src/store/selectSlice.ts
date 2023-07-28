import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const item_lst_text:Array<string> = [
    "백엔드", "풀스택", "임베디드", "프론트", "앱", "데이터 분석", "AI", "안드로이드", "클라우드","그 외",
    "온라인", "오프라인", "온/오프라인",
    "서울", "대전", "구미", "광주", "부산", "경기도",
    "모집중", "코테 O", "비용 O"    
                    ]

interface SBoxState {  
    item_lst : string[];
    tmp_lst : string[];
    sel_lst : boolean[];
    category : boolean[];
}

const initialState: SBoxState = {
    item_lst: item_lst_text,
    tmp_lst: [],
    sel_lst: Array(item_lst_text.length).fill(false),
    category : Array(4).fill(false)
};


const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    onoff_num: (state, action) => {
        state.sel_lst[action.payload] = !state.sel_lst[action.payload];
        state.tmp_lst = state.item_lst.filter((item, index) => state.sel_lst[index]);
    },

    category_onoff:(state, action) => {
        state.category[action.payload] = !state.category[action.payload]; 
    },
    onoff_text: (state, action) => {
        const index = state.item_lst.indexOf(action.payload)
        state.sel_lst[index] = !state.sel_lst[index];
    },
  },
});

export const { onoff_text, onoff_num, category_onoff } = selectSlice.actions;
export default selectSlice.reducer;
