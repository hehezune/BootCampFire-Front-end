import styled from 'styled-components';
import { StyledPage } from './styledPage';
import { StrongBtn, Bold15px } from 'components/Board/styled';
import { colors } from 'constant/constant';
import { useState } from 'react';
import axios from 'axios';
import { BoardDetail } from 'components/Board/interface';
// import BoardModifyHeader from "components/Board/BoardCreate/BoardCreateHeader";
import { StyledRightFlex } from 'components/Board/styled';
import { useNavigate, useLocation } from 'react-router-dom';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CategoryDropDown from 'components/Board/BoardCreate/CategoryDropDown';
// modify는 redux에서 받아온 데이터로 value의 초기값을 설정해주는 작업이 필요하다.
// 삭제하기 버튼을 눌렀을 경우, 바로 삭제로 넘어가는 것이 아니고 삭제 확인 버튼을 재활성화시켜 넘어간다
interface LocationState {
  boardDetail: BoardDetail;
  categoryId: number;
}

const TEST_USERID = 1;

function BoardModifyPage() {
  const navigate = useNavigate();
  const state = useLocation().state as LocationState;
  let [initAnonymous, initCategory, initTitle, initContent] = [false, 0, '', ''];

  if (state) {
    initAnonymous = state.boardDetail.isLike;
    initCategory = state.categoryId;
    initTitle = state.boardDetail.title;
    initContent = state.boardDetail.content;
  }

  const [isAnonymous, setIsAnonymous] = useState(initAnonymous);
  const [selectCategory, setSelectCategory] = useState<number>(initCategory);
  const [titleInput, setTitleInput] = useState(initTitle);
  const [contentInput, setContentInput] = useState(initContent);
  const [isDelete, setIsDelete] = useState(false);
  const handlerAnonymous = () => {
    setIsAnonymous(!isAnonymous);
  };

  const handlerSubmitBtn = () => {
    const requestBody = {
      anonymous: isAnonymous,
      categoryId: selectCategory,
      content: contentInput,
      title: titleInput,
      userId: TEST_USERID,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/boards`, requestBody)
      .then((res) => navigate('/BoardDetail/' + res.data.data.id, { state: selectCategory }));
  };

  const handlerDeleteConfirmBtn = () => {
    console.log(state.boardDetail.id);
    axios.delete(`${process.env.REACT_APP_API_URL}/boards/` + state.boardDetail.id).then((res) => navigate(-1));
  };

  return (
    <StyledPage>
      <StyledWrapperDiv>
        <StyledBoardHeader>
          <StyledHeader>
            <CategoryDropDown selectCategory={selectCategory} onSelectCategory={setSelectCategory}></CategoryDropDown>
            <StyledTitleInput
              type="text"
              placeholder="글 제목을 작성하세요."
              value={titleInput}
              onChange={(event) => setTitleInput(event.target.value)}
            />
            <StyledAnonymousBtn>
              {isAnonymous && <CheckCircleOutlineIcon sx={{ color: colors.TEXT_LIGHT }} onClick={handlerAnonymous} />}
              {!isAnonymous && (
                <RadioButtonUncheckedIcon sx={{ color: colors.TEXT_LIGHT }} onClick={handlerAnonymous} />
              )}
              <AnonymousText>익명으로 작성하기</AnonymousText>
            </StyledAnonymousBtn>
          </StyledHeader>
        </StyledBoardHeader>
      </StyledWrapperDiv>
      <StyledWrapperDiv>
        <StyledInput
          placeholder="글 내용을 입력하세요."
          value={contentInput}
          onChange={(event) => setContentInput(event.target.value)}
        />
      </StyledWrapperDiv>
      <StyledButtonDiv>
        <StrongBtn type="first" onClick={handlerSubmitBtn}>
          수정하기
        </StrongBtn>
        <StrongBtn type="">취소하기</StrongBtn>
        {!isDelete && (
          <StrongBtn type="" onClick={(event) => setIsDelete(true)}>
            삭제하기
          </StrongBtn>
        )}
        {isDelete && (
          <StrongBtn type="" onClick={handlerDeleteConfirmBtn}>
            삭제 확인
          </StrongBtn>
        )}
        {isDelete && (
          <StrongBtn type="" onClick={(event) => setIsDelete(false)}>
            아니오
          </StrongBtn>
        )}
      </StyledButtonDiv>
    </StyledPage>
  );
}
const StyledBoardHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  margin: auto;
  height: 100%;
`;
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
`;

const StyledWrapperDiv = styled.div`
  border-bottom: 1px solid ${colors.TEXT_LIGHT};
`;
const StyledButtonDiv = styled(StyledRightFlex)`
  width: 97%;
  margin: 10px auto;
`;

const StyledHeader = styled.div`
  width: 97%;
  height: 180px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const AnonymousText = styled(Bold15px)`
  color: ${colors.TEXT_LIGHT};
  margin: 0 40px 0 0;
`;
const StyledAnonymousBtn = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 10px 0;
`;
const StyledTitleInput = styled.input`
  width: 100%;
  height: 28px;
  margin: 0px auto;
  border: none;
  flex-grow: 2.5;
  &::placeholder {
    font-size: 24px;
    font-family: DM sans;
    font-style: bold;
  }

  &:hover {
    background-color: ${colors.BACKGROUND_HOVER};
  }
`;

export default BoardModifyPage;
