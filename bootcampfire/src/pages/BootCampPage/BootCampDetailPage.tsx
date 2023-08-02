import styled from "styled-components";
import { StyledBtn } from "components/Board/styled";
import { colors } from '../../constant/constant';

import DetailTab from "components/BootCamp/DetailTab";
import ReviewTab from "components/BootCamp/ReviewTab";
import ReviewCreate from "components/BootCamp/ReviewCreate";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { StyledPage } from "pages/BoardPage/styledPage";

import { Bold18px } from "components/Board/styled";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';


const BootCampListDetailPage: React.FC = () => {
  const { bootcampid } = useParams(); 
  const bootcampIdNumber = bootcampid ? parseInt(bootcampid) : undefined;
  const [isDetailTabSelected, setIsDetailTabSelected] = useState(0);
  const handleTabClick = (isDetailTab: number) => {setIsDetailTabSelected(isDetailTab);};

  const { isLoggedIn, bootcampId, nickname} = useSelector((state: RootState) => state.auth);

  return (
    <>
      <BootCampDetailMain>
        <Tab>
        <LogoContainer>
          <LogoImage src={dummyboot.img_path} alt="BootCamp Logo" />
        </LogoContainer>
        <VerticalDivs>
          <HorizontalDivs>
            <Mtext>{dummyboot.name}</Mtext>
            <StyledBtn type="first" as="a" href={dummyboot.site_url}>사이트로 가기</StyledBtn>
          </HorizontalDivs>
          <HorizontalDivs>
            <Mtext2>({dummyboot.score})</Mtext2>
            <Mtext3  style={{ marginRight: "50px" }}>{dummyboot.review_cnt} 개의 후기가 작성되었습니다.</Mtext3>
            <Mtext2>모집 기간 : {dummyboot.startRecruiting.toLocaleDateString()} ~ {dummyboot.endRecruiting.toLocaleDateString()}</Mtext2>            
          </HorizontalDivs>
        </VerticalDivs>
        </Tab>
        <SelectTab>
          <HorizontalDivs>
            <MTab selected={isDetailTabSelected===0 ? true: false} onClick={() => handleTabClick(0)}>기본 정보</MTab>
            <MTab selected={isDetailTabSelected === 1} onClick={() => handleTabClick(1)}>후기</MTab>
            </HorizontalDivs>
          <HorizontalDivs>
            {isLoggedIn ? null :<Mtext2>로그인하시면 후기 이용이 가능합니다.</Mtext2>}
            {isLoggedIn &&  bootcampIdNumber === bootcampId ? <StyledBtn2 onClick={() => handleTabClick(2)}>후기 작성하기</StyledBtn2> :null }            
          </HorizontalDivs>
        </SelectTab>
        <TabSelected isDetailTabSelected={isDetailTabSelected}/>      
        </BootCampDetailMain>
    </>
  );
};

export default BootCampListDetailPage;

const BootCampDetailMain = styled(StyledPage)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin : 20px 0;
`;
const SelectTab = styled.div`
display: flex; height : 90px; width: 100%; justify-content: space-between`;

const Tab = styled.div`
display: flex; height : 180px; margin : 10px 0;
// background-color: #66ffcc;`;

const LogoContainer = styled.div`
  width: 270px; height: 160px; margin: 10px;
  border-radius: 10px; overflow: hidden;`;

const LogoImage = styled.img`
  width: 80%; height: 80%; object-fit: cover;`;

const VerticalDivs = styled.div`
display: flex; flex-direction: column; width: 100%;`;

const VerticalCenter = styled.div`
display: flex; flex-direction: column; width: 100%;
align-items: center; /* 수직 가운데 정렬 */`;

const HorizontalDivs = styled.div`
display: flex; flex-direction: column; flex-direction: row`;


const Mtext = styled.div`
font-family: 'DM Sans'; font-style: normal; font-weight: 700; font-size: 24px;
line-height: 31px; display: flex; align-items: center; color: #0E0301;
margin : 0px 20px;`;

const Mtext2 = styled.div`
font-family: 'DM Sans'; font-style: normal; font-weight: 700; font-size: 18px;
line-height: 31px; display: flex; align-items: center; color: #0E0301;
margin: 20px 3px;`;

const Mtext3 = styled.div`
font-family: 'DM Sans'; font-style: normal; font-weight: 400; font-size: 15px;
display: flex; align-items: center; color: #5D5A88; margin: 20px 2px; `;


