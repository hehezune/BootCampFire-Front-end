import styled from 'styled-components';
import A2 from '../Tag';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import type {Comment} from '../interface';
import {Bold15px, Normal15px, Normal13px, StyledSpaceBetween, StyledLeftFlex} from '../styled';
import { LightBtn } from '../styled';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from 'constant/constant';
import { useState } from 'react';
import ReplyInput from './ReplyInput';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, modifyComment } from 'store/commentSlice';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import type { RootState } from 'store';
import useGetHeader from 'constant/useGetHeader';
import useCheckTextLength from 'constant/useCheckTextLength';

const [NORMAL, REPLY, EDIT, DEL] = [0, 1, 2, 3];

function CommentCard({data, boardId, idx}: {data: Comment, boardId: number, idx: number}) {
    const checkTextLength = useCheckTextLength;
    const header = useGetHeader();
    const [activeInputType, setActiveInputType] = useState(NORMAL)
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [editComment, setEditComment] = useState(data.content);
    const {isLoggedIn, userId, nickname, bootcampName, isAdmin} = useSelector((state: RootState) => state.auth);
    const {commentList} = useSelector((state: RootState) => state.comment);
    const dispatch = useDispatch();
    const handlerEditComment = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditComment(event.target.value);
    }

    const handlerSetEditBtn = () => {
        setActiveInputType(EDIT);
    }

    const handlerCancelEditBtn = () => {
        setActiveInputType(NORMAL);
    }

    const handlerSetDelBtn = () => {
        setActiveInputType(DEL);
    }

    const handlerCancelDelBtn = () => {
        setActiveInputType(NORMAL);
    }

    const handlerConfirmDelBtn = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/comments/` + data.id)
        .then((res) => axios.get(`${process.env.REACT_APP_API_URL}/comments/list/` + boardId)
            .then((res) => dispatch(getComments({comments: res.data.data, boardId}))));
    }

    const handlerSetNormalBtn = () => {
        setActiveInputType(NORMAL);
    }

    const handlerSetReplyBtn = () => {
        setActiveInputType(REPLY);
    }

    const handlerClickAnonymous = () => {
        setIsAnonymous(!isAnonymous);
    }

    const handlerEditConfirmBtn = () => {
        // 익명 등 각종 정보는 상위에
        // 버튼이랑 인풋 버튼은 하위에 있음
        // 버튼을 눌렀을때 인풋 값을 상위로 넘기고 제출하는걸 원함
        // 결국 버튼을 눌렀을 때 상위로 넘기는 로직만 있으면 됨
        const requestEdit = {
            content: editComment,
            anonymous: isAnonymous,
        }

        if (!checkTextLength(1, requestEdit.content)) {
            alert("내용을 254자 이내로 작성해주세요.");
            return ;
        }
        // console.log("이전", data)
        axios.put(`${process.env.REACT_APP_API_URL}/comments/` + data.id, requestEdit)
        .then((res) => {
            // console.log("이후", res)
            dispatch(modifyComment({idx,
            content: res.data.data.content,
            anonymous: res.data.data.anonymous}));
            setActiveInputType(NORMAL);
            setIsAnonymous(false);
            axios.get(`${process.env.REACT_APP_API_URL}/comments/list/` + boardId)
            .then((res) => {
                dispatch(getComments({comments:res.data.data, boardId}));
            })
            });
        return ;
    }

    const handlerReplySubmitBtn = (input : string) => {
        if (input.length === 0) {
            window.alert("댓글을 입력해주세요");
            return ;
        }

        const replyComment = {
            anonymous: isAnonymous,
            boardId: boardId,
            content: input,
            preCommentId: getIdByRef(data.ref, commentList),
            userId,
        }

        if (!checkTextLength(1, replyComment.content)) {
            alert("내용을 254자 이내로 작성해주세요.");
            return ;
        }
        
        axios.post(`${process.env.REACT_APP_API_URL}/comments`, replyComment, header)
        .then((res) => {
            if (res.data.message === "success") {
                setActiveInputType(NORMAL);
                setIsAnonymous(false);
                axios.get(`${process.env.REACT_APP_API_URL}/comments/list/` + boardId)
                .then((res) => {dispatch(getComments({comments: res.data.data as Comment[], boardId: boardId}))})
            }
        })
    }

    return (
        <>
        <WrapperStyledCommentCard>
            <CommentCardContentsArea>
            {data.refOrder > 0  && <ArrowForwardIcon sx={{marginRight: 1, marginTop: 1}}/>}
            <StyledCommentCard>
                <CommentWriter>
                    <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>

                    <Bold15px>{activeInputType === EDIT && isAnonymous ? "익명" : data.user}</Bold15px>
                    <A2>{activeInputType === EDIT && isAnonymous ? "익명의 캠프" : data.bootcamp}</A2>
                    {data.isWriter &&  <Normal15px style={{color: colors.PRIMARY}}>작성자</Normal15px>}
                    </div>
                    <div style={{display: 'flex', gap: '15px'}}>

                    {/* 우측에 위치해야할 친구들 */}
                    {data.user === nickname && activeInputType === NORMAL && <ModeEditOutlineOutlinedIcon onClick={handlerSetEditBtn} sx={{color: colors.TEXT_LIGHT}}/>}
                    {(isAdmin || data.user === nickname) && activeInputType === NORMAL && <CloseOutlinedIcon onClick={handlerSetDelBtn} sx={{color: colors.TEXT_LIGHT}}/>}
                    {data.user === nickname && activeInputType === EDIT && <CloseOutlinedIcon onClick={handlerCancelEditBtn} sx={{color: colors.TEXT_LIGHT}}/>}
                    {(isAdmin || data.user === nickname) && activeInputType === DEL && <LightBtn as="span" type="" onClick={handlerConfirmDelBtn}>삭제 확인</LightBtn>}
                    {(isAdmin || data.user === nickname) && activeInputType === DEL && <LightBtn as="span" type="" onClick={handlerCancelDelBtn}>삭제 취소</LightBtn>}
                    </div>

                </CommentWriter>
                {activeInputType !== EDIT && <CommentContents>{data.content}</CommentContents>}
                {activeInputType === EDIT && <StyledInput 
                                type="textarea" 
                                value={editComment} 
                                placeholder='댓글을 작성해 주세요.'
                                onChange={handlerEditComment}
                                />}
                {/* isWriter 반전 해제해야 함 */}
                <CommentLastDiv>
                    <div className='height-center'>
                        <AccessTimeOutlinedIcon sx={{fontSize:13, marginRight: 1, margin: '0px 5px 0 0px'}}/>
                        <Normal13px as="span">{data.createdDate}</Normal13px>
                    </div>
                    <div className='gap'>
                        {activeInputType === EDIT && isAnonymous && 
                            <CheckCircleOutlineIcon 
                                sx={{color: colors.TEXT_LIGHT, fontSize: '18px'}}
                                onClick={handlerClickAnonymous}/>
                        }
                        {activeInputType === EDIT && !isAnonymous && 
                            <RadioButtonUncheckedIcon 
                                sx={{color: colors.TEXT_LIGHT, fontSize: '18px'}}
                                onClick={handlerClickAnonymous}/>
                        }
                        {activeInputType === EDIT && <AnonymousText>익명으로 작성하기</AnonymousText>}
                        {activeInputType === NORMAL && <LightBtn type="" onClick={handlerSetReplyBtn}>답글달기</LightBtn>}
                        {activeInputType === EDIT && <LightBtn type="" onClick={handlerEditConfirmBtn}>수정하기</LightBtn>}
                    </div>
                </CommentLastDiv>
            </StyledCommentCard>
            </CommentCardContentsArea>
        </WrapperStyledCommentCard>
        {activeInputType === REPLY && 
                <WrapperStyledCommentCard>
                    <CommentCardContentsArea>
                    <ArrowForwardIcon sx={{marginRight: 1, marginTop: "13px"}}/>
                    <StyledCommentCard>
                        <div style={{position: "absolute", top: "10px", width: "100%", display: "flex", justifyContent: "space-between",alignItems: 'center',}}>
                            <div style={{display: 'flex',alignItems: 'center',  gap: 10, height: 30}}>
                                <Bold15px className="test">{isAnonymous === true ? "익명" : nickname}</Bold15px>
                                <A2>{isAnonymous === true ? "익명 캠프" : bootcampName}</A2>
                            </div>
                        <CloseOutlinedIcon onClick={handlerSetNormalBtn} sx={{color: colors.TEXT_LIGHT}}/>
                        </div>
                        <ReplyInput isAnonymous={isAnonymous} handlerAnonymousBtn={handlerClickAnonymous} handlerConfirmBtn={handlerReplySubmitBtn}></ReplyInput>
                    </StyledCommentCard>
                    </CommentCardContentsArea>
                </WrapperStyledCommentCard>
        }
        </>
    )
}

const StyledCommentCard = styled.div`
    position: relative;
    width: 100%;

`
const WrapperStyledCommentCard = styled.div`
    /* position: relative; */
    border-bottom: 1px solid ${colors.TEXT_LIGHT};
`
const CommentCardContentsArea = styled.div`
    /* position: relative; */
    display: flex;
    height: 170px;
    width: 97%;
    margin: auto;
    .height-center {
        display: flex;
        align-items: center;
        height: 27px;
    }
    
    .gap {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
`
const CommentWriter = styled(StyledLeftFlex)`
    position: absolute;
    top: 10px;
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const CommentContents = styled(Normal15px)`
    position: absolute;
    top: 50px;
`
const AnonymousText = styled(Bold15px)`
    color: ${colors.TEXT_LIGHT};
    margin: 0 40px 0 0 ;
`

const CommentLastDiv = styled(StyledSpaceBetween)`
    position: absolute;
    top: 127px;
`

const StyledInput = styled.input`
    position: absolute;
    top: 50px;
    display: block;
    width: 100%;
    height: 60px;
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

const getIdByRef = (ref: number, commentList: Comment[]) => {
    for (const comment of commentList) {
        if (comment.ref === ref && comment.refOrder === 0) {
            return comment.id;
        }
    }
}

export default CommentCard;