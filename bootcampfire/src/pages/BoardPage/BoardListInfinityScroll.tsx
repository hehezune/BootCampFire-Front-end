import React, { useEffect, useRef, useState } from 'react';
import SearchBar from 'components/Board/BoardList/SearchBar';
import CategorySideBar from 'components/Board/BoardList/CategorySideBar';
import BoardCard from 'components/Board/BoardList/BoardCard';
import styled from 'styled-components';
import { boardListData } from 'components/Board/Dummies';
import { StyledPage } from './styledPage';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Board } from 'components/Board/interface';
import useIntersect from 'components/Board/BoardList/useIntersect';
const API_URL = 'http://localhost:8080/categories';

function BoardListInfinityScroll() {
    // Main Page와 연결했을 경우 ->>
    // const {state} = useLocation();
    // const [selectCategory, setSelectCategory] = useState(state.categoryId);
    const navigate = useNavigate();
    const [selectCategory, setSelectCategory] = useState(1);
    const [boardListData, setBoardListData] = useState<Board[]>([]);
    const sort = useSelector((state: RootState) => state.search.sort);
    const keyword = useSelector((state: RootState) => state.search.keyword);
    const type = useSelector((state: RootState) => state.search.type);

    const [isLoaded, setIsLoaded] = useState(true);
    const [pageCount, setPageCount] = useState(0);

    const page = useRef(pageCount);

    const handlerSelectCategory = ((id : number) => {
        setSelectCategory(id);
    })

    useEffect(() => {
        const newBoardList = boardListData.slice(0);
        getDataFromAPI(pageCount, true, API_URL + `/2`)
        .then((res) => {console.log(res); res.forEach((element) => newBoardList.push(element));
            setBoardListData(newBoardList); setIsLoaded(true)});
            alert(selectCategory);
    },[]);
    
    const [_, setRef] = useIntersect(async(entry, observer) => {
        observer.unobserve(entry.target);
        const boardListTemp = boardListData.slice(0);
        let temp = await getDataFromAPI(pageCount, true, API_URL + `/${selectCategory}`);
        await temp.forEach((element) => boardListTemp.push(element));
        setBoardListData(boardListTemp);
        setIsLoaded(true);
        observer.observe(entry.target);
    }, {});
    
    const BoardList = boardListData.map((element) => (
        <BoardCard key={element.id} 
            data={element} 
            onClick={() => navigate(`/BoardDetail/${element.id}`, {state: selectCategory})}/>
        // <BoardCard key={element.id} data={element} onClick={() => a(element.id)}/>
    ))

    return (
        <StyledPage className="test">
            <SearchBar selectCategory={selectCategory} setBoardList={setBoardListData}/> 
            <BoardListMain>
                <CategorySideBar selectCategory={selectCategory} onCategorySelect={handlerSelectCategory}/>
                <div>
                <div className='board-list-margin'>
                {BoardList}
                </div>
                {isLoaded && <p ref={setRef}>is Loading</p>}
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

const getDataFromAPI = async (pageCount: number, hasNext: boolean, url: string) => {
    const response = await axios.get(url);
    // console.log('response check', response);
    return response.data.data.content as Board[];
    // return Board[];
}

export default BoardListInfinityScroll;