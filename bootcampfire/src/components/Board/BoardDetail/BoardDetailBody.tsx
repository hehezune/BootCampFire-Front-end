import {Bold18px, Bold24px, Normal15px, StyledLeftFlex, Normal13px, LightBtn} from '../styled';
import { colors } from 'constant/constant';
import styled from 'styled-components';
import DateInfo from '../BoardList/DateInfo';
import A2 from '../Tag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import type { BoardDetail } from '../interface';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { categories } from 'constant/constant';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useGetHeader from 'constant/useGetHeader';

// const accessToken = localStorage.getItem("Authorization");
// const header = {
//     headers: {
//         Authorization: `Bearer ${accessToken}`,
//     }
// }

interface BoardDate {
    view: number;
    likeCnt: number;
    commentCnt: number;
    createdDate: string;
}

// Warpper~~ element 는 경계선 작업을 위함
// StyledBoardHeader 및 StyledBoardBody는 좌우 여백을 만들기 위함
function BoardDetailBody({boardDetail, setLike}:{boardDetail: BoardDetail, setLike: React.Dispatch<React.SetStateAction<boolean>>}) {
    const header = useGetHeader();
    const commentCnt = useSelector((state: RootState) => state.comment.commentCnt);
    const categoryId = useLocation().state as number;
    const navigate = useNavigate();
    const [isDelete, setIsDelete] = useState(false);

    const handlerLikeBtn = () => {
        // 백에 like 관련 요청 필요
        if (boardDetail.isLike) {
            axios.post(`${process.env.REACT_APP_API_URL}/likes/cancel/${boardDetail.id}`, header)
            .then(({data}) => setLike(false));
        } else {
            axios.post(`${process.env.REACT_APP_API_URL}/likes/${boardDetail.id}`, header)
            .then((res) => {console.log(res.data.data.likes); setLike(true)});
        }
    }

    const handlerEditBtn = () => {
        navigate('/BoardModify', {state: {boardDetail, categoryId}});
    }

    const handlerDeleteBtn = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/boards/` + boardDetail.id, header)
        .then((res) => navigate(-1));
      }

    const dateInfoProps: BoardDate = {
        view: boardDetail.view,
        likeCnt: boardDetail.likeCnt,
        commentCnt: commentCnt,
        createdDate: boardDetail.createdDate,
    }

    return (
        <>
        <WrapperStyledBoardHeader>
            <StyledBoardHeader>
                <StyledCategory>{categories[categoryId]}</StyledCategory>
                <Title>{boardDetail.title}</Title>
                <WriterDiv>
                    <Normal15px as="span">{boardDetail.writer}</Normal15px>
                    <A2>{boardDetail.bootcamp}</A2>
                </WriterDiv>
                <WrapperDateInfo>
                    <DateInfo data={dateInfoProps}></DateInfo>
                    <div style={{display: 'flex', gap: '15px'}}>
                    {!boardDetail.isWriter && !isDelete &&
                        <LightBtn as="span" type="" onClick={handlerEditBtn}>수정하기</LightBtn>}
                    {!boardDetail.isWriter && !isDelete && 
                        <LightBtn as="span" type="" onClick={(event) => setIsDelete(true)}>삭제하기</LightBtn>}
                    {!boardDetail.isWriter && isDelete &&
                        <LightBtn as="span" type="first">정말 삭제하시겠습니까? 
                        </LightBtn>}
                    {!boardDetail.isWriter && isDelete &&
                        <StyledNormal15px as="span" onClick={handlerDeleteBtn}>네</StyledNormal15px>}
                    {!boardDetail.isWriter && isDelete &&
                        <StyledNormal15px as="span" onClick={(event) => setIsDelete(false)}>아니오</StyledNormal15px>}                    
                    </div>
                </WrapperDateInfo>
            </StyledBoardHeader>
        </WrapperStyledBoardHeader>
        <WrapperStyledBoardBody>
        <StyledBoardBody>
            <Normal15px>{boardDetail.content}</Normal15px>
            <LikeBtnGroup>
                {!boardDetail.isLike && <FavoriteBorderIcon onClick={handlerLikeBtn}/>}
                {boardDetail.isLike && <FavoriteTwoToneIcon onClick={handlerLikeBtn} sx={{color: colors.SECONDARY}}/>}
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
    gap: 5px;
    margin-bottom: 10px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`

const WrapperStyledBoardHeader = styled.div`
    padding-top: 10px;
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

const StyledNormal15px = styled(Normal15px)`
    margin: auto;
    &:hover {
        color: ${colors.SECONDARY};
        font-weight: 700;
    }
`

const WrapperStyledBoardBody = styled.div`
    margin: 10px 0;
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