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
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import axios from 'axios';

interface BoardDate {
    view: number;
    likeCnt: number;
    commentCnt: number;
    createdDate: string;
}


// Warpper~~ element 는 경계선 작업을 위함
// StyledBoardHeader 및 StyledBoardBody는 좌우 여백을 만들기 위함
function BoardDetailBody({boardDetail, setLike}:{boardDetail: BoardDetail, setLike: React.Dispatch<React.SetStateAction<boolean>>}) {
    const commentCnt = useSelector((state: RootState) => state.comment.commentCnt);
    const categoryId = useLocation().state as number;
    const navigate = useNavigate();
    const [isDelete, setIsDelete] = useState(false);

    const handlerLikeBtn = () => {
        // 백에 like 관련 요청 필요
        if (boardDetail.isLike) {
            axios.post(`http://localhost:8080/likes/cancel/${boardDetail.id}`)
            .then(({data}) => setLike(false));
        } else {
            axios.post(`http://localhost:8080/likes/${boardDetail.id}`)
            .then((res) => {console.log(res.data.data.likes); setLike(true)});
        }
    }

    const handlerEditBtn = () => {
        navigate('/BoardModify', {state: {boardDetail, categoryId}});
    }

    const handlerDeleteBtn = () => {
        axios.delete('http://localhost:8080/boards/' + boardDetail.id)
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
                    {/* 제대로 반영하고 나면 아래 반전 복원해줘야 함 */}
                    <div>
                    {!boardDetail.isWriter && !isDelete &&
                        <LightBtn as="span" type="" onClick={handlerEditBtn}>수정</LightBtn>}
                    {!boardDetail.isWriter && !isDelete && 
                        <LightBtn as="span" type="" onClick={(event) => setIsDelete(true)}>삭제</LightBtn>}
                    {!boardDetail.isWriter && isDelete &&
                        <LightBtn as="span" type="first">정말 삭제하시겠습니까? 
                        </LightBtn>}
                    {!boardDetail.isWriter && isDelete &&
                        <Normal15px as="span" onClick={handlerDeleteBtn}>네</Normal15px>}
                    {!boardDetail.isWriter && isDelete &&
                        <Normal15px as="span" onClick={(event) => setIsDelete(false)}>아니오</Normal15px>}                    
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