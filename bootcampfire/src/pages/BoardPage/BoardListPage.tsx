import React from 'react';
import SearchBar from 'components/Board/BoardList/SearchBar';
import CategorySideBar from 'components/Board/BoardList/CategorySideBar';
import BoardCard from 'components/Board/BoardList/BoardCard';
import styled from 'styled-components';
import type {Board} from 'components/Board/interface';
import { boardListData as dummy } from 'components/Board/Dummies';
import { StyledPage } from './styledPage';
function BoardListPage() {

    const handlerClickCard = () => {
        // 해당 카드 클릭 시 카드의 id (게시글의 id)를 가져오고 그에 대한 상세 페이지로 연결
    }

    const BoardList = dummy.map((element) => (
        <BoardCard data={element} onClick={handlerClickCard}/>
    ))

    return (
        <StyledPage className="test">
            <SearchBar /> 
            <BoardListMain>
                <CategorySideBar />
                <div className='board-list-margin'>
                {BoardList}
                </div>
            </BoardListMain>
        </StyledPage>
    )
}

const BoardListMain = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    .board-list-margin {
        margin-left: 42px;
        width: 80%;
    }
`

export default BoardListPage;