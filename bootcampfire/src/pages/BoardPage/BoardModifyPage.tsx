import React from "react";
import styled from "styled-components";
import { StyledPage } from "./styledPage";
import { colors } from "constant/constant";
import StrongBtn from "components/StrongBtn";
import BoardModifyHeader from "components/Board/BoardCreate/BoardCreateHeader";
import { StyledRightFlex } from "components/Board/styled";

// modify는 redux에서 받아온 데이터로 value의 초기값을 설정해주는 작업이 필요하다.
// 삭제하기 버튼을 눌렀을 경우, 바로 삭제로 넘어가는 것이 아니고 삭제 확인 버튼을 재활성화시켜 넘어간다
function BoardModifyPage() {
  const isDelete = false;
  return (
    <StyledPage>
      <StyledWrapperDiv>
        <BoardModifyHeader />
      </StyledWrapperDiv>
      <StyledWrapperDiv>
        <StyledInput  placeholder="글 내용을 입력하세요."/>
      </StyledWrapperDiv>
        <StyledButtonDiv>
          <StrongBtn type="first">수정하기</StrongBtn>
          {!isDelete && <StrongBtn>삭제하기</StrongBtn>} 
          {isDelete && <StrongBtn>삭제 확인</StrongBtn>}
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
  gap: 18px;
`
export default BoardModifyPage;