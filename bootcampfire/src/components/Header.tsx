import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import authSlice, { login, logout } from '../store/authSlice';
import BasicModal from './Login/LoginModal';
import React from 'react';
import { Bold21px } from './Board/BoardList/styled';

const NavContainer = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin: 'auto';
`;

const LogoLink = styled(Link)`
  img {
    margin-left: 5%;
    height: 50px;
    width: auto;
  }
`;

const NavLink = styled(Link)`
  margin-right: 5%;
  margin-left: 5%;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const ActionButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ffd0c1;
  border-radius: 4px;
  background-color: #ffffff;
  color: #000000;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const WritePrimaryBtn = styled(Link)`
  margin-left: 3%;
  margin-right: 3%;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #ff603d;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #1e7e34;
  }
`;

const HeaderContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LoginContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const nickname = useSelector((state: RootState) => state.auth.nickname); // nickname 정보를 가져옴
  const isAdmin = useSelector((state: RootState) => state.auth.isAdmin);
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleWriteButtonClick = () => {
    // 글쓰기 버튼 클릭 시, 로그인 여부 확인 후 적절한 경로로 이동
    if (isLoggedIn) {
      navigate('/write');
    } else {
      navigate('/login');
    }
  };

  const handleLogin = () => {
    // 모달 열기 함수
    // setModalOpen(true);
    dispatch(login({ nickname: '사용자123', email: 'user@example.com', isAdmin: true }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleCloseModal = () => {
    // 모달 닫기 함수
    setModalOpen(false);
  };

  return (
    <NavContainer>
      <div style={{ maxWidth: 1280, margin: 'auto' }}>
        <HeaderContentContainer>
          <LogoLink to="/">
            <img src="../logo.png" alt="Home" />
          </LogoLink>
          <NavLink to="/Board">
            <Bold21px as="span">Board</Bold21px>
          </NavLink>
          <NavLink to="/BootCamp">
            <Bold21px as="span">BootCamp</Bold21px>
          </NavLink>
          <NavLink to="/CampArticle">
            <Bold21px as="span">CampArticle</Bold21px>
          </NavLink>
          <NavLink to="/VS">
            <Bold21px as="span">VS</Bold21px>
          </NavLink>
          <WritePrimaryBtn to="/" onClick={handleWriteButtonClick}>
            글쓰기
          </WritePrimaryBtn>
          {isLoggedIn ? (
            <LoginContentContainer>
              <div style={{ display: 'flexBox' }}>
                <div>안녕하세요 {nickname}님</div>
                <div style={{ display: 'flexBox' }}>
                  {isAdmin ? (
                    <Link to={'/ManagerPage/ManagerPage'} style={{ color: '#94969B', textDecorationLine: 'none' }}>
                      관리자 페이지
                    </Link>
                  ) : (
                    <Link to={'/MyPage/MyPage'}>마이 페이지</Link>
                  )}
                  <div onClick={handleLogout} style={{ color: '#94969B' }}>
                    로그아웃
                  </div>
                </div>
              </div>
            </LoginContentContainer>
          ) : (
            <ActionButton onClick={handleLogin}>로그인</ActionButton>
          )}
        </HeaderContentContainer>
        {/* 모달 컴포넌트 */}
        <BasicModal isModalOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </NavContainer>
  );
}
