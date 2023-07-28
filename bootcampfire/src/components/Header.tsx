import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/authSlice';
import BasicModal from './Login/LoginModal';
import React from 'react';

const NavContainer = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
`;

const LogoLink = styled(Link)`
  img {
    margin-left: 100px;
    height: 50px;
    width: auto;
    margin-right: 300px;
  }
`;

const NavLink = styled(Link)`
  margin: 0 100px;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const ActionButton = styled.button`
  margin-left: 20px;
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
  margin-right: 20px;
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

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
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
    setModalOpen(true);
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
      <div>
        <LogoLink to="/">
          <img src="../logo.png" alt="" />
        </LogoLink>
        <NavLink to="/Board">Board</NavLink>
        <NavLink to="/BootCamp">BootCamp</NavLink>
        <NavLink to="/CampArticle">CampArticle</NavLink>
        <NavLink to="/VS">VS</NavLink>
        <WritePrimaryBtn to="/" onClick={handleWriteButtonClick}>
          글쓰기
        </WritePrimaryBtn>
        {isLoggedIn ? (
          <div>
            <span>로그인 되었습니다.</span>
            <ActionButton onClick={handleLogout}>로그아웃</ActionButton>
          </div>
        ) : (
          <ActionButton onClick={handleLogin}>로그인</ActionButton>
        )}
        {/* 모달 컴포넌트 */}
        <BasicModal isModalOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </NavContainer>
  );
}
