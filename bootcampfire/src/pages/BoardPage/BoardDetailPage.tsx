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
const API_KEY = 'http://localhost:8080/boards/'
let boardDetailDummy: BoardDetail = {
  "id": 1,
  "title": "유저 1의 자유게시판 글이당",
  "content": "이 글은 카테고리1의 자유게시판 글임",
  "bootcamp": "SSAFY",
  "writer": "싸피1",
  "isWriter": false,
  "commentCnt": 0,
  "likeCnt": 0,
  "view": 1,
  "isLike": false,
  "createdDate": [
    2023,
    7,
    31,
    13,
    54,
    1,
    212312000
  ]
}


function BoardDetailPage() {
  // 오픈시 요청해서 기본 정보 받아오기
  // const {boardId} = useParams();
  const commentList = useSelector((state: RootState) => state.comment.commentList);
  const [boardDetail, setBoardDetail] = useState<BoardDetail>(boardDetailDummy);
  const [isLike, setIsLike] = useState(boardDetail.isLike);
  let {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id === undefined) return ;
    Promise.all([
      axios.get(API_KEY + id),
      axios.get('http://localhost:8080/comments/list/' + id)
    ])
    .then(([
      boardDetailResponse,
      commentsResponse
    ]) => {
      setBoardDetail(boardDetailResponse.data.data);
      dispatch(getComments({comments: commentsResponse.data.data, boardId: Number(id)}));
    })
    console.log("바뀜?")
  }, [isLike]);

  return (
    <StyledPage>
      <BoardDetailBody boardDetail={boardDetail} setLike={setIsLike}/>
      <Comments boardId={Number(id)} comments={commentList}/>
    </StyledPage>
  );
}



export default BoardDetailPage;