import Comments from 'components/Board/BoardDetail/Comments';
import BoardDetailBody from 'components/Board/BoardDetail/BoardDetailBody';
import { StyledPage } from './styledPage';
import type { BoardDetail } from 'components/Board/interface';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from 'store';
import { Comment } from 'components/Board/interface';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

let boardDetailDummy: BoardDetail = {
  "id": 1,
  "title": "유저 1의 자유게시판 글이당",
  "content": "이 글은 카테고리1의 자유게시판 글임",
  "bootcamp": "SSAFY",
  "writer": "싸피1",
  "isWriter": true,
  category: "자유",
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
  const commentProps = {
    boardId: Number(0),
    commentList: commentList,
  }
  useEffect(() => {

    // axios.get(`http://localhost:8080`);
    // 백에서 boardDetail 및 comments 정보 가져오기
    // comments는 redux에 저장되어야 한다.
  }, []);

  return (
    <StyledPage>
      <BoardDetailBody data={boardDetail}/>
      <Comments boardId={Number(0)} comments={commentList}/>
    </StyledPage>
  );
}



export default BoardDetailPage;