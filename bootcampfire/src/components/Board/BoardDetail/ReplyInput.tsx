import React, { useState } from "react";
import { colors } from "constant/constant";
import {LightBtn, StyledRightFlex, Bold15px} from 'components/Board/styled';

import styled from "styled-components";
function CommentInput(props: {handlerExitBtn: () => void, handlerConfirmBtn: () => void}) {
    const [isChecked, setIsChecked] = useState(false);
    const handlerClickAnonymous = () => {
        setIsChecked(!isChecked);
    }

    return (
        <>
            <StyledInput type="textarea" placeholder='댓글을 작성해 주세요.'></StyledInput>
            <ButtonGroup>
                <LightBtn type="" onClick={props.handlerExitBtn}>취소하기</LightBtn>
                <LightBtn type="first" onClick={props.handlerConfirmBtn}>작성하기</LightBtn>
            </ButtonGroup> 
        </>
    )
}



const ButtonGroup = styled(StyledRightFlex)`
    /* position: absolute;
    top: 90px; */
    right: 20px;
    margin-top: 14px;
    gap: 20px;
`
const StyledInput = styled.input`
    /* position: absolute;
    top: 40px; */
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