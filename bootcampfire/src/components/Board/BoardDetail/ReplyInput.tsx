import { useRef } from "react";
import { colors } from "constant/constant";
import {LightBtn, StyledRightFlex, Bold15px} from 'components/Board/styled';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styled from "styled-components";

function CommentInput(props: {isAnonymous: boolean, handlerAnonymousBtn: () => void, handlerConfirmBtn: (input: string) => void}) {
    const replyRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <StyledInput type="textarea" placeholder='댓글을 작성해 주세요.' ref={replyRef}/>
            <ButtonGroup>
                                            {props.isAnonymous && 
                                <CheckCircleOutlineIcon 
                                sx={{color: colors.TEXT_LIGHT, fontSize: '18px'}}
                                onClick={props.handlerAnonymousBtn}/>}
                            {!props.isAnonymous && 
                                <RadioButtonUncheckedIcon 
                                sx={{color: colors.TEXT_LIGHT, fontSize: '18px'}}
                                onClick={props.handlerAnonymousBtn}/>}
                            <AnonymousText>익명으로 작성하기</AnonymousText>
                <LightBtn type="first" onClick={() => {
                    props.handlerConfirmBtn(replyRef.current?.value ?? "");
                }

                }>작성하기</LightBtn>
            </ButtonGroup> 
        </>
    )
}



const ButtonGroup = styled(StyledRightFlex)`
    position: absolute;
    top: 115px;
    right: 0px;
    margin-top: 14px;
    gap: 10px;
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
const AnonymousText = styled(Bold15px)`
    color: ${colors.TEXT_LIGHT};
    margin: 0 40px 0 0 ;
`
export default CommentInput;