
import React from "react";
import styled from "styled-components";
import BoardCard from "components/Board/BoardList/BoardCard";
import { boardListData } from "components/Board/Dummies";

function MyPosts() {

  const handlerClickCard = () => {
    // 해당 카드 클릭 시 카드의 id (게시글의 id)를 가져오고 그에 대한 상세 페이지로 연결
  }

  const BoardList = boardListData.map((element) => (
    <BoardCard data={element} onClick={handlerClickCard}/>
))

  return (
    <WrapperBoardListMain>
      <BoardListMain className='board-list-margin'>
      {BoardList}
      </BoardListMain>
    </WrapperBoardListMain>
  )
}

const WrapperBoardListMain = styled.div`
      height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BoardListMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .board-list-margin {
        margin: 0 43px;
    }
`

export default MyPosts;

