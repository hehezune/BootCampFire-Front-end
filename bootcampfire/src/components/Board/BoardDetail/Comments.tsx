import CommentCard from './CommentCard';
import { commentListData } from '../Dummies';
import type { Comment } from '../interface';
import {Normal13px, Normal15px, StyledLeftFlex, Bold15px, StyledRightFlex} from '../styled';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styled from 'styled-components';
import { colors } from 'constant/constant';
import StrongBtn from '../StrongBtn';
// redux를 먼저 해볼것인가 아니면 더미데이터를 만들어서 일단 진행할 것인가
//


function Comments() {

    const isChecked = false;

    const cardList = commentListData.map((element) => 
        <CommentCard data={element} key={element.commentId}/>
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
                    {isChecked && <CheckCircleOutlineIcon sx={{color: colors.TEXT_LIGHT}}/>}
                    {!isChecked && <RadioButtonUncheckedIcon sx={{color: colors.TEXT_LIGHT}}/>}
                    <AnonymousText>익명으로 작성하기</AnonymousText>
                    <StrongBtn type="first" hasIcon={true}>작성하기</StrongBtn>
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