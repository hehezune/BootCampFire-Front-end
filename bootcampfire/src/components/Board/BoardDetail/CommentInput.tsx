import React, { useState } from "react";
import { colors } from "constant/constant";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import {StrongBtn, StyledRightFlex, Bold15px} from 'components/Board/styled';

import styled from "styled-components";
function CommentInput() {
    const [isChecked, setIsChecked] = useState(false);
    const handlerClickAnonymous = () => {
        setIsChecked(!isChecked);
    }

    return (
        <>
            <StyledInput type="textarea" placeholder='댓글을 작성해 주세요.'></StyledInput>
                <ButtonGroup>
                    {isChecked && 
                        <CheckCircleOutlineIcon 
                            sx={{color: colors.TEXT_LIGHT}}
                            onClick={handlerClickAnonymous}/>}
                    {!isChecked && 
                        <RadioButtonUncheckedIcon 
                            sx={{color: colors.TEXT_LIGHT}}
                            onClick={handlerClickAnonymous}/>}
                <AnonymousText>익명으로 작성하기</AnonymousText>
                <StrongBtn type="first">작성하기  
                    <CreateOutlinedIcon sx={{color: colors.WHITE}}/>
                </StrongBtn>
            </ButtonGroup> 
        </>
    )
}



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
export default CommentInput;