import React from "react";
import styled from "styled-components";
import { StyledPage } from "./styledPage";
import { Bold24px, Bold18px, Normal15px, LightBtn } from "components/Board/styled";
import { colors } from "constant/constant";
import StrongBtn from "components/StrongBtn";
// import BoardModifyHeader from "components/Board/BoardCreate/BoardCreateHeader";
import { StyledRightFlex } from "components/Board/styled";
import DateInfo from "components/Board/BoardList/DateInfo";
import A2 from "components/Board/Tag";
import { useLocation } from "react-router-dom";
// modify는 redux에서 받아온 데이터로 value의 초기값을 설정해주는 작업이 필요하다.
// 삭제하기 버튼을 눌렀을 경우, 바로 삭제로 넘어가는 것이 아니고 삭제 확인 버튼을 재활성화시켜 넘어간다
function BoardModifyPage() {
  // const {boardDetail, categoryId: number} = useLocation();
  const isDelete = false;
  return (
    <StyledPage>
      <StyledWrapperDiv>
        <StyledBoardHeader>
                {/* <StyledCategory>{categories[test]}</StyledCategory>
                <Title>{boardDetail.title}</Title>
                <WriterDiv>
                    <Normal15px as="span">{boardDetail.writer}</Normal15px>
                    <A2>{boardDetail.bootcamp}</A2>
                </WriterDiv>
                <WrapperDateInfo>
                    <DateInfo data={dateInfoProps}></DateInfo>
                    <LightBtn type="first" onClick={handlerEditBtn}>수정하기</LightBtn>}
                </WrapperDateInfo> */}
            </StyledBoardHeader>
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
const WrapperDateInfo = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledWrapperDiv = styled.div`
  border-bottom: 1px solid ${colors.TEXT_LIGHT};
`
const StyledButtonDiv = styled(StyledRightFlex)`
  width: 97%;
  margin: 10px auto;  
  gap: 18px;
`
const Title = styled(Bold24px)`
    flex-grow: 2.5;
`
const StyledBoardHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 97%;
    margin: auto;
    height: 100%;
`
// const WriterDiv = styled(StyledLeftFlex)`
//     flex-grow: 1;
// `

const StyledCategory = styled(Bold18px)`
    color: ${colors.PRIMARY};
    flex-grow: 1;

`
export default BoardModifyPage;