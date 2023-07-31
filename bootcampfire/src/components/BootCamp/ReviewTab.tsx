import styled from "styled-components";
import ReviewCard from "./ReviewCard";

const ReviewTab: React.FC<BootCampReviewProps> = ({reviewlist}) => {
    return (
        <>
        <TabBox>
        {reviewlist.map((review) => (<ReviewCard review={review}/>))}
        </TabBox>        
        </>
        )        
}

export default ReviewTab;




const TabBox = styled.div`
box-sizing: border-box; width: 1300px;
background: #FFF9F9; border: 1px solid #FF603D; border-radius: 24px;`;


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