const MTab = styled.div<{selected: boolean}>`
font-family: 'DM Sans'; font-style: normal; font-weight: 700; font-size: 22px;
display: flex; align-items: center; color: #0E0301; margin : 0 40px;
cursor: pointer;
  padding-bottom: 5px; /* Add padding for the orange bar */
  border-bottom: ${(props) => (props.selected ? '5px solid #FF603D' : 'none')};
  &:hover { color: #FF603D; solid #FF603D;}`;


const StyledBtn2 = styled(Bold18px)`
background-color: ${colors.PRIMARY}; color: ${colors.WHITE}; display: inline-flex;
padding: 5px 15px; justify-content: center; align-items: center; font-size: 22px;
border-radius: 10px; gap: 10px; height: 38px;`;

const TabSelected = ({ isDetailTabSelected }:{isDetailTabSelected: number;}) => {
  switch (isDetailTabSelected) {
    case 0: return <DetailTab bootcamp={dummyboot}  />;
    case 1: return <ReviewTab reviewlist={dummyReview}/>;
    case 2: return <ReviewCreate review={MydummyReview}/>;
    default:
      return null; // Handle default case or show a component for an unknown value
  }
};

// dummy data
interface BootCampItem {
  // id: number; props로 받아서 axios 요청할 꺼.
  img_path: string;  
  name: string;
  site_url: string;
  score: number;
  review_cnt : number;

  tagList: string[];
  languages: string[]; 
  
  schedule : string;
  onoff: string;
  regions: string[];

  cost: number;
  support: boolean;
  
  process:string;
  
  // 있는데 안쓰거나, 쓰는데 없는 것.
  test: boolean;
  startRecruiting: Date;
  endRecruiting: Date;  
  description : string;
  // 지원자격, 우대자격
}

const dummyboot: BootCampItem = 
  {  
    img_path:'/img1.png', 
    name : 'SSAFY',
    site_url: "https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp",
    score : 2.7,
    review_cnt: 4,

    tagList:['백엔드','프론트', '풀스택', '임베디드', '앱'], 
    languages: ['JAVA', 'PYTHON'], 

    schedule: "1년, 평일", 
    onoff:'오프라인', 
    regions:['서울', '구미', '대전'], 

    cost: 0, 
    support : true, 

    process: "코테 후 면접", 
    test : true, 
    description : "설명",
    startRecruiting: new Date('2023-07-01T10:30:00'),  
    endRecruiting: new Date('2023-07-27T15:35:00'),
  }


  interface BootCampReviewProps {
    reviewlist: ReviewItem[];
  }

  interface ReviewItem {
    user_id: number;  
    bootcamp_id: number;

    tip : string;
    good : string;
    bad : string;
    is_recommend : boolean;

    curriculum : number;
    potential : number;
    back_up : number;
    management : number;
    mood : number;

    score : number;
    like_cnt : number;

    created_at : Date;
    updated_at : Date;

    islike : boolean;
  }

  const MydummyReview:ReviewItem = {
    user_id: 1,  
    bootcamp_id: 1,

    tip : "다 좋은데 다 좋진 않음.",
    good : "좋다",
    bad : "나쁘다",
    is_recommend : true,

    curriculum : 3,
    potential : 2,
    back_up : 5,
    management : 1,
    mood : 4,

    score : 3,
    like_cnt : 2,

    created_at : new Date('2023-07-01T10:30:00'),
    updated_at : new Date(''),
    islike : true
  }


  const dummyReview : ReviewItem[] = [
  {
    user_id: 1,  
    bootcamp_id: 1,

    tip : "다 좋은데 다 좋진 않음.",
    good : "좋다",
    bad : "나쁘다",
    is_recommend : true,

    curriculum : 3,
    potential : 2,
    back_up : 5,
    management : 1,
    mood : 4,

    score : 3,
    like_cnt : 2,

    created_at : new Date('2023-07-01T10:30:00'),
    updated_at : new Date(''),
    islike : true
  },
  {
    user_id: 1,  
    bootcamp_id: 1,

    tip : "팁",
    good : "좋다",
    bad : "나쁘다",
    is_recommend : true,

    curriculum : 3,
    potential : 2,
    back_up : 5,
    management : 1,
    mood : 4,

    score : 3,
    like_cnt : 2,

    created_at : new Date('2023-07-01T10:30:00'),
    updated_at : new Date(''),
    islike : true
  },
  {
    user_id: 1,  
    bootcamp_id: 1,

    tip : "팁",
    good : "좋다",
    bad : "나쁘다",
    is_recommend : true,

    curriculum : 3,
    potential : 2,
    back_up : 5,
    management : 1,
    mood : 4,

    score : 3,
    like_cnt : 2,

    created_at : new Date('2023-07-01T10:30:00'),
    updated_at : new Date(''),
    islike : true
  },
  ]