import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store'; // 변경된 부분
import { login, logout } from '../store/authSlice';

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
  margin: 0 100px; /* 여기에 간격을 조절할 수 있습니다 */
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

export default function Nav() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const handleWriteButtonClick = () => {
    // 글쓰기 버튼 클릭 시, 로그인 여부 확인 후 적절한 경로로 이동
    if (isLoggedIn) {
      navigate('/write');
    } else {
      navigate('/login');
    }
  };

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
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
            {/* 로그인 정보 표시 */}
            <span>로그인 되었습니다.</span>
            <ActionButton onClick={handleLogout}>로그아웃</ActionButton>
          </div>
        ) : (
          <ActionButton onClick={handleLogin}>로그인</ActionButton>
        )}
      </div>
    </NavContainer>
  );
}
