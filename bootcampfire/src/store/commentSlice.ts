import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { commentListData } from "components/Board/Dummies";
import { Comment } from "components/Board/interface";

interface commentState {
  boardId: number;
  commentCnt: number;
  commentList: Comment[];
}

// initialState는 추후 백에 요청하여 받아오는 방식으로 해야 한다.
const initialState: commentState = {
  boardId: 0,
  commentCnt: 0,
  commentList: [],
}

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    modifyComment: (
      state,
      action: PayloadAction<{content: string, anonymous: boolean, idx: number}>
    ) => {
      const newComments = state.commentList.splice(0);
      const newComment = newComments[action.payload.idx];
      newComment.content = action.payload.content;
      newComment.anonymous = action.payload.anonymous;
      state.commentList = newComments;
    },
    deleteComment: (
      state,
      action: PayloadAction<{idx: number}>
    ) => {
      state.commentCnt = state.commentCnt - 1;
      state.commentList = state.commentList.splice(action.payload.idx, 1);
    },
    getComments: (
      state,
      action: PayloadAction<{comments: Comment[], boardId: number}>
    ) => {
      state.commentCnt = action.payload.comments.length;
      state.commentList = action.payload.comments;
      state.boardId = action.payload.boardId;
    }
  },
});

export const { modifyComment, deleteComment, getComments} = commentSlice.actions;
export default commentSlice.reducer;
