import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import  { Checkbox, Rating, TextField, Button } from "@mui/material";
import { styled as styled2  } from '@mui/material/styles';
import { pink } from '@mui/material/colors';




const ReviewCreate: React.FC<BootCampReviewProps> = ({review}) => {


    const [formData, setFormData] = useState({
        tip: review.tip,
        good: review.good,
        bad: review.bad,
        is_recommend: review.isRecommend,
      });
    
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ 
            ...prevFormData, 
            [name]: name === "is_recommend" ? event.target.checked : value, 
        }));
      };
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post("your-api-endpoint", formData).then((response) => {
        }).catch((error) => {
        });
      };
    
    return (
        <>
        <TabBox>

        <HorizontalTabDivs>
            <VerticalDivs1>
                    <SubDiv></SubDiv>
                    <StarRating label="복지" rating={review.backUp} />
                    <StarRating label="분위기" rating={review.mood} />
                    <StarRating label="운영진" rating={review.management} />
                    <StarRating label="커리큘럼" rating={review.curriculum} />
                    <StarRating label="성장가능성" rating={review.potential} />
            </VerticalDivs1>
            <VerticalDivs2>
                <SubDiv>
                    <Text2>팁</Text2>
                    <TextField id="standard-multiline-flexible" defaultValue={review.tip}
                         fullWidth multiline variant="outlined" />
                </SubDiv>
                <SubDiv>
                <Text2>장점</Text2>
                <TextField id="standard-multiline-flexible" defaultValue={review.good}
                        fullWidth multiline variant="outlined" />
                </SubDiv>
                <SubDiv>
                <Text2>단점</Text2>
                <TextField id="standard-multiline-flexible" defaultValue={review.bad}
                        fullWidth multiline variant="outlined" />
                </SubDiv>
                <SubDiv>
                    <HorizontalDivs2>
                    <HorizontalDivs>
                        <Text2>지인에게 추천 :                             
                        </Text2>
                        <Checkbox {...label} defaultChecked={review.isRecommend} color="default" />
                        </HorizontalDivs>
                        <HorizontalDivs>
                        <Button variant="outlined" color="error"><Text2>작성완료</Text2></Button>
                        <Button variant="outlined" color="error"><Text2>삭제하기</Text2></Button>
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
display: flex; flex-direction: row;`;

const HorizontalDivs2 = styled.div`
display: flex; flex-direction: row; justify-content: space-between;
margin-right:100px`;


const SubDivStar = styled.div`margin 4px 30px;`;

const SubDiv = styled.div`margin 20px;`;

const Text1 = styled.div`
font-family: 'DM Sans'; font-style: normal; font-weight: 700;
font-size: 18px; line-height: 38px; color: #290E08;
text-align: center;`;

const Text2 = styled.div`
font-family: 'DM Sans'; font-style: normal; font-weight: 700;
font-size: 18px; line-height: 38px; margin: 5px`;

const FireC = styled.div`
display: flex;justify-content: center;align-items: center; margin-bottom: 5px;`;
const Fire = styled.img`width: 32px;`;

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const StyledRating = styled2(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

const StarRating: React.FC<{label:string; rating: number;}> = ({ label, rating })=> {
    return (
      <SubDivStar>
        <Text1>{label}</Text1>
        <FireC>
        <StyledRating
            name="customized-color"
            defaultValue={rating}
            getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={1}
            icon={<Fire src="/firewood_fill.png" alt="Firewood_empty" />}
            emptyIcon={<Fire src="/firewood_empty.png" alt="Firewood_empty" />}/>
        </FireC>
      </SubDivStar>
    );
};

export default ReviewCreate;

interface BootCampReviewProps {
    review: ReviewItem;
  }
  interface ReviewItem {
    id: number;
    user: string;
    bootcampName: string;
    tip: string;
    good: string;
    bad: string;
    isRecommend: boolean;
    likeCnt: number;
    curriculum: number;
    potential: number;
    backUp: number;
    management: number;
    mood: number;
    score: number;
    createDate: Date;
    isAlreadyReviewLike: boolean;
  }
  