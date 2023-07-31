import {Bold18px, Bold24px, Normal15px, StyledLeftFlex, Normal13px} from '../styled';
import { colors } from 'constant/constant';
import styled from 'styled-components';
import DateInfo from '../BoardList/DateInfo';
import A2 from '../Tag';
import type {Board} from '../interface';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface BoardDate {
    views: number;
    likes: number;
    comments: number;
    date: string;
}

let dummy1 : BoardDate = {
    views: 3,
    likes: 4,
    comments: 5,
    date: "20171717"
}

let dummy2 : Board = {
    boardId: 1, 
    title: "testTitle testTitle testTitle testTitle testTitle testTitle testTitle testTitle testTitle testTitle ",
    content: "testContent testContent testContent ",
    date: "20230725",
    likes: 3,
    comments: 3,
    views: 3,
    writer: "beom0109",
    camp: "SSAFY"
}
// Warpper~~ element 는 경계선 작업을 위함
// StyledBoardHeader 및 StyledBoardBody는 좌우 여백을 만들기 위함
function BoardDetailBody() {
    const isLike = false;
    return (
        <>
        <WrapperStyledBoardHeader>
            <StyledBoardHeader>
                <StyledCategory>카테고리명</StyledCategory>
                <Title>{dummy2.title}</Title>
                <WriterDiv>
                    <Normal15px as="span">{dummy2.writer}</Normal15px>
                    <A2>{dummy2.camp}</A2>
                </WriterDiv>
                <WrapperDateInfo>
                    <DateInfo data={dummy1}></DateInfo>
                </WrapperDateInfo>
            </StyledBoardHeader>
        </WrapperStyledBoardHeader>
        <WrapperStyledBoardBody>
        <StyledBoardBody>
            <Normal15px>{dummy2.content}</Normal15px>
            <LikeBtnGroup>
                {!isLike && <FavoriteBorderIcon/>}
                {isLike && <FavoriteIcon />}
                <Normal13px>좋아요</Normal13px>
            </LikeBtnGroup>
        </StyledBoardBody>
        </WrapperStyledBoardBody>
        </>
    )
}


const LikeBtnGroup = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
const StyledCategory = styled(Bold18px)`
    color: ${colors.PRIMARY};
    flex-grow: 1;

`
const Title = styled(Bold24px)`
    flex-grow: 2.5;
`
const WriterDiv = styled(StyledLeftFlex)`
    flex-grow: 1;
`


const WrapperDateInfo = styled.div`
    flex-grow: 1;
`

const WrapperStyledBoardHeader = styled.div`
    border-bottom: 1px solid ${colors.TEXT_LIGHT};
    height: 170px;
    
`
const StyledBoardHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 97%;
    margin: auto;
    height: 100%;
`

const WrapperStyledBoardBody = styled.div`
border-bottom: 1px solid ${colors.TEXT_LIGHT};

`

const StyledBoardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 97%;
    margin: auto;
    min-height: 350px;
`
export default BoardDetailBody;