
import React from "react";
import styled from "styled-components";
import BoardCard from "components/Board/BoardList/BoardCard";
import { boardListData } from "components/Board/Dummies";
import { useNavigate } from "react-router-dom";
function MyPosts() {
  const navigate = useNavigate();

  const BoardList = boardListData.map((element) => (
    <BoardCard data={element} onClick={() => navigate(`/BoardDetail:${element.id}`)}/>
  ))

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
`

const BoardListMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    .board-list-margin {
        margin: 0 43px;
    }
`

export default MyPosts;
