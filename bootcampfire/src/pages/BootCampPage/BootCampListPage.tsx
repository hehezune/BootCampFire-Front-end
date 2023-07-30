import React from 'react';
import styled from "styled-components";
import BootCampCard from "../../components/BootCamp/BootCampCard";
import SelectBox from '../../components/BootCamp/SelectBox'; 
import {Link, useNavigate} from 'react-router-dom';

import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';


const BootCampListPage: React.FC = () => {
  const currentDate = new Date();
  const navigate = useNavigate();
  const CardClick = (bootcampId: number) => {
    navigate(`/bootcampdetail/${bootcampId}`);
  };

  const [a, seta] = useState<any>({});
  // useEffect(() => {
  //   if (Object.keys(a).length === 0) {
  //     axios.get('http://localhost:8080/boards/3?userId=1')
  //       .then((response: AxiosResponse<any>) => seta(response.data));
  //   }
  // }, [a]);
  const handleGetButtonClick = () => {
    axios.get('http://localhost:8080/boards/3?userId=1')
      .then((response: AxiosResponse<any>) => seta(response.data));
  };

  console.log(a.data);
  // const aa = a.data.bootcamp
  
  return (
    <>
    <Container>
      <TopSection>
        <h1>체크 박스</h1>
        <SelectBox />
      </TopSection>
      <CardSection>
        <h1>카드 리스트</h1>
        <button onClick={handleGetButtonClick}>GET 받는 버튼</button>
        {/* <div>{a.data}</div> */}
        <CardContainer>
          {objectList.map((item) => (
            <BootCampCardWrapper key={item.id} onClick={() => CardClick(item.id)}>
              <BootCampCard item={item} key={item.id} cur={currentDate} />
            </BootCampCardWrapper>
          ))}
        </CardContainer>      
      </CardSection>
    </Container>
    </>
  );
};

export default BootCampListPage;

const Container = styled.div`
display: flex;
flex-direction: row;
`;

const TopSection = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
`;

const CardSection = styled.div`
  flex: 4;
  padding: 20px;
  background-color: #ffffff;
`;


const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin:-10px;
`;


const BootCampCardWrapper = styled.div`
  margin: 15px;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2); /* 검은색 투명도 20% 덮개 색상 */
    border-radius: 4px;
    z-index: 1; /* 다른 컨텐츠보다 위로 배치 */
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;
  }

  &:hover::before {
    visibility: visible;
    opacity: 1;
  }
`;



interface BootCampItem {
  id: number;
  name: string;

  cost: boolean;
  support: boolean;
  test: boolean;

  onoff: string;
  startRecruiting: Date;
  endRecruiting: Date;

  score: number;
  tagList: string[];
  regions: string[];
  img_path: string;  
}


const objectList: BootCampItem[] = [
  { id : 1, 
    name : '싸피',
    
    cost: false,
    support : true, 
    test : true, 
    
    onoff:'오프라인',
    startRecruiting: new Date('2023-07-01T10:30:00'),  
    endRecruiting: new Date('2023-07-27T15:35:00'),

    score : 2.7,
    tagList:['백엔드','프론트', '풀스택', '임베디드', '앱'],
    regions:['서울', '구미', '대전'],
    img_path:'/img1.png', 
  },

  { id : 2, 
    name : '네이버 부트캠프',
    
    cost: false,
    support : true, 
    test : false, 
    
    onoff:'온라인',
    startRecruiting: new Date('2023-06-01T10:30:00'),  
    endRecruiting: new Date('2023-07-02T15:35:00'),

    score : 5.0,
    tagList:['데이터 분석', 'AI'],
    regions:['서울', '경기도'],
    img_path:'/img2.png', 
  },

  { id : 3, 
    name : '우아한테크코스',
    
    cost: false,
    support : false, 
    test : true, 
    
    onoff:'온/오프라인',
    startRecruiting: new Date('2023-07-01T10:30:00'),  
    endRecruiting: new Date('2023-07-21T15:35:00'),

    score : 3.7,
    tagList:['백엔드','프론트','클라우드','풀스택'],
    regions:['서울'],
    img_path:'/img3.png', 
  },

  { id : 4, 
    name : 'apple',
    
    cost: false,
    support : true, 
    test : true, 
    
    onoff:'오프라인',
    startRecruiting: new Date('2023-07-01T10:30:00'),  
    endRecruiting: new Date('2023-07-31T15:35:00'),

    score : 4.2,
    tagList:['앱','AI','클라우드'],
    regions:['광주', '구미'],
    img_path:'/img4.png', 
  },

  { id : 5, 
    name : '부우스트캠프',
    
    cost: true,
    support : false, 
    test : true, 
    
    onoff:'오프라인',
    startRecruiting: new Date('2023-07-11T10:30:00'),  
    endRecruiting: new Date('2023-07-31T15:35:00'),

    score : 1.2,
    tagList:['임베디드','그 외'],
    regions:['서울', '경기도'],
    img_path:'/img5.png', 
  },
  { id : 1, 
    name : '싸피',
    
    cost: false,
    support : true, 
    test : true, 
    
    onoff:'오프라인',
    startRecruiting: new Date('2023-07-01T10:30:00'),  
    endRecruiting: new Date('2023-07-27T15:35:00'),

    score : 2.7,
    tagList:['백엔드','프론트', '풀스택', '임베디드', '앱'],
    regions:['서울', '구미', '대전'],
    img_path:'/img1.png', 
  },

  { id : 2, 
    name : '네이버 부트캠프',
    
    cost: false,
    support : true, 
    test : false, 
    
    onoff:'온라인',
    startRecruiting: new Date('2023-06-01T10:30:00'),  
    endRecruiting: new Date('2023-07-02T15:35:00'),

    score : 5.0,
    tagList:['데이터 분석', 'AI'],
    regions:['서울', '경기도'],
    img_path:'/img2.png', 
  },

  { id : 3, 
    name : '우아한테크코스',
    
    cost: false,
    support : false, 
    test : true, 
    
    onoff:'온/오프라인',
    startRecruiting: new Date('2023-07-01T10:30:00'),  
    endRecruiting: new Date('2023-07-21T15:35:00'),

    score : 3.7,
    tagList:['백엔드','프론트','클라우드','풀스택'],
    regions:['서울'],
    img_path:'/img3.png', 
  },

  { id : 4, 
    name : 'apple',
    
    cost: false,
    support : true, 
    test : true, 
    
    onoff:'오프라인',
    startRecruiting: new Date('2023-07-01T10:30:00'),  
    endRecruiting: new Date('2023-07-31T15:35:00'),

    score : 4.2,
    tagList:['앱','AI','클라우드'],
    regions:['광주', '구미'],
    img_path:'/img4.png', 
  },

  { id : 5, 
    name : '부우스트캠프',
    
    cost: true,
    support : false, 
    test : true, 
    
    onoff:'오프라인',
    startRecruiting: new Date('2023-07-11T10:30:00'),  
    endRecruiting: new Date('2023-07-31T15:35:00'),

    score : 1.2,
    tagList:['임베디드','그 외'],
    regions:['서울', '경기도'],
    img_path:'/img5.png', 
  },



]
