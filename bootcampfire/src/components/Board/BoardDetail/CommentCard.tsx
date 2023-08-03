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

const NORMAL = 0;
const REPLY = 1;
const EDIT = 2;

function CommentCard({data}: {data: Comment}) {
    const [activeInputType, setActiveInputType] = useState(NORMAL)
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [editComment, setEditComment] = useState(data.content);

    let isLogin = data.id % 2 == 0 ? true : false;

    const handlerEditComment = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditComment(event.target.value);
    }

    const handlerSetEditBtn = () => {
        setActiveInputType(EDIT);
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

    }

    return (
        <>
        <WrapperStyledCommentCard>
            <CommentCardContentsArea>
            {data.user === "익명" && <ArrowForwardIcon sx={{marginRight: 1, marginTop: 1}}/>}
            <StyledCommentCard>
                <CommentWriter>
                    <Bold15px>{data.user}</Bold15px>
                    <A2>{data.bootcamp}</A2>
                    {activeInputType === EDIT && isAnonymous && 
                        <CheckCircleOutlineIcon 
                            sx={{color: colors.TEXT_LIGHT}}
                            onClick={handlerClickAnonymous}/>
                    
                    }
                    {activeInputType === EDIT && !isAnonymous && 
                        <RadioButtonUncheckedIcon 
                            sx={{color: colors.TEXT_LIGHT}}
                            onClick={handlerClickAnonymous}/>

                    }
                    {activeInputType === EDIT && <AnonymousText>익명으로 작성하기</AnonymousText>}
                </CommentWriter>
                    {activeInputType !== EDIT && <CommentContents>{data.content}</CommentContents>}
                    {activeInputType === EDIT && <StyledInput 
                                    type="textarea" 
                                    value={editComment} 
                                    placeholder='댓글을 작성해 주세요.'
                                    onChange={handlerEditComment}
                                    />}
                <CommentLastDiv>
                    <div className='height-center'>
                        <AccessTimeOutlinedIcon sx={{fontSize:13, marginRight: 1}}/>
                        <Normal13px as="span">{data.createdDate}</Normal13px>
                    </div>
                    <div className='gap'>
                        {isLogin && activeInputType === NORMAL && <LightBtn type="first" onClick={handlerSetEditBtn}>수정하기</LightBtn>}
                        {isLogin && activeInputType === EDIT && <LightBtn type="" onClick={handlerSetNormalBtn}>취소하기</LightBtn>}
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
                    <ArrowForwardIcon sx={{marginRight: 1, marginTop: 1}}/>
                    <StyledCommentCard>
                        <div style={{display: 'flex', alignItems: 'center', gap: 10, height: 40}}>
                            <Bold15px className="test">{isAnonymous === true ? "익명" : String(isLogin)}</Bold15px>
                            <A2>{isAnonymous === true ? "익명 캠프" : String(isLogin)}</A2>
                            {isAnonymous && 
                                <CheckCircleOutlineIcon 
                                sx={{color: colors.TEXT_LIGHT}}
                                onClick={handlerClickAnonymous}/>}
                            {!isAnonymous && 
                                <RadioButtonUncheckedIcon 
                                sx={{color: colors.TEXT_LIGHT}}
                                onClick={handlerClickAnonymous}/>}
                            <AnonymousText>익명으로 작성하기</AnonymousText>
                        </div>
                        <ReplyInput handlerExitBtn={handlerSetNormalBtn} handlerConfirmBtn={handlerEditConfirmBtn}></ReplyInput>
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
    height: 159px;
    width: 97%;
    margin: auto;
    .height-center {
        display: flex;
        align-items: center;
    }
    
    .gap {
        display: flex;
        gap: 20px;
    }
    
`
const CommentWriter = styled(StyledLeftFlex)`
    position: absolute;
`

const CommentContents = styled(Normal15px)`
    position: absolute;
    top: 40px;
`
const AnonymousText = styled(Bold15px)`
    color: ${colors.TEXT_LIGHT};
    margin: 0 40px 0 0 ;
`

const CommentLastDiv = styled(StyledSpaceBetween)`
    position: absolute;
    top: 115px;
`

const StyledInput = styled.input`
    position: absolute;
    top: 40px;
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
export default CommentCard;