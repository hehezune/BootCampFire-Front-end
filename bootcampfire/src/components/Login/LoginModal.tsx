import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Img = styled.img`
  height: auto;
  width: auto;
`;

const KakaoImgBtn = styled.button`
  height: auto;
  width: auto;
`;

interface BasicModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

const BasicModal: React.FC<BasicModalProps> = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 카카오 로그인을 위한 요청을 보냅니다.
      const response = await axios.get(
        "https://kauth.kakao.com/oauth/authorize",
        {
          params: {
            response_type: "code",
            client_id: "f21dc05c1cc5d570d69aa3c69b9f8a17",
            redirect_uri: "http://localhost:3000/auth/kakao/callback",
          },
        }
      );

      // 요청이 성공하면 로그인 상태로 변경합니다.
      dispatch(login());

      // 모달을 닫습니다.
      props.onClose();
    } catch (error) {
      // 요청이 실패하면 에러를 처리합니다.
      console.error(error);
    }
  };

  return (
    <div>
      <Modal
        open={props.isModalOpen}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h1">
            로그인 하기
          </Typography>
          <br />
          <Typography id="modal-middle-title" variant="h6" component="h3">
            소셜 로그인 및 이메일로 로그인 할 수 있습니다.
          </Typography>
          <hr />
          <KakaoImgBtn onClick={handleSubmit}>
            <Img src="/kakao_login_medium_wide.png" alt="Kakao Login" />
          </KakaoImgBtn>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
