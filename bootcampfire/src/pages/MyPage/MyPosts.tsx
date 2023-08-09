import styled from 'styled-components';
import BoardCard from 'components/Board/BoardList/BoardCard';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Board } from 'components/Board/interface';

function MyPosts() {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState<Board[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/boards/users').then((res) => setBoardList(res.data.data.content));
  }, []);

  const BoardList = boardList.map((element) => (
    <BoardCard data={element} onClick={() => navigate(`/BoardDetail:${element.id}`)} />
  ));

  return (
    <WrapperBoardListMain>
      <BoardListMain className="board-list-margin">{BoardList}</BoardListMain>
    </WrapperBoardListMain>
  );
}

const WrapperBoardListMain = styled.div`
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoardListMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .board-list-margin {
    margin: 0 43px;
  }
`;

export default MyPosts;
