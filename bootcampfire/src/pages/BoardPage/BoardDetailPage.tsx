import Comments from 'components/Board/BoardDetail/Comments';
import BoardDetailBody from 'components/Board/BoardDetail/BoardDetailBody';
import { StyledPage } from './styledPage';
import type { BoardDetail } from 'components/Board/interface';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from 'store';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getComments } from 'store/commentSlice';
const API_KEY = `${process.env.REACT_APP_API_URL}/boards/`

let boardDetailDummy: BoardDetail = {
  "id": 0,
  "title": "",
  "content": "",
  "bootcamp": "",
  "writer": "",
  "isWriter": false,
  "commentCnt": 0,
  "likeCnt": 0,
  "view": 0,
  "isLike": false,
  "createdDate": "",
  "category": "",
}


function BoardDetailPage() {
  // 오픈시 요청해서 기본 정보 받아오기
  // const {boardId} = useParams();
  const commentList = useSelector((state: RootState) => state.comment.commentList);
  const [boardDetail, setBoardDetail] = useState<BoardDetail>(boardDetailDummy);
  const [isLike, setIsLike] = useState(false);
  let {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id === undefined) return ;
    Promise.all([
      axios.get(API_KEY + id),
      axios.get(`${process.env.REACT_APP_API_URL}/comments/list/` + id)
    ])
    .then(([
      boardDetailResponse,
      commentsResponse
    ]) => {
      console.log("detail 결과", boardDetailResponse)
      setBoardDetail(boardDetailResponse.data.data);
      dispatch(getComments({comments: commentsResponse.data.data, boardId: Number(id)}));
    })
  }, [isLike]);

  return (
    <StyledPage>
      <BoardDetailBody boardDetail={boardDetail} setLike={setIsLike}/>
      <Comments boardId={Number(id)} comments={commentList}/>
    </StyledPage>
  );
}



export default BoardDetailPage;