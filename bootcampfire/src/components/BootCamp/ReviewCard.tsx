import styled from "styled-components";


const ReviewCard: React.FC<BootCampReviewProps> = ({review}) => {

    const testBtn  = () => {
        console.log("됨?");
    }
    return (
        <>
        <TabBox>
        <HorizontalDivs>
            <VerticalDivs>
                <SubDivStar>
                <FireC>
                <FireB src="/firewood_fill.png" alt="Firewood_fill" />
                    {/* {Array.from({ length: Math.floor(review.score) }).map((_, index) => (
                    <Fire key={index} src="/firewood_fill.png" alt="Firewood_fill" />))} */}
                </FireC>
                    <Text1>({review.score})</Text1>
                </SubDivStar>
                <SubDivStar>
                    <Text1>복지</Text1>
                    <FireC>
                    {Array.from({ length: review.back_up }).map((_, index) => (
                    <Fire key={index} src="/firewood_fill.png" alt="Firewood_fill" />))}
                    {Array.from({ length: 5 - review.back_up }).map((_, index) => (
                    <Fire key={index} src="/firewood_empty.png" alt="Firewood_empty" />))}
                    </FireC>
                </SubDivStar>
                <SubDivStar>
                    <Text1>분위기</Text1>
                    <FireC>
                    {Array.from({ length: review.mood }).map((_, index) => (
                    <Fire key={index} src="/firewood_fill.png" alt="Firewood_fill" />))}
                    {Array.from({ length: 5 - review.mood }).map((_, index) => (
                    <Fire key={index} src="/firewood_empty.png" alt="Firewood_empty" />))}
                    </FireC>
                </SubDivStar>
                <SubDivStar>
                    <Text1>운영진</Text1>
                    <FireC>
                    {Array.from({ length: review.management }).map((_, index) => (
                    <Fire key={index} src="/firewood_fill.png" alt="Firewood_fill" />))}
                    {Array.from({ length: 5 - review.management }).map((_, index) => (
                    <Fire key={index} src="/firewood_empty.png" alt="Firewood_empty" />))}
                    </FireC>
                </SubDivStar>
                <SubDivStar>
                    <Text1>커리큘럼</Text1>
                    <FireC>
                    {Array.from({ length: review.curriculum }).map((_, index) => (
                    <Fire key={index} src="/firewood_fill.png" alt="Firewood_fill" />))}
                    {Array.from({ length: 5 - review.curriculum }).map((_, index) => (
                    <Fire key={index} src="/firewood_empty.png" alt="Firewood_empty" />))}
                    </FireC>
                </SubDivStar>
                <SubDivStar>
                    <Text1>성장가능성</Text1>
                    <FireC>
                    {Array.from({ length: review.potential }).map((_, index) => (
                    <Fire key={index} src="/firewood_fill.png" alt="Firewood_fill" />))}
                    {Array.from({ length: 5 - review.potential }).map((_, index) => (
                    <Fire key={index} src="/firewood_empty.png" alt="Firewood_empty" />))}
                    </FireC>
                </SubDivStar>
            </VerticalDivs>
            <VerticalDivs>
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
                    <HorizontalDivs>
                        <Text2>지인에게 추천 : {review.is_recommend ? 'O' : 'X'}</Text2>
                    </HorizontalDivs>
                </SubDiv>
            </VerticalDivs>
        </HorizontalDivs>         
        </TabBox>
        </>
    )
}

const TabBox = styled.div`
box-sizing: border-box; width: 100%;
background: #FFF9F9; border: 1px solid #FF603D; border-radius: 24px;`;

const VerticalDivs = styled.div`
display: flex; flex-direction: column; width: 100%; margin: 15px`;

const HorizontalDivs = styled.div`
display: flex; flex-direction: row; & > div {flex-basis: 50%;}`;

const SubDivStar = styled.div`margin 12px 30px;`;

const SubDiv = styled.div`margin 30px;`;

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

