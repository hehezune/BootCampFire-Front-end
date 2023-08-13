import { useEffect, useRef, useState } from 'react';
import MainSearchBar from 'components/MainPage/MainSearchBar';
import BoardCard from 'components/MainPage/BoardCard';
import styled from 'styled-components';
import { StyledPage } from '../BoardPage/styledPage';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Board } from 'components/Board/interface';
import useIntersect from 'components/Board/BoardList/useIntersect';
import { categoryMap } from 'constant/constant';
import { useParams } from 'react-router-dom';

const API_URL = 'http://localhost:8080/categories';
const accessToken = localStorage.getItem('Authorization');
const header = {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
}

interface stateType {
  searchPromise: Promise<any>;
  keyword: string;
  type: number;
}
let check = 0;
function MainSearchListPage() {
    const navigate = useNavigate();
    const [boardListData, setBoardListData] = useState<Board[]>([]);
    const {searchType, keyword} = useParams();
    const url = `${API_URL}/${searchType}/${keyword}`;
    const [pageCount, setPageCount] = useState(0);
    const [hasNext, setHasNext] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
      getDataFromAPI(pageCount, url)
      .then((res) => {
        if (res.content.length === 0) {
            setIsEmpty(true);
        }
        setBoardListData(res.content);
        setHasNext(true);
        setPageCount(1);
      })
      .catch((err) => {
        console.log(err)
      })
    //   setUrl(url);
    },[])

    // 무한스크롤용 로직
    const [_, setRef] = useIntersect(async(entry, observer) => {
        if (!hasNext) return ;
        let temp = await getDataFromAPI(pageCount, url);
        if (temp.last) {
            setHasNext(false);
        }

        if (pageCount === 0) {
            setBoardListData(temp.content);
        } else {
            setBoardListData(boardListData.concat(temp.content));

        }
        setPageCount(pageCount + 1);
        observer.unobserve(entry.target)
    }, {});
    
    const BoardList = boardListData.map((element, idx) => (
        <BoardCard key={idx} data={element} 
            onClick={() => navigate(`/BoardDetail/${element.id}`, {state: categoryMap.get(element.category)})}/>
    ))

    return (
        <StyledPage className="test">
            <MainSearchBar activeTitle={true}/> 
            <BoardListMain>
                <TStyledDiv>
                    <div className='board-list-margin'>
                    {!isEmpty && BoardList}
                    {isEmpty && <div>정보가 없습니다</div>}
                    </div>
                    <Sp ref={setRef}>is Loading</Sp>
                </TStyledDiv>
            </BoardListMain>
        </StyledPage>
    )
}

const TStyledDiv = styled.div`
    height: 730px;
    width: 800px;
    overflow: auto;
`
const Sp = styled.p`
    visibility: hidden;
`

const BoardListMain = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    .board-list-margin {
        margin-left: 42px;
        width: 80%;
    }
`

const getDataFromAPI = async (pageCount: number, url: string) => {
    // boardList 받아오는 axios 요청
    const response = await axios.get(`${url}?page=${pageCount}&size=5`, header
    );
    console.log(response)
    return response.data.data;
}

export default MainSearchListPage;