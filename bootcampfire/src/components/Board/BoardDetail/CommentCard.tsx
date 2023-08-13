import styled from "styled-components";
import A2 from "../Tag";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import type { Comment } from "../interface";
import {
  Bold15px,
  Normal15px,
  Normal13px,
  StyledSpaceBetween,
  StyledLeftFlex,
} from "../styled";
import { LightBtn } from "../styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors } from "constant/constant";
import { useState } from "react";
import ReplyInput from "./ReplyInput";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getComments, modifyComment } from "store/commentSlice";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import type { RootState } from "store";

const [NORMAL, REPLY, EDIT, DEL] = [0, 1, 2, 3];
const TEST_USERID = 1;

function CommentCard({
  data,
  boardId,
  idx,
}: {
  data: Comment;
  boardId: number;
  idx: number;
}) {
  const [activeInputType, setActiveInputType] = useState(NORMAL);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [editComment, setEditComment] = useState(data.content);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handlerEditComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditComment(event.target.value);
  };

  const handlerSetEditBtn = () => {
    setActiveInputType(EDIT);
  };

  const handlerCancelEditBtn = () => {
    setActiveInputType(NORMAL);
  };

  const handlerSetDelBtn = () => {
    setActiveInputType(DEL);
  };

  const handlerCancelDelBtn = () => {
    setActiveInputType(NORMAL);
  };

  const handlerConfirmDelBtn = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/comments/` + data.id)
      .then((res) =>
        axios
          .get(`${process.env.REACT_APP_API_URL}/comments/list/` + boardId)
          .then((res) =>
            dispatch(getComments({ comments: res.data.data, boardId }))
          )
      );
  };

  const handlerSetNormalBtn = () => {
    setActiveInputType(NORMAL);
  };

  const handlerSetReplyBtn = () => {
    setActiveInputType(REPLY);
  };

  const handlerClickAnonymous = () => {
    setIsAnonymous(!isAnonymous);
  };

  const handlerEditConfirmBtn = () => {
    // 익명 등 각종 정보는 상위에
    // 버튼이랑 인풋 버튼은 하위에 있음
    // 버튼을 눌렀을때 인풋 값을 상위로 넘기고 제출하는걸 원함
    // 결국 버튼을 눌렀을 때 상위로 넘기는 로직만 있으면 됨
    const requestEdit = {
      content: editComment,
      anonymous: isAnonymous,
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/comments/` + data.id, requestEdit)
      .then((res) => {
        dispatch(
          modifyComment({
            idx,
            content: res.data.data.content,
            anonymous: res.data.data.anonymous,
          })
        );
        setActiveInputType(NORMAL);
      });
    return;
  };

  const handlerReplySubmitBtn = (input: string) => {
    if (input.length === 0) {
      window.alert("입력하고눌르셈");
      return;
    }

    const replyComment = {
      anonymous: isAnonymous,
      boardId: boardId,
      content: input,
      preCommentId: data.id,
      userId: TEST_USERID,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/comments`, replyComment)
      .then((res) => {
        if (res.data.message === "success") {
          setActiveInputType(NORMAL);
          axios
            .get(`${process.env.REACT_APP_API_URL}/comments/list/` + boardId)
            .then((res) => {
              dispatch(
                getComments({
                  comments: res.data.data as Comment[],
                  boardId: boardId,
                })
              );
            });
        }
      });
  };

  return (
    <>
      <WrapperStyledCommentCard>
        <CommentCardContentsArea>
          {data.refOrder > 0 && (
            <ArrowForwardIcon sx={{ marginRight: 1, marginTop: 1 }} />
          )}
          <StyledCommentCard>
            <CommentWriter>
              <Bold15px>{isAnonymous ? "익명" : data.user}</Bold15px>
              <A2>{isAnonymous ? "익명 캠프 " : data.bootcamp}</A2>
              {data.isWriter && <Normal15px>작성자</Normal15px>}
              {activeInputType === EDIT && isAnonymous && (
                <CheckCircleOutlineIcon
                  sx={{ color: colors.TEXT_LIGHT }}
                  onClick={handlerClickAnonymous}
                />
              )}
              {activeInputType === EDIT && !isAnonymous && (
                <RadioButtonUncheckedIcon
                  sx={{ color: colors.TEXT_LIGHT }}
                  onClick={handlerClickAnonymous}
                />
              )}
              {activeInputType === EDIT && (
                <AnonymousText>익명으로 작성하기</AnonymousText>
              )}

              {/* 우측에 위치해야할 친구들 */}
              {isLoggedIn && data.isWriter && activeInputType === NORMAL && (
                <ModeEditOutlineOutlinedIcon onClick={handlerSetEditBtn} />
              )}
              {isLoggedIn && data.isWriter && activeInputType === NORMAL && (
                <CloseOutlinedIcon onClick={handlerSetDelBtn} />
              )}
              {data.isWriter && activeInputType === EDIT && (
                <CloseOutlinedIcon onClick={handlerCancelEditBtn} />
              )}
              {data.isWriter && activeInputType === DEL && (
                <LightBtn as="span" type="" onClick={handlerConfirmDelBtn}>
                  삭제 확인
                </LightBtn>
              )}
              {data.isWriter && activeInputType === DEL && (
                <LightBtn as="span" type="" onClick={handlerCancelDelBtn}>
                  삭제 취소
                </LightBtn>
              )}
            </CommentWriter>
            {activeInputType !== EDIT && (
              <CommentContents>{data.content}</CommentContents>
            )}
            {activeInputType === EDIT && (
              <StyledInput
                type="textarea"
                value={editComment}
                placeholder="댓글을 작성해 주세요."
                onChange={handlerEditComment}
              />
            )}
            {/* isWriter 반전 해제해야 함 */}

            <CommentLastDiv>
              <div className="height-center">
                <AccessTimeOutlinedIcon sx={{ fontSize: 13, marginRight: 1 }} />
                <Normal13px as="span">{data.createdDate}</Normal13px>
              </div>
              <div className="gap">
                {isLoggedIn && activeInputType === NORMAL && (
                  <LightBtn type="first" onClick={handlerSetEditBtn}>
                    수정하기
                  </LightBtn>
                )}
                {isLoggedIn && activeInputType === EDIT && (
                  <LightBtn type="" onClick={handlerSetNormalBtn}>
                    취소하기
                  </LightBtn>
                )}
                {activeInputType === NORMAL && (
                  <LightBtn type="" onClick={handlerSetReplyBtn}>
                    답글달기
                  </LightBtn>
                )}
                {activeInputType === EDIT && (
                  <LightBtn type="" onClick={handlerEditConfirmBtn}>
                    수정하기
                  </LightBtn>
                )}
              </div>
            </CommentLastDiv>
          </StyledCommentCard>
        </CommentCardContentsArea>
      </WrapperStyledCommentCard>
      {activeInputType === REPLY && (
        <WrapperStyledCommentCard>
          <CommentCardContentsArea>
            <ArrowForwardIcon sx={{ marginRight: 1, marginTop: 1 }} />
            <StyledCommentCard>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  height: 40,
                }}
              >
                <Bold15px className="test">
                  {isAnonymous === true ? "익명" : String(isLoggedIn)}
                </Bold15px>
                <A2>
                  {isAnonymous === true ? "익명 캠프" : String(isLoggedIn)}
                </A2>
                {isAnonymous && (
                  <CheckCircleOutlineIcon
                    sx={{ color: colors.TEXT_LIGHT }}
                    onClick={handlerClickAnonymous}
                  />
                )}
                {!isAnonymous && (
                  <RadioButtonUncheckedIcon
                    sx={{ color: colors.TEXT_LIGHT }}
                    onClick={handlerClickAnonymous}
                  />
                )}
                <AnonymousText>익명으로 작성하기</AnonymousText>
              </div>
              <ReplyInput
                handlerExitBtn={handlerSetNormalBtn}
                handlerConfirmBtn={handlerReplySubmitBtn}
              ></ReplyInput>
            </StyledCommentCard>
          </CommentCardContentsArea>
        </WrapperStyledCommentCard>
      )}
    </>
  );
}

const StyledCommentCard = styled.div`
  position: relative;
  width: 100%;
`;
const WrapperStyledCommentCard = styled.div`
  /* position: relative; */
  border-bottom: 1px solid ${colors.TEXT_LIGHT};
`;
const CommentCardContentsArea = styled.div`
  /* position: relative; */
  display: flex;
  height: 159px;
  width: 97%;
  margin: auto;
  .height-center {
    display: flex;
    align-items: center;
  }

  .gap {
    display: flex;
    gap: 20px;
  }
`;
const CommentWriter = styled(StyledLeftFlex)`
  position: absolute;
`;

const CommentContents = styled(Normal15px)`
  position: absolute;
  top: 40px;
`;
const AnonymousText = styled(Bold15px)`
  color: ${colors.TEXT_LIGHT};
  margin: 0 40px 0 0;
`;

const CommentLastDiv = styled(StyledSpaceBetween)`
  position: absolute;
  top: 115px;
`;

const StyledInput = styled.input`
  position: absolute;
  top: 40px;
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
`;
export default CommentCard;
