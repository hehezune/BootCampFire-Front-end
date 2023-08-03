import axios from 'axios';
import { LoginContentContainer } from 'components/Header';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Params, useNavigate, useParams } from 'react-router-dom';
import { RootState } from 'store';
import authSlice, { login, logout } from 'store/authSlice';

export default function LoginDataPage() {
  const dispatch = useDispatch();
  const nickname = useSelector((state: RootState) => state.auth.nickname); // nickname 정보를 가져옴
  const isAdmin = useSelector((state: RootState) => state.auth.isAdmin);
  const bootcampId = useSelector((state: RootState) => state.auth.bootcampId);
  const params: Readonly<Params<string>> = useParams();

  dispatch(login({ userId: 10, nickname: '사용자123', email: 'user@example.com', isAdmin: true, bootcampId: 1 }));
  useEffect(() => {
    axios
      .get('http://localhost:8080/users')
      .then((res) =>
        dispatch(
          login({
            userId: res.data.id,
            nickname: res.data.nickname,
            email: res.data.email,
            isAdmin: true,
            bootcampId: res.data.bootcamp,
          })
        )
      )
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);
  window.location.replace('/');
  return <div>h1</div>;
}
