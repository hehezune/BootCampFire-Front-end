import React from 'react';
import styled from "styled-components";
import BootCampCard from "../../components/BootCamp/BootCampCard";
import SelectBox from '../../components/BootCamp/SelectBox'; 

const BootCampListPage: React.FC = () => {
  const currentDate = new Date();

  return (
    <>
    <Container>
      <TopSection>
        <h1>ss</h1>
        <SelectBox />
      </TopSection>
      <CardSection>
        <h1>카드 리스트</h1>
        <CardContainer>
          {objectList.map((item) => (
            <BootCampCardWrapper>
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

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin:-10px;

`;
const BootCampCardWrapper = styled.div`
  margin: 15px;
`;

const TopSection = styled.div`
  flex: 1; /* Takes up 1/3 of the available space */
  padding: 20px;
  text-align: center;
`;

const CardSection = styled.div`
  flex: 4; /* Takes up 2/3 of the available space */
  padding: 20px;
  background-color: #ffffff;
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
}


const objectList: BootCampItem[] = [
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
