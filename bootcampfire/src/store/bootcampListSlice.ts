import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: bootcampListState={
    bootcamp : [],
    loading : false,
    error : null,
}    

const bootcampListSlice = createSlice({
    name: 'bootcampList',
    initialState,
    reducers: {
        fetchBootcampStart(state) {
            state.loading = true;
            state.error = null;
        },    
        fetchBootcampSuccess(state, action: PayloadAction<BootcampItem[]>) {
            state.loading = false;
            state.bootcamp = action.payload;
          },  
          fetchBootcampFailure(state, action) {
            state.loading = false;  
            state.error = action.payload;
          },  
    }      
})    

export const { fetchBootcampStart, fetchBootcampSuccess, fetchBootcampFailure } = bootcampListSlice.actions;

export default bootcampListSlice.reducer;


interface BootcampItem {
    id: number;
    name: string;
    cost: boolean;
    support: boolean;
    hasCodingtest: boolean;
    onOff: string;
    startDate: Date; 
    endDate: Date;   
    imgUrl: string;
    reviewCnt: number;
    score: number;
    tracks: { id: number; name: string }[];
    regions: { id: number; name: string }[];
  }    
  


interface bootcampListState{
    bootcamp : BootcampItem[],
    loading : boolean,
    error: null,
}        

