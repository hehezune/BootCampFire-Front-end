import React from "react";
import styled from "styled-components";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Bold15px } from "../styled";
import { colors } from "constant/constant";
import CategoryDropDown from "./CategoryDropDown";
function BoardCreateHeader() {
    const isChecked = true;

    return (
        <StyledHeader>
            <CategoryDropDown></CategoryDropDown>
            <StyledTitleInput type="text" placeholder="글 제목을 작성하세요."/>
            <StyledAnonymousBtn>
                {isChecked && <CheckCircleOutlineIcon sx={{color: colors.TEXT_LIGHT}}/>}
                {!isChecked && <RadioButtonUncheckedIcon sx={{color: colors.TEXT_LIGHT}}/>}
                <AnonymousText>익명으로 작성하기</AnonymousText>
            </StyledAnonymousBtn>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    width: 97%;
    height: 180px;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

const AnonymousText = styled(Bold15px)`
    color: ${colors.TEXT_LIGHT};
    margin: 0 40px 0 0 ;
`
const StyledAnonymousBtn = styled.div`
    flex-grow: 2;
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 10px 0;
`
const StyledTitleInput = styled.input`
    width: 100%;
    height: 28px;
    margin: 0px auto;
    border: none;
    flex-grow: 2.5;
    &::placeholder{
        font-size: 24px;
        font-family: DM sans;
        font-style: bold;
    }

    &:hover {
        background-color: ${colors.BACKGROUND_HOVER};
    }
`
export default BoardCreateHeader;