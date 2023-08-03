import React, { useEffect, useState } from 'react';
import SearchBar from 'components/Board/BoardList/SearchBar';
import CategorySideBar from 'components/Board/BoardList/CategorySideBar';
import BoardCard from 'components/Board/BoardList/BoardCard';
import styled from 'styled-components';
import { boardListData } from 'components/Board/Dummies';
import { StyledPage } from './styledPage';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useNavigate } from 'react-router-dom';

function BoardListPage() {
    // Main Page와 연결했을 경우 ->>
    // const {state} = useLocation();
    // const [selectCategory, setSelectCategory] = useState(state.categoryId);
    const navigate = useNavigate();
    const [selectCategory, setSelectCategory] = useState(0);
    const sort = useSelector((state: RootState) => state.search.sort);
    const keyword = useSelector((state: RootState) => state.search.keyword);
    const type = useSelector((state: RootState) => state.search.type);
    const handlerSelectCategory = ((id : number) => {
        setSelectCategory(id);
    })

    const a = (idx: number) => {
        console.log(idx);
        navigate('/Board');
    }
    useEffect(() => {
        // 백에서 불러오기
    }, []); //디펜던시 -> 정렬 기준, 검색어(기준포함)

    const BoardList = boardListData.map((element) => (
        <BoardCard key={element.id} data={element} onClick={() => navigate(`/BoardDetail:${element.id}`)}/>
        // <BoardCard key={element.id} data={element} onClick={() => a(element.id)}/>
    ))

    return (
        <StyledPage className="test">
            <SearchBar selectCategory={selectCategory}/> 
            <BoardListMain>
                <CategorySideBar selectCategory={selectCategory} onCategorySelect={handlerSelectCategory}/>
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
const StyledDiv = styled.div`
    display: flex;
    width: 500px;
    height: 500px;
`

export default BoardListPage;