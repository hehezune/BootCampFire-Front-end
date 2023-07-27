import React from 'react';
import styled from "styled-components";
import BootCampCard from "../../components/BootCamp/BootCampCard";
import SelectBox from '../../components/BootCamp/SelectBox'; 
import {Link, useNavigate} from 'react-router-dom';

const BootCampListPage: React.FC = () => {
  const currentDate = new Date();
  const navigate = useNavigate();
  const CardClick = (bootcampId: number) => {
    navigate(`/bootcampdetail/${bootcampId}`);
  };

  return (
    <>
    <Container>
      <TopSection>
        <h1>체크 박스</h1>
        <SelectBox />
      </TopSection>
      <CardSection>
        <h1>카드 리스트</h1>
        <CardContainer>
          {objectList.map((item) => (
            <BootCampCardWrapper key={item.id} onClick={() => CardClick(item.id)}>
              <BootCampCard item={item} key={item.id} cur={currentDate} />

            </BootCampCardWrapper>))}
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
  score: number;
  img_path: string;
  onoff: string;
  support: boolean;
  test: boolean;
  startRecruiting: Date;
  endRecruiting: Date;
  tagList: string[];
  // regions: string[];
  // cost
  
}


const objectList: BootCampItem[] = [
  { id : 1, name : '싸피', score : 2.7, img_path:'/img1.png', 
  onoff:'오프라인',support : true, test : true, 
  startRecruiting: new Date('2023-07-01T10:30:00'),  
  endRecruiting: new Date('2023-07-27T15:35:00'),
  tagList:['SpringBoot','Java', 'Python', '임베디드', '모바일']},
  
  { id : 2, name : '네부캠', score : 5.0, img_path:'/img2.png',
  onoff:'온라인',support : true, test : false,
  startRecruiting: new Date('2023-06-01'),  
  endRecruiting: new Date('2023-07-02'),
  tagList:['NLP', 'Python', '추천시스템', '인공지능']},
  
  { id : 3, name : '우태코', score : 3.7, img_path:'/img3.png',
  onoff:'오프라인',support : false, test : true,
  startRecruiting: new Date('2023-07-01'),  
  endRecruiting: new Date('2023-07-21'),
  tagList:['C', 'Python','Go', 'Spring', '움직여']},

  { id : 4, name : 'apple', score : 4.7, img_path:'/img4.png',
  onoff:'온/오프라인',support : true, test : true,
  startRecruiting: new Date('2022-07-01'),  
  endRecruiting: new Date('2022-07-31'),
  tagList:['Python', '모바일', 'Flutter', 'MacOs']},

  { id : 5, name : '부우스트캠프', score : 1.2, img_path:'/img5.png',
  startRecruiting: new Date('2023-07-01'),  
  endRecruiting: new Date('2023-07-31'),
  onoff:'온라인', support : false, test : false,
  tagList:['Pytorch', 'Python', 'Umlang', 'Linux']},
  { id : 1, name : '싸피', score : 2.7, img_path:'/img1.png', 
  onoff:'오프라인',support : true, test : true, 
  startRecruiting: new Date('2023-07-01'),  
  endRecruiting: new Date('2023-07-31'),
  tagList:['SpringBoot','Java', 'Python', '임베디드', '모바일']},
  
  { id : 2, name : '네부캠', score : 5.0, img_path:'/img2.png',
  onoff:'온라인',support : true, test : false,
  startRecruiting: new Date('2023-06-01'),  
  endRecruiting: new Date('2023-07-02'),
  tagList:['NLP', 'Python', '추천시스템', '인공지능']},
  
  { id : 3, name : '우태코', score : 3.7, img_path:'/img3.png',
  onoff:'오프라인',support : false, test : true,
  startRecruiting: new Date('2023-07-01'),  
  endRecruiting: new Date('2023-07-21'),
  tagList:['C', 'Python','Go', 'Spring', '움직여']},

  { id : 4, name : 'apple', score : 4.7, img_path:'/img4.png',
  onoff:'온/오프라인',support : true, test : true,
  startRecruiting: new Date('2022-07-01'),  
  endRecruiting: new Date('2022-07-31'),
  tagList:['Python', '모바일', 'Flutter', 'MacOs']},

  { id : 5, name : '부우스트캠프', score : 1.2, img_path:'/img5.png',
  startRecruiting: new Date('2023-07-01'),  
  endRecruiting: new Date('2023-07-31'),
  onoff:'온라인', support : false, test : false,
  tagList:['Pytorch', 'Python', 'Umlang', 'Linux']},    { id : 1, name : '싸피', score : 2.7, img_path:'/img1.png', 
  onoff:'오프라인',support : true, test : true, 
  startRecruiting: new Date('2023-07-01'),  
  endRecruiting: new Date('2023-07-31'),
  tagList:['SpringBoot','Java', 'Python', '임베디드', '모바일']},
  
  { id : 2, name : '네부캠', score : 5.0, img_path:'/img2.png',
  onoff:'온라인',support : true, test : false,
  startRecruiting: new Date('2023-06-01'),  
  endRecruiting: new Date('2023-07-02'),
  tagList:['NLP', 'Python', '추천시스템', '인공지능']},
  
  { id : 3, name : '우태코', score : 3.7, img_path:'/img3.png',
  onoff:'오프라인',support : false, test : true,
  startRecruiting: new Date('2023-07-01'),  
  endRecruiting: new Date('2023-07-21'),
  tagList:['C', 'Python','Go', 'Spring', '움직여']},

  { id : 4, name : 'apple', score : 4.7, img_path:'/img4.png',
  onoff:'온/오프라인',support : true, test : true,
  startRecruiting: new Date('2022-07-01'),  
  endRecruiting: new Date('2022-07-31'),
  tagList:['Python', '모바일', 'Flutter', 'MacOs']},

  { id : 5, name : '부우스트캠프', score : 1.2, img_path:'/img5.png',
  startRecruiting: new Date('2023-07-01'),  
  endRecruiting: new Date('2023-07-31'),
  onoff:'온라인', support : false, test : false,
  tagList:['Pytorch', 'Python', 'Umlang', 'Linux']},

]
