import { useState } from 'react';
import type { Comment, RequestComment, ResponseComment } from '../interface';
import {Normal13px, Normal15px, StyledLeftFlex, Bold15px, StyledRightFlex} from '../styled';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styled from 'styled-components';
import { colors } from 'constant/constant';
import { StrongBtn } from '../styled';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CommentCard from './CommentCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { useRef } from 'react';
// redux를 먼저 해볼것인가 아니면 더미데이터를 만들어서 일단 진행할 것인가
//


function Comments({boardId, comments}: {boardId: number, comments: Comment[]}) {
    const dispatch = useDispatch();
    const commentRef = useRef<HTMLInputElement>(null);
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

        // request용 객체 생성
        const newComment: RequestComment = {
            // id: 0,
            user: nickname,
            anonymous: isAnonymous,
            content: commentRef.current?.value ?? "",
            boardId
        }

        if (commentRef.current) {
            commentRef.current.value = '';
        }
        // 백으로 요청 보내기

        // 받은 객체를 response라고 가정
        const response: ResponseComment = {
            "id": 14,
            "boardId": 3,
            "user": "싸피2",
            "content": "2번째의 대댓",
            "anonymous": true,
            "ref": 2,
            "refOrder": 1,
        }

        // 아래 주석들은 데이터 갱신을 어떻게 할지에 대한 고민임.
        // // response를 commentList에 맞는 Comment 객체로 새로 생성
        // const resultComment = getComments(response, bootcamp[bootcampId]);
        // // ref 번호 현황에 따른 idx 지정
        // const idx = refCheck(comments, resultComment);
        // dispatch(addComment({comment: resultComment, idx: idx}))

        // 새로운 list 요청 : API 연결해서 확인하자
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
                <StyledInput 
                    type="textarea" 
                    placeholder='댓글을 작성해 주세요.'
                    ref= {commentRef}
                />
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

const getComments = (response: ResponseComment, bootcamp: string):Comment => { 
    const comment: Comment = {
        user: response.user,
        content: response.content,
        id: response.id,
        ref: response.ref,
        refOrder: response.refOrder,
        createdDate: [1],
        bootcamp: bootcamp
    }
    return comment;
}


const refCheck = (comments: Comment[], resultComment: Comment): number => {
    // if (comments[comments.length - 1].ref < resultComment.ref)

    return 1;
}
export default Comments;