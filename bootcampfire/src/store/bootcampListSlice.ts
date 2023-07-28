import { createSlice } from "@reduxjs/toolkit";

interface bootcampListState{
    bootcamp : string[],
}

const initialState: bootcampListState={
    bootcamp : [],
}

const bootcampListSlice = createSlice({
    name: 'bootcampList',
    initialState,
    reducers: {

    }
})


export default bootcampListSlice.reducer;