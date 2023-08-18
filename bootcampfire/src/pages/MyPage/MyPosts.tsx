import styled from 'styled-components';
import BoardCard from 'components/MyPage/BoardCard';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Board } from 'components/Board/interface';
import useIntersect from 'components/Board/BoardList/useIntersect';

const url = `${process.env.REACT_APP_API_URL}/boards/users`;

function MyPosts() {
  const accessToken = localStorage.getItem('Authorization');
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState<Board[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [hasNext, setHasNext] = useState(true);

  const [_, setRef] = useIntersect(async (entry, observer) => {
    if (!hasNext) return;

    let temp = await getDataFromAPI(pageCount, url, accessToken);

    if (temp.last) {
      setHasNext(false);
    }

    if (pageCount === 0) {
      // console.log('test', pageCount);
      // console.log(temp.content);
      setBoardList(temp.content);
    } else {
      setBoardList(boardList.concat(temp.content));
    }
    setPageCount(pageCount + 1);
    observer.unobserve(entry.target);
  }, {});

  const BoardList = boardList.map((element) => (
    <BoardCard data={element} onClick={() => navigate(`/BoardDetail:${element.id}`)} />
  ));

  return (
    <WrapperBoardListMain>
      <BoardListMain className="board-list-margin">
        {BoardList}
        <p style={{ visibility: 'hidden' }} ref={setRef}>
          is Loading
        </p>
      </BoardListMain>
    </WrapperBoardListMain>
  );
}

const WrapperBoardListMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoardListMain = styled.div`
  display: flex;
  height: 760px;
  overflow: auto;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .board-list-margin {
    margin: 0 43px;
  }
`;

const getDataFromAPI = async (pageCount: number, url: string, accessToken: string |null) => {
  // try {
  const response = await axios.get(`${url}?page=${pageCount}&size=5`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      withCredentials: true,
    },
  });
  // console.log('token', accessToken);
  // console.log('check', response);
  return response.data.data;
// } catch (error) {
//  console.log(error); 
// }
};

export default MyPosts;
