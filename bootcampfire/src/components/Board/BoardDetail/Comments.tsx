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
import axios from 'axios';
import { getComments } from 'store/commentSlice';
import useGetHeader from 'constant/useGetHeader';
// redux를 먼저 해볼것인가 아니면 더미데이터를 만들어서 일단 진행할 것인가
//

function Comments({boardId, comments}: {boardId: number, comments: Comment[]}) {
    const header = useGetHeader();
    const dispatch = useDispatch();
    const commentRef = useRef<HTMLInputElement>(null);
    const [isAnonymous, setIsAnonymous] = useState(false);
    const {isLoggedIn, nickname, bootcampId, userId} = useSelector((state: RootState) => state.auth)
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
            userId,
            anonymous: isAnonymous,
            content: commentRef.current?.value ?? "",
            boardId
        }
        console.log(newComment.boardId, boardId)
        if (commentRef.current) {
            commentRef.current.value = '';
        }

        console.log(newComment)
        // 백으로 요청 보내기
        console.log("헤더 확인", header)
        axios.post(`${process.env.REACT_APP_API_URL}/comments`,
            newComment, header).then((res) => {
                if (res.data.message === "success") {
                    const accessToken = localStorage.getItem("Authorization");
                    axios.get(`${process.env.REACT_APP_API_URL}/comments/list/` + boardId)
                    .then((res) => {
                        const comments = res.data.data as Comment[];
                        dispatch(getComments({comments, boardId}));
                    });
                }
            })   }

    const cardList = comments.map((element, idx) => 
        <CommentCard data={element} boardId={boardId} key={element.id} idx={idx}/>
    )

    return (
        <>
            <WrapperCommentInputDiv>
                <CommentInputDiv>
                <StyledLeftFlex>
                    <Normal15px>댓글</Normal15px>
                    <Normal13px>{comments.length}</Normal13px>
                </StyledLeftFlex>
                <StyledInput 
                    type="textarea" 
                    placeholder='댓글을 작성해 주세요.'
                    ref= {commentRef}
                />
                <ButtonGroup>
                    {isAnonymous && 
                        <CheckCircleOutlineIcon 
                            sx={{color: colors.TEXT_LIGHT, fontSize: '18px'}}
                            onClick={handlerClickAnonymous}/>}
                    {!isAnonymous && 
                        <RadioButtonUncheckedIcon 
                            sx={{color: colors.TEXT_LIGHT, fontSize: '18px'}}
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
    height: 60px;
    margin: 10px auto;
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

// const getComments = (response: ResponseComment, bootcamp: string):Comment => { 
//     const comment: Comment = {
//         user: response.user,
//         content: response.content,
//         id: response.id,
//         ref: response.ref,
//         refOrder: response.refOrder,
//         createdDate: [1],
//         bootcamp: bootcamp
//     }
//     return comment;
// }


const refCheck = (comments: Comment[], resultComment: Comment): number => {
    // if (comments[comments.length - 1].ref < resultComment.ref)

    return 1;
}
export default Comments;