import { colors } from "constant/constant";
import styled, {keyframes} from 'styled-components';

function SkeletonBootCampCard () {
    return (
        <StyledSkeletonBoardCard>
        <div>
        <StyledSkeletonImage/>
        </div>
        <FlexContainer style={{visibility: "hidden"}}>
            <SkeletonTitle/>
            <SkeletonContent/>
        </FlexContainer>
        <FlexContainer>
            <SkeletonTitle/>
            <SkeletonContent/>
        </FlexContainer>
        <FlexContainer style={{visibility: "hidden"}}>
            <SkeletonTitle/>
            <SkeletonContent/>
        </FlexContainer>
        <TagContainer>
            <SkeletonChip/>
            <SkeletonChip/>
            <SkeletonChip2/>
            <SkeletonChip/>
            <SkeletonChip2/>
            <SkeletonChip/>
            <SkeletonChip2/>
        </TagContainer>
        </StyledSkeletonBoardCard>
        
    )
}
const loadingAnimation = keyframes`
  0% {
    background-position: -100px;
  }
  100% {
    background-position: 100px;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  top: 100px;
  justify-content: space-between;
  width: 100%;

`;
const TagContainer = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: center;
padding-top:5px;
  gap: 5px;
`;

const WriterSpan = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Infodiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const SkeletonTitle = styled.div`
    height: 18px;
    width: 50%;
    background: linear-gradient(90deg, ${colors.BACKGROUND_MID} 20%, #fff6f6 60%, ${colors.BACKGROUND_MID} 80%);
    animation: ${loadingAnimation} 2s infinite;
`

const SkeletonInfodiv = styled.div`
    height: 15px;
    background: linear-gradient(90deg, ${colors.BACKGROUND_MID} 20%, #fff6f6 60%, ${colors.BACKGROUND_MID} 80%);
    animation: ${loadingAnimation} 2s infinite;
    
    width: 356px;
`
const SkeletonChip2 = styled.div`
    border-radius: 50px;
    width: 50px;
    height: 21px;
    background: linear-gradient(90deg, ${colors.BACKGROUND_MID} 20%, #fff6f6 60%, ${colors.BACKGROUND_MID} 80%);
    animation: ${loadingAnimation} 2s infinite;
`
const SkeletonChip = styled.div`
    border-radius: 50px;
    width: 74px;
    height: 21px;
    background: linear-gradient(90deg, ${colors.BACKGROUND_MID} 20%, #fff6f6 60%, ${colors.BACKGROUND_MID} 80%);
    animation: ${loadingAnimation} 2s infinite;
`
const SkeletonName = styled.div`
    background-color: ${colors.BORDER_LIGHT};
    width: 10%;
    height: 19px;
`

const SkeletonContent = styled.div`
    height: 18px;
    background-color: ${colors.PRIMARY};
    width: 10%;
    background: linear-gradient(90deg, ${colors.BACKGROUND_MID} 20%, #fff6f6 60%, ${colors.BACKGROUND_MID} 80%);
    animation: ${loadingAnimation} 2s infinite;

`
const StyledSkeletonImage = styled.div`
  background: linear-gradient(90deg, ${colors.BACKGROUND_MID} 20%, #fff6f6 60%, ${colors.BACKGROUND_MID} 80%);
    animation: ${loadingAnimation} 2s infinite;
  height: 100px;
  width: 200px;
  border-radius: 10px;
`

const StyledSkeletonBoardCard = styled.div`
  position: relative;
  width: 240px; 
  height: 270px;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`




export default SkeletonBootCampCard;