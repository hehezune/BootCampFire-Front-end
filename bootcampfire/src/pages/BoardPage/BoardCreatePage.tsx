import React from "react";
import styled from "styled-components";
import { StyledPage } from "./styledPage";
import { colors } from "constant/constant";
import StrongBtn from "components/StrongBtn";
import BoardCreateHeader from "components/Board/BoardCreate/BoardCreateHeader";
import { StyledRightFlex } from "components/Board/styled";

function BoardCreatePage() {
  return (
    <StyledPage>
      <StyledWrapperDiv>
        <BoardCreateHeader />
      </StyledWrapperDiv>
      <StyledWrapperDiv>
        <StyledInput  placeholder="글 내용을 입력하세요."/>
      </StyledWrapperDiv>
        <StyledButtonDiv>
          <StrongBtn type="first" hasIcon={true}>작성하기</StrongBtn>
        </StyledButtonDiv>
    </StyledPage>
  );
}

const StyledInput = styled.textarea`
  border: none;
  display: block;
  height: 40vh;
  margin: 10px auto;
  min-height: 200px;
  max-height: 450px;
  position: relative;
  width: 97%;

  &::placeholder {
    position: absolute;
    top: 10px;
    text-align: left;
    font-size: 18px;
    font-family: DM sans;
  }

  &:hover {
    background-color: ${colors.BACKGROUND_HOVER};
  }
`

const StyledWrapperDiv = styled.div`
  border-bottom: 1px solid ${colors.TEXT_LIGHT};
`
const StyledButtonDiv = styled(StyledRightFlex)`
  width: 97%;
  margin: 10px auto;

`
export default BoardCreatePage;