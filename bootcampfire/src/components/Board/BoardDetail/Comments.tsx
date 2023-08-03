import { useState } from 'react';
import type { Comment } from '../interface';
import {Normal13px, Normal15px, StyledLeftFlex, Bold15px, StyledRightFlex} from '../styled';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styled from 'styled-components';
import { colors } from 'constant/constant';
import { StrongBtn } from '../styled';
import CommentInput from './ReplyInput';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CommentCard from './CommentCard';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
// redux를 먼저 해볼것인가 아니면 더미데이터를 만들어서 일단 진행할 것인가
//

const getRef = (data: Comment[]) => {
    if (data.length === 0) {
        return 0;
    }
    return data[data.length - 1].ref + 1;
}

function Comments({boardId, comments}: {boardId: number, comments: Comment[]}) {
    const [isAnonymous, setIsAnonymous] = useState(false);
    const {isLoggedIn, nickname, bootcampId} = useSelector((state: RootState) => state.auth)
    const handlerClickAnonymous = () => {
        setIsAnonymous(!isAnonymous);
    }

    const handlerCreateComment = () => {
        if (!isLoggedIn) {
            console.log("로그인 plz");
            return ;
        }
        const newComment = {
            // id: 0,
            user: nickname,
            anonymous: isAnonymous,
            content: "",
            boardId
        }

        if (isAnonymous) {
            newComment.user = "익명";
            // newComment.
        }
    }
    const cardList = comments.map((element) => 
        <CommentCard data={element} key={element.id}/>
    )

    return (
        <>
            <WrapperCommentInputDiv>
                <CommentInputDiv>
                <StyledLeftFlex>
                    <Normal15px>댓글</Normal15px>
                    <Normal13px>댓글 수</Normal13px>
                </StyledLeftFlex>
                <StyledInput type="textarea" placeholder='댓글을 작성해 주세요.'></StyledInput>
                <ButtonGroup>
                    {isAnonymous && 
                        <CheckCircleOutlineIcon 
                            sx={{color: colors.TEXT_LIGHT}}
                            onClick={handlerClickAnonymous}/>}
                    {!isAnonymous && 
                        <RadioButtonUncheckedIcon 
                            sx={{color: colors.TEXT_LIGHT}}
                            onClick={handlerClickAnonymous}/>}
                <AnonymousText>익명으로 작성하기</AnonymousText>
                <StrongBtn type="first" onClick={handlerCreateComment}>작성하기  
                    <CreateOutlinedIcon sx={{color: colors.WHITE}}/>
                </StrongBtn>
            </ButtonGroup> 
                </CommentInputDiv>
            </WrapperCommentInputDiv>
            {cardList}
        </>
    )
}

const WrapperCommentInputDiv = styled.div`
    border-bottom: 1px solid ${colors.TEXT_LIGHT};
    min-height: 140px;
`
const CommentInputDiv = styled.div`
    position: relative;
    width: 97%;
    margin: auto;
`
const ButtonGroup = styled(StyledRightFlex)`
    margin: 20px 0;
    gap: 10px;
`
const StyledInput = styled.input`
    display: block;
    width: 100%;
    height: 50px;
    margin: 0 auto;
    border-radius: 5px;
    border: 1px solid ${colors.TEXT_LIGHT};

    &::placeholder {
        padding-left: 10px;
    }

    &:focus {
        outline: none;
        border: 1.5px solid ${colors.PRIMARY};
    }
`
const AnonymousText = styled(Bold15px)`
    color: ${colors.TEXT_LIGHT};
    margin: 0 40px 0 0 ;
`
export default Comments;