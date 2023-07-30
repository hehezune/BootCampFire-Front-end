import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Comment } from "components/Board/interface";
import type {Comment} from 'components/Board/interface';
import { commentListData } from "components/Board/Dummies";

interface CommentSlice {
  commentList: Comment[];
}

const initialState: CommentSlice = {
  commentList: commentListData
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    login: (state, action) => {
      state.commentList = state.commentList
    },
    logout: (state) => {
      // state.isLoggedIn = false;
    },
    createComment: (state) => {

    }
  },
});

export const { login, logout } = commentSlice.actions;
export default commentSlice.reducer;
