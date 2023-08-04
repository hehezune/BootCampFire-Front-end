import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Track {
    id: number;
    name: string;
  }
interface SBoxState {  
    // sel_lst : boolean[];
    
    trackList : string[];
    regionList : string[];
    
    trackBoolean : boolean[];
    regionBoolean : boolean[];
    
    
    tmp_lst : string[];
    item_lst : string[];
    
    category : boolean[];
}

const initialState: SBoxState = {

    trackList : [],
    regionList : [],

    trackBoolean: [],
    regionBoolean: [],

    tmp_lst: [],
    item_lst: [],

    category : Array(4).fill(false),
};


const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    initTrack: (state, action: PayloadAction<Track[]>) => {
        state.trackList = action.payload.map(item => item.name);;
        state.trackBoolean = Array(action.payload.length).fill(false);
    },
    initRegion: (state, action) => {
        state.regionList = action.payload;
        state.regionBoolean = Array(action.payload.length).fill(false);
    },
    
    onoff_track: (state, action) => {
        state.trackBoolean[action.payload] = !state.trackBoolean[action.payload];
        // state.tmp_lst = state.item_lst.filter((item, index) => state.sel_lst[index]);
    },

    category_onoff:(state, action) => {
        state.category[action.payload] = !state.category[action.payload]; 
    },
    // onoff_text: (state, action) => {
    //     const index = state.item_lst.indexOf(action.payload)
    //     state.sel_lst[index] = !state.sel_lst[index];
    // },
  },
});


export const { initTrack, initRegion, onoff_track, category_onoff } = selectSlice.actions;
// export const { onoff_text, onoff_num, category_onoff } = selectSlice.actions;
export default selectSlice.reducer;
