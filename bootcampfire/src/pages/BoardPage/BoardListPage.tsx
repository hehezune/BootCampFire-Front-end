import React from 'react';
import SearchBar from 'components/Board/BoardList/SearchBar';
import CategorySideBar from 'components/Board/BoardList/CategorySideBar';
import BoardCard from 'components/Board/BoardList/BoardCard';
import styled from 'styled-components';
import type {Board} from 'components/Board/BoardList/interface';

const dummy : Board[] = 
[{
    title: "testTitle testContent testContent testContent",
    content: "testContent testContent testContent ",
    date: "20230725",
    likes: 3,
    comments: 3,
    views: 3,
    writer: "beom0109",
    camp: "SSAFY"
},
    {
    title: "testTitle",
    content: "testContent testContent testContent testContent testContent testContent testContent testContent testContent testContent testContent testContent testContent testContent testContent testContent testContent testContent ",
    date: "20230725",
    likes: 3,
    comments: 3,
    views: 3,
    writer: "beom0109",
    camp: "SSAFY"
}];
for (let i = 0; i < 5; i++) {
    dummy.push(dummy[0]);
}

function BoardListPage() {

    const handlerClickCard = () => {
        // 해당 카드 클릭 시 카드의 id (게시글의 id)를 가져오고 그에 대한 상세 페이지로 연결
    }

    const BoardList = dummy.map((element) => (
        <BoardCard data={element} onClick={handlerClickCard}/>
    ))

    return (
        <>
            <SearchBar /> 
            <BoardListMain>
                <CategorySideBar />
                <div className='board-list-margin'>
                {BoardList}
                </div>
            </BoardListMain>
        </>
    )
}

const BoardListMain = styled.div`
    display: flex;
    justify-content: center;

    .board-list-margin {
        margin: 0 43px;
    }
`

export default BoardListPage;