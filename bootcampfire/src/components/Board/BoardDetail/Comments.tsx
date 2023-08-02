import CommentCard from './CommentCard';
import type { Comment } from '../interface';
import {Normal13px, Normal15px, StyledLeftFlex, Bold15px, StyledRightFlex} from '../styled';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styled from 'styled-components';
import { colors } from 'constant/constant';
import StrongBtn from 'components/StrongBtn';
import CommentInput from './CommentInput';
// redux를 먼저 해볼것인가 아니면 더미데이터를 만들어서 일단 진행할 것인가
//


function Comments({data}: {data: Comment[]}) {

    const cardList = data.map((element) => 
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
                <CommentInput/>
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

export default Comments;