import styled from "styled-components";
import ReviewCard from "./ReviewCard";
import { useSelector } from 'react-redux';
import { RootState } from "store";
const ReviewTab: React.FC<BootCampReviewProps> = ({reviewlist}) => {

  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

    return (
        <>
        <TabBox blur={isLoggedIn}>
        {reviewlist.map((review) => (<ReviewCard review={review}/>))}
        </TabBox>        
        </>
        )        
}

export default ReviewTab;




const TabBox = styled.div<{ blur: boolean }>`
  box-sizing: border-box;
  width: 100%;
  background: #fff9f9; /* You should not use 'solid #FF603D' here, as it's not a valid property */
  border-radius: 24px;
  ${(props) => (props.blur === false ? `filter: blur(5px);` : ``)}
`;

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
