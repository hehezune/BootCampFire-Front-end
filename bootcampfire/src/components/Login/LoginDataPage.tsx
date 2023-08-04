import axios from 'axios';
import { LoginContentContainer } from 'components/Header';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Params, useNavigate, useParams } from 'react-router-dom';
import { RootState } from 'store';
import authSlice, { login, logout } from 'store/authSlice';

// import { NodeJS } from 'timers';


export default function LoginDataPage() {
  const dispatch = useDispatch();
  const nickname = useSelector((state: RootState) => state.auth.nickname); // nickname 정보를 가져옴
  const isAdmin = useSelector((state: RootState) => state.auth.isAdmin);
  const bootcampId = useSelector((state: RootState) => state.auth.bootcampId);
  // const params: Readonly<Params<string>> = useParams();
  
  const clientId = 'your_client_id';
const clientSecret = 'your_client_secret';
const authorizationCode = 'your_authorization_code';
const redirectUri = 'your_redirect_uri';

const tokenEndpoint = 'http://localhost:8080/oauth2/token';

const params = new URLSearchParams();
params.append('grant_type', 'authorization_code');
params.append('client_id', clientId);
params.append('client_secret', clientSecret);
params.append('code', authorizationCode);
params.append('redirect_uri', redirectUri);



  dispatch(login({ userId: 10, nickname: '사용자123', email: 'user@example.com', isAdmin: true, bootcampId: 1 }));
  useEffect(() => {
    axios.post(tokenEndpoint, params)
  .then(response => {

    // const accessToken = response.data.access_token;
    // const refreshToken = response.data.refresh_token;
    console.log(response);
  })
  .catch(error => {
    // 에러 처리
  });
    // console.log(params)
    // if(params.token) {
    //   localStorage.setItem("token", params.token);
    // }
    // axios
    //   .get('http://localhost:8080/users')
    //   .then((res) =>{
    //   console.log('Response:', res);
    //     dispatch(
    //       login({
    //         userId: res.data.id,
    //         nickname: res.data.nickname,
    //         email: res.data.email,
    //         isAdmin: true,
    //         bootcampId: res.data.bootcamp,
    //       })
    //     )}
    //   )
    //   .catch((error) => console.error('Error fetching user data:', error));
  }, []);
  // window.location.replace('/');
  return <div>h1</div>;
}
