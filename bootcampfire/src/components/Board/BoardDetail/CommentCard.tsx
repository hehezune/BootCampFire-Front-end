import {Bold15px} from '../styled';
import styled from 'styled-components';
import A2 from '../Tag_Styled';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import type {Comment} from '../interface';

function CommentCard(props: Comment) {
    
    let isLogin = props.commentId % 2 == 0 ? true : false;
    const EditBtn = <A2 >수정하기</A2>;
    return (
        <StyledCommentCard>
            ifAnonymous 화살표
            <div>
                <div>
                    <Bold15px>닉네임</Bold15px>
                    <A2>camp</A2>
                </div>
                <div>
                    댓글내용
                </div>
                <div>
                    <div>
                        <AccessTimeOutlinedIcon />
                        210123
                    </div>
                    <div>
                        {isLogin && EditBtn}
                        
                        <A2 >답글 달기</A2>
                    </div>
                </div>
            </div>
        </StyledCommentCard>
    )
}

const StyledCommentCard = styled.div`
    border-bottom: 1px;
`

export default CommentCard;