import styled from 'styled-components';
import CustomizedInputBase from '../../components/CustomizedInputBase'; // CustomizedInputBase 컴포넌트 import
import HotBoard from '../../components/MainPage/HotBoard';
import Ranking from '../../components/MainPage/Ranking';
import SampleBoard from 'components/MainPage/SampleBoard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MainSearchInput from 'components/MainPage/MainSearchInput';
import { useSelector } from 'react-redux';
import type { RootState } from 'store';
import { Root } from 'react-dom/client';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  left: 80px;
`;

const BoardDiv = styled.div`
  margin-left: 100;
`;



export default function MainPage() {
  function createData(index: number, img: string, text: string) {
    return { index, img, text };
  }
  const rows = [
    createData(1, '/asd', '자유게시판'),
    createData(2, '/asd', '썸/연애'),
    createData(3, '/asd', '헬스/다이어트'),
    createData(4, '/asd', '고민'),
    createData(5, '/asd', '프로젝트'),
    createData(6, '/asd', '스터디'),
    createData(7, '/asd', '질문'),
    createData(8, '/asd', 'IT'),
    createData(9, '/asd', '내 부트캠프'),
  ];

  const navigate = useNavigate();
  const keyword = useSelector((state: RootState) => state.search.keyword);
  const type = useSelector((state: RootState) => state.search.type);
  
  return (
    <MainContainer>
      <BoardDiv>
        <h1>MainPage</h1>
        <MainSearchInput activeTitle={false}/>
        <HotBoard />
        <div style={{ display: 'flex' }}>
          {rows.map((row) => (
            <SampleBoard index={row.index} img={row.img} text={row.text} />
          ))}
          <Ranking />
        </div>
      </BoardDiv>
    </MainContainer>
  );
}
