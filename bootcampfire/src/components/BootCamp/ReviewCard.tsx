import styled from "styled-components";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";

const ReviewCard: React.FC<BootCampReviewProps> = ({review}) => {

    const [isLiked, setIsLiked] = useState(review.islike);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

    return (
        <>
        <TabBox>
        <HorizontalTabDivs>
            <VerticalDivs1>
                <SubDivStar>
                <FireC><FireB src="/firewood_fill.png" alt="Firewood_fill" /></FireC>
                <Text1>({review.score})</Text1>
                </SubDivStar>
                    <StarRating label="복지" rating={review.back_up} />
                    <StarRating label="분위기" rating={review.mood} />
                    <StarRating label="운영진" rating={review.management} />
                    <StarRating label="커리큘럼" rating={review.curriculum} />
                    <StarRating label="성장가능성" rating={review.potential} />
            </VerticalDivs1>
            <VerticalDivs2>
                <SubDiv>
                    <HorizontalDivs>
                        <TextName>{review.user_id}</TextName>
                        <Text3>{review.created_at.toLocaleDateString()}</Text3>
                    </HorizontalDivs>
                </SubDiv>
                <SubDiv>
                    <Text2>"{review.tip}"</Text2>
                </SubDiv>
                <SubDiv>
                    <Text2>장점</Text2>
                    <Text3>{review.good}</Text3>                    
                </SubDiv>
                <SubDiv>
                    <Text2>단점</Text2>
                    <Text3>{review.bad}</Text3>                    
                </SubDiv>
                <SubDiv>
                    <HorizontalDivs2>
                        <Text2>지인에게 추천 : {review.is_recommend ? 'O' : 'X'}</Text2>
                        <HorizontalDivs>
                        <Text2> 공감 </Text2>
                        <IconButton color="error" aria-label="delete" size="large" onClick={handleToggleLike}>
                            {isLiked ? <Favorite />: <FavoriteBorder />}
                        </IconButton>
                        <Text3>({review.like_cnt-(isLiked ? 0 : 1)})</Text3>
                        </HorizontalDivs>
                    </HorizontalDivs2>
                </SubDiv>
            </VerticalDivs2>
        </HorizontalTabDivs>         
        </TabBox>
        </>
    )
}

const TabBox = styled.div`
box-sizing: border-box; width: 100%;
background: #FFF9F9; border: 1px solid #FF603D; border-radius: 24px;`;

const VerticalDivs1 = styled.div`
flex: 2; display: flex; flex-direction: column; width: 100%; margin: 10px`;

const VerticalDivs2 = styled.div`
flex: 5; display: flex; flex-direction: column; width: 100%; margin: 10px`;

const HorizontalTabDivs = styled.div`
display: flex; flex-direction: row; margin:10px`;

const HorizontalDivs = styled.div`
display: flex; flex-direction: row; & > div {flex-basis: 50%;}`;

const HorizontalDivs2 = styled.div`
display: flex; flex-direction: row; justify-content: space-between;
margin-right:100px`;


const SubDivStar = styled.div`margin 4px 30px;`;

const SubDiv = styled.div`margin 20px;`;

const Text1 = styled.div`
font-family: 'DM Sans'; font-style: normal; font-weight: 700;
font-size: 18px; line-height: 38px; color: #290E08;
text-align: center;`;

const TextName = styled.span`
font-family: 'DM Sans'; font-style: normal; font-weight: 700;
font-size: 21px; line-height: 38px;color: #0E0301; margin: 0px 20px`;

const Text2 = styled.div`
font-family: 'DM Sans'; font-style: normal; font-weight: 700;
font-size: 18px; line-height: 38px;color: #0E0301;`;

const Text3 = styled.span`
font-family: 'DM Sans'; font-style: normal; font-weight: 400;
font-size: 15px; line-height: 38px; color: #94969B;`;


const FireC = styled.div`
display: flex;justify-content: center;align-items: center; margin-bottom: 5px;`;
const Fire = styled.img`width: 32px;`;
const FireB = styled.img`width: 100px;`;

const StarRating: React.FC<{label:string; rating: number;}> = ({ label, rating })=> {
    return (
      <SubDivStar>
        <Text1>{label}</Text1>
        <FireC>{Array.from({ length: rating }).map((_, index) => (
            <Fire key={index} src="/firewood_fill.png" alt="Firewood_fill" />))}
            {Array.from({ length: 5 - rating }).map((_, index) => (
            <Fire key={index} src="/firewood_empty.png" alt="Firewood_empty" />))}
        </FireC>
      </SubDivStar>
    );
};

export default ReviewCard;

interface BootCampReviewProps {
    review: ReviewItem;
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

