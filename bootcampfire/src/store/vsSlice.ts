import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// 게임 랭킹 : 닉네임, 부트 캠프 명, 게임 최고 점수, 랭킹
interface gameRank {
    nickName : string;
    bootCamp : string;
    score : number;
    ranking : number;
}

// VS : 알고리즘, 게임 관련 데이터
interface VSState {
    // GameRank10 : gameRank[];
    myGameRank : gameRank;

}

const initialState: VSState = {
    // GameRank10 : [],
    myGameRank : {nickName : "",
                  bootCamp : "",
                  score : -1,
                  ranking : -1},

};

const vsSlice = createSlice({
  name: "versus",
  initialState,
  reducers: {
    loadMyRank: (state, action: PayloadAction<gameRank>) => {
        state.myGameRank = action.payload;
    },
    // loadGameRank :(state, action : PayloadAction<gameRank[]>) => {
        //     state.GameRank10 = action.payload;
        // },
    updateScore: (state, action: PayloadAction<number>) => {
        state.myGameRank.score = action.payload;    
    },

},
});

export const { loadMyRank,updateScore } = vsSlice.actions;
export default vsSlice.reducer;
