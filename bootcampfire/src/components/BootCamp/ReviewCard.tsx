import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useState } from 'react';
import axios from 'axios';

const ReviewCard: React.FC<BootCampReviewProps> = ({ review }) => {
  const [isLiked, setIsLiked] = useState(review.isAlreadyReviewLike);
  const isLiked_org = review.isAlreadyReviewLike;
  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleLikes = () => {
    const api_url = !isLiked ? `${review.id}` : `cancel/${review.id}`;
    axios
      .post(`${process.env.REACT_APP_API_URL}/review-likes/${api_url}`)
      .then((response) => {
        console.log('리뷰 좋아요 성공');
      })
      .catch((error) => {
        console.error('리뷰 좋아요 실패', error);
      });
  };
  console.log(review);
  console.log(review.createdDate);

  return (
    <>
      <TabBox>
        <HorizontalTabDivs>
          <VerticalDivs1>
            <SubDivStar>
              <FireC>
                <FireB src="/firewood_fill.png" alt="Firewood_fill" />
              </FireC>
              <Text1>({review.score})</Text1>
            </SubDivStar>
            <StarRating label="복지" rating={review.backUp} />
            <StarRating label="분위기" rating={review.mood} />
            <StarRating label="운영진" rating={review.management} />
            <StarRating label="커리큘럼" rating={review.curriculum} />
            <StarRating label="성장가능성" rating={review.potential} />
          </VerticalDivs1>
          <VerticalDivs2>
            <SubDiv>
              <HorizontalDivs>
                <TextName>{review.id}</TextName>
                <TextName>{review.user}</TextName>
                <Text3>{new Date(review.createdDate).toLocaleString()}</Text3>
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
                <Text2>지인에게 추천 : {review.isRecommend ? 'O' : 'X'}</Text2>
                <HorizontalDivs>
                  <Text2> 공감 </Text2>
                  <IconButton
                    color="error"
                    aria-label="delete"
                    size="large"
                    onClick={() => {
                      handleToggleLike();
                      handleLikes();
                    }}>
                    {isLiked ? <Favorite /> : <FavoriteBorder />}
                  </IconButton>
                  {isLiked_org && <Text3>({review.likeCnt + (isLiked ? 0 : -1)})</Text3>}
                  {!isLiked_org && <Text3>({review.likeCnt + (isLiked ? 1 : 0)})</Text3>}
                </HorizontalDivs>
              </HorizontalDivs2>
            </SubDiv>
          </VerticalDivs2>
        </HorizontalTabDivs>
      </TabBox>
    </>
  );
};

const TabBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 300px;
  background: #fff9f9;
  border: 1px solid #ff603d;
  border-radius: 24px;
`;

const VerticalDivs1 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
`;

const VerticalDivs2 = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
`;

const HorizontalTabDivs = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

const HorizontalDivs = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    flex-basis: 50%;
  }
`;

const HorizontalDivs2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 100px;
`;

const SubDivStar = styled.div`margin 4px 30px;`;

const SubDiv = styled.div`margin 20px;`;

const Text1 = styled.div`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 38px;
  color: #290e08;
  text-align: center;
`;

const TextName = styled.span`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 38px;
  color: #0e0301;
  margin: 0px 20px;
`;

const Text2 = styled.div`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 38px;
  color: #0e0301;
`;

const Text3 = styled.span`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 38px;
  color: #94969b;
`;

const FireC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;
const Fire = styled.img`
  width: 32px;
`;
const FireB = styled.img`
  width: 100px;
`;

const StarRating: React.FC<{ label: string; rating: number }> = ({ label, rating }) => {
  return (
    <SubDivStar>
      <Text1>{label}</Text1>
      <FireC>
        {Array.from({ length: rating }).map((_, index) => (
          <Fire key={index} src="/firewood_fill.png" alt="Firewood_fill" />
        ))}
        {Array.from({ length: 5 - rating }).map((_, index) => (
          <Fire key={index} src="/firewood_empty.png" alt="Firewood_empty" />
        ))}
      </FireC>
    </SubDivStar>
  );
};

export default ReviewCard;

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
