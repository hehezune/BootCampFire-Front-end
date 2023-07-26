import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';

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
  // isDatInRage: false, // 이건 받는 값이 아니다...
  tagList: string[];
}

interface BootCampCardProps {
  item: BootCampItem;
  cur: Date;
}


const BootCampCard: React.FC<BootCampCardProps> = ({ item, cur }) => {

  const is_Support = item.support ? "지원금 O" : "지원금 X";
  const is_test = item.support ? "코테 O"   : "코테 X";
  const isDateInRange = cur >= item.startRecruiting && cur <= item.endRecruiting;

  return (
    <CardContainer>
      <div>
      {isDateInRange && <div>모집중</div>}
      </div>
      <LogoImage src={item.img_path} alt="BootCamp Logo" />
      <FlexContainer>
        <CardHeading>{item.name}</CardHeading>
        <ScoreText>{item.score}</ScoreText>
      </FlexContainer>
        <TagContainer>
          <Tag text={item.onoff} color='#21C63C' />
          <Tag text={is_Support} color='#4E80FF' />
          <Tag text={is_test} color='#B131DD' />          
        </TagContainer>
        <TagContainer>
            {item.tagList.map((tag) => (<Tag text={tag} />))}
        </TagContainer>
    </CardContainer>
  );
};

export default BootCampCard;



const CardContainer = styled.div`
  position: relative;
  width: 230px; 
  height: 294px;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;


const LogoImage = styled.img`
//   width: 243px;
  height: 100px;
  border-radius: 10px;
`;



const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;



const CardHeading = styled.h2`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  font-size: 18px;
  margin-bottom: 8px; /* 글자 아래에 간격 추가 */
`;

const ScoreText = styled.h2`
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 18px; /* 작은 글자 크기 설정 */
  color: #94969b; /* 기본 글자 색상 설정 */
  margin-bottom: 8px; /* 글자 아래에 간격 추가 */
  line-height: 38px;


`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;