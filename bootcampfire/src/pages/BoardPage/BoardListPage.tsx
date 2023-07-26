import React from 'react';
import SearchBar from 'components/Board/SearchBar';
import CategorySideBar from 'components/Board/CategorySideBar';
import BoardCard from 'components/Board/BoardCard';
import styled from 'styled-components';
import type {Board} from 'components/Board/interface';

const dummy : Board[] = 
[{
    title: "testTitle",
    content: "testContent",
    date: "20230725",
    likes: 3,
    comments: 3,
    views: 3,
    writer: "beom0109",
    camp: "SSAFY"
}];

function BoardListPage() {

    const BoardList = dummy.map((element) => (
        <BoardCard data={element}/>
    ))

    return (
        <>
            <SearchBar />
            <BoardListMain>
                <CategorySideBar />
                <div>
                {BoardList}
                </div>
            </BoardListMain>
        </>
    )
}

const BoardListMain = styled.div`
    display: flex;
    justify-content: center;
`

export default BoardListPage;