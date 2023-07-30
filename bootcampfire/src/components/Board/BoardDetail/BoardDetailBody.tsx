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
    title: "testTitle testContent testContent testContent",
    content: "testContent testContent testContent ",
    date: "20230725",
    likes: 3,
    comments: 3,
    views: 3,
    writer: "beom0109",
    camp: "SSAFY"
}

function BoardDetailBody() {
    const isLike = false;
    return (
        <>
        <WrapperStyledBoardHeader>
            <StyledBoardHeader>
            <StyledCategory>카테고리명</StyledCategory>
            <Title>글 제목</Title>
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

const StyledCategory = styled(Bold18px)`
    color: ${colors.PRIMARY};
    position: absolute;
    top: 10px;
`

const LikeBtnGroup = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled(Bold24px)`
    position: absolute;
    top: 50px;
`
const WriterDiv = styled(StyledLeftFlex)`
    position: absolute;
    top: 100px;
`
const WrapperStyledBoardHeader = styled.div`
    border-bottom: 1px solid ${colors.TEXT_LIGHT};
    height: 170px;
    
`
const StyledBoardHeader = styled.div`
    position: relative;
    width: 97%;
    margin: auto;
`


const WrapperDateInfo = styled.div`
    position: absolute;
    top: 140px;
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