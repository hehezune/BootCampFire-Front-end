import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import { Bold18px, Normal13px } from 'components/Board/styled';
import axios from 'axios';
import { Link, Params, useNavigate, useParams } from 'react-router-dom';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '600px',
  height: '600px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex', // flex 컨테이너로 설정합니다.
  flexDirection: 'column', // 세로 방향으로 아이템을 배치합니다.
  justifyContent: 'center', // 아이템을 수직 방향으로 가운데로 정렬합니다.
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 수직 방향으로 중앙 정렬합니다.
`;

const LineBreak = styled.div`
  margin: 10px 0; // 한 줄 띄웁니다.
`;

export const KakaoLoginRedirect = () => {
  const params: Readonly<Params<string>> | undefined = useParams();

  /**온클릭 이벤트
   * 카카오 로그인용 새창을 띄운다.
   */
  useEffect(() => {
    localStorage.clear();
    // localStorage.setItem('token', params.token);
    window.location.replace('/');
  }, []);

  return <></>;
};
const HorizontalLine = styled.hr`
  margin: 20px auto; // 선 위아래로 여백을 줍니다.
  border: 0;
  height: 1px;
  width: 375px;
  background-color: #000000; // 선의 색상을 지정합니다.
`;

const SocialImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img`
  margin: 10px auto; // 이미지를 컨테이너 안에서 가운데 정렬합니다.
`;

interface LoginModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = (props) => {
  const KakaoLoginAPI = `https://kauth.kakao.com/oauth/authorize?client_id=fef18571b5f45c6a318be7b9042c4997&redirect_uri=http://localhost:8080/oauth2/authorization/kakao&response_type=code`;
  const openKakaoLogin = () => {
    window.open(KakaoLoginAPI, '_self');
  };
  const socialImg = [
    {
      src: '/Kakao.png',
      width: '32px',
      height: '32px',
      comment: '카카오 로그인',
      // loginURL:
      //   'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=f21dc05c1cc5d570d69aa3c69b9f8a17&redirect_uri=http://localhost:3000/auth/kakao/callback',
      loginURL: 'http://localhost:8080/oauth2/authorization/kakao',
    },

    {
      src: '/Naver.png',
      width: '32px',
      height: '32px',
      comment: '네이버 로그인',
      loginURL:
        'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=qKQeuYnnrFkppfXuP7SC&state=STATE_STRING&redirect_uri=http://localhost:3000/auth/naver/callback',
    },
    {
      src: '/Google.png',
      width: '32px',
      height: '32px',
      comment: '구글 로그인',
      loginURL: 'http://localhost:3000/oauth2/authorization/google',
    },
  ];

  return (
    <div>
      <Modal
        open={props.isModalOpen}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <TextContainer>
            <Bold18px>로그인하기</Bold18px>
            <LineBreak />
            <Normal13px>소셜 로그인으로 로그인 할 수 있습니다.</Normal13px>
          </TextContainer>
          <HorizontalLine />
          <SocialImagesContainer>
            {socialImg.map((social) => (
              <a href={social.loginURL}>
                <Img src={social.src} alt="카카오 로그인" onClick={openKakaoLogin} />
              </a>
            ))}
          </SocialImagesContainer>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
