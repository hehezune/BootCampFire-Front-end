import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import  { Checkbox, Rating, TextField, Button } from "@mui/material";
import { styled as styled2  } from '@mui/material/styles';
import { useEffect } from "react";

import { RootState } from "store";
import { useSelector } from "react-redux";

// Long userId,
// Long bootcampId,
// String tip,
// String good,
// String bad,
// Boolean isRecommend,
// Integer curriculum,
// Integer potential,
// Integer backUp,
// Integer management,
// Integer mood
// @ApiOperation(value = "리뷰 수정")
// @PutMapping("/{bootcampId}/{reviewId}")
// public BaseResponseDto<ReviewReponseDto> updateReview(@PathVariable Long reviewId, @RequestBody @Valid ReviewRequestDto requestDto){
//     return BaseResponseDto.ok(reviewService.update(reviewId, requestDto));
// }



const ReviewCreate: React.FC<BootCampReviewProps> = ({review}) => {

  const { userId, bootcampId } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    userId : userId,
    bootcampId : bootcampId,
    backUp : review.backUp,
    mood : review.mood,
    management : review.management,
    curriculum : review.curriculum,
    potential : review.potential,
    tip: review.tip,
    good: review.good,
    bad: review.bad,
    is_recommend: review.isRecommend || false,
  });

  const handleRecommendChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newIsRecommend = event.target.checked;
    setFormData((prevFormData) => ({
      ...prevFormData,
      is_recommend: newIsRecommend,
    }));
  };
  const handleSubmit = () => {
    // 서버로 보낼 데이터 생성
    const postData = {
      userId: formData.userId,
      bootcampId: formData.bootcampId,
      backUp: formData.backUp,
      mood: formData.mood,
      management: formData.management,
      curriculum: formData.curriculum,
      potential: formData.potential,
      tip: formData.tip,
      good: formData.good,
      bad: formData.bad,
      isRecommend: formData.is_recommend,
    };
  
    if (review.id) {
      axios
        .put(`http://localhost:8080/reviews/${bootcampId}/${review.id}`, postData)
        .then((response) => {console.log("리뷰 수정이 완료되었습니다.");})
        .catch((error) => {console.error("리뷰 수정 중 오류가 발생했습니다.", error);});
    } else {
      axios
        .post(`http://localhost:8080/reviews`, postData)
        .then((response) => {console.log("리뷰 작성이 완료되었습니다.");})
        .catch((error) => {console.error("리뷰 작성 중 오류가 발생했습니다.", error);});
    }
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/reviews/${bootcampId}/${review.id}`)
  .then((response) => {console.log("리뷰가 삭제되었습니다.");})
  .catch((error) => {console.error("리뷰 삭제 중 오류가 발생했습니다.", error);});
  }

return (
    <>
    <TabBox>
    <HorizontalTabDivs>          
      <VerticalDivs1>
        <RatingStar label="복지" value={formData.backUp}
          onChange={(newValue) => setFormData((prevFormData) => ({ ...prevFormData, backUp: newValue }))}
        />
        <RatingStar label="분위기" value={formData.mood} 
          onChange={(newValue) => setFormData((prevFormData) => ({ ...prevFormData, mood: newValue }))}
        />
        <RatingStar label="운영진" value={formData.management}
          onChange={(newValue) => setFormData((prevFormData) => ({ ...prevFormData, management: newValue }))}
        />
        <RatingStar label="커리큘럼" value={formData.curriculum}
          onChange={(newValue) => setFormData((prevFormData) => ({ ...prevFormData, curriculum: newValue }))}
        />
        <RatingStar label="성장가능성" value={formData.potential}
          onChange={(newValue) => setFormData((prevFormData) => ({ ...prevFormData, potential: newValue }))}
        />
      </VerticalDivs1>
      <VerticalDivs2>
        {createTextField('팁', formData.tip, (newValue) => setFormData((prevFormData) => ({ ...prevFormData, tip: newValue })))}
        {createTextField('장점', formData.good, (newValue) => setFormData((prevFormData) => ({ ...prevFormData, good: newValue })))}
        {createTextField('단점', formData.bad, (newValue) => setFormData((prevFormData) => ({ ...prevFormData, bad: newValue })))}
        <SubDiv>
          <HorizontalDivs2>
            <HorizontalDivs>
              <Text2>지인에게 추천 : <Checkbox id="is-recommend-checkbox" checked={formData.is_recommend}
              color="default" onChange={handleRecommendChange}/></Text2>
            </HorizontalDivs>
            <HorizontalDivs>
              {!review.id && <Button variant="outlined" color="error" onClick={handleSubmit}><Text2>작성하기</Text2></Button>}
              {review.id && <>
              <Button variant="outlined" color="error" onClick={handleSubmit}><Text2>수정하기</Text2></Button>
              <Button variant="outlined" color="error" onClick={handleDelete}><Text2>삭제하기</Text2></Button>
              </>}
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

  type RatingStarProps = {
    label: string;
    value: number;
    onChange: (newValue: number) => void;
  };
  const RatingStar: React.FC<RatingStarProps> = ({ label, value, onChange }) => {
    return (
      <SubDivStar>
        <Text1>{label}</Text1>
        <FireC>
          <StyledRating
            name="customized-color"
            value={value}
            getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={1}
            icon={<Fire src="/firewood_fill.png" alt="Firewood_empty" />}
            emptyIcon={<Fire src="/firewood_empty.png" alt="Firewood_empty" />}
            onChange={(event, newValue) => onChange(newValue !== null ? newValue : 0)}
          />
        </FireC>
      </SubDivStar>
    );
  };


  const createTextField = (label: string, value: string, onChange: (newValue: string) => void) => (
    <SubDiv>
      <Text2>{label}</Text2>
      <TextField id="standard-multiline-flexible" value={value} fullWidth multiline variant="outlined"
        onChange={(event) => {
          const newValue = event.target.value;
          onChange(newValue);
        }}
      />
    </SubDiv>
  );


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
    createdDate: Date;
    isAlreadyReviewLike: boolean;
  }
  