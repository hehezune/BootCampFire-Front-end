import {Bold18px, Bold24px, Normal15px, StyledLeftFlex, Normal13px} from '../styled';
import { colors } from 'constant/constant';
import styled from 'styled-components';
import DateInfo from '../BoardList/DateInfo';
import A2 from '../Tag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { BoardDetail } from '../interface';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import axios from 'axios';
interface BoardDate {
    view: number;
    likeCnt: number;
    commentCnt: number;
    createdDate: string;
}

let data: BoardDetail = {
    "id": 1,
    "title": "유저 1의 자유게시판 글이당",
    "content": "이 글은 카테고리1의 자유게시판 글임",
    "bootcamp": "SSAFY",
    "writer": "싸피1",
    "isWriter": true,
    category: "자유",
    "commentCnt": 0,
    "likeCnt": 0,
    "view": 1,
    "isLike": false,
    "createdDate": [
      2023,
      7,
      31,
      13,
      54,
      1,
      212312000
    ]
}

// Warpper~~ element 는 경계선 작업을 위함
// StyledBoardHeader 및 StyledBoardBody는 좌우 여백을 만들기 위함
function BoardDetailBody({data}:{data: BoardDetail}) {
    const [likeData, setLikeData] = useState({isLike: data.isLike, likeCnt: data.likeCnt});
    const commentCnt = useSelector((state: RootState) => state.comment.commentCnt);
    const handlerLikeBtn = () => {
        // 백에 like 관련 요청 필요
        // if (likeData.isLike) {
        //     axios.post(`http://localhost:8080/likes/cancel/${data.boardId}`)
        //     .then((res) => setLikeData({isLike: false, likeCnt: res.data.likes}));
        // } else {
        //     axios.post(`http://localhost:8080/likes/${data.boardId}`)
        //     .then((res) => setLikeData({isLike: false, likeCnt: res.data.likes}));
        // }

        setLikeData({
            isLike: !likeData.isLike,
            likeCnt: !likeData.isLike === true? likeData.likeCnt + 1 :
                likeData.likeCnt - 1
        })
    }

    const dateInfoProps: BoardDate = {
        view: data.view,
        likeCnt: likeData.likeCnt,
        commentCnt: commentCnt,
        createdDate: data.createdDate.join('-'),
    }

    return (
        <>
        <WrapperStyledBoardHeader>
            <StyledBoardHeader>
                <StyledCategory>카테고리명</StyledCategory>
                <Title>{data.title}</Title>
                <WriterDiv>
                    <Normal15px as="span">{data.writer}</Normal15px>
                    <A2>{data.bootcamp}</A2>
                </WriterDiv>
                <WrapperDateInfo>
                    <DateInfo data={dateInfoProps}></DateInfo>
                </WrapperDateInfo>
            </StyledBoardHeader>
        </WrapperStyledBoardHeader>
        <WrapperStyledBoardBody>
        <StyledBoardBody>
            <Normal15px>{data.content}</Normal15px>
            <LikeBtnGroup>
                {!likeData.isLike && <FavoriteBorderIcon onClick={handlerLikeBtn}/>}
                {likeData.isLike && <FavoriteIcon onClick={handlerLikeBtn}/>}
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