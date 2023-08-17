import App from 'components/VSGame/G3/components/App/App';
import styled from 'styled-components';

import { RootState } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadGameRank, loadMyRank } from 'store/vsSlice';
import axios from 'axios';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function G2048() {
  const { GameRank10, myGameRank } = useSelector((state: RootState) => state.vs);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  // console.log(myGameRank, isLoggedIn)
  const dispatch = useDispatch();

  let flag = myGameRank.rank;
  useEffect(() => {
    const accessToken = localStorage.getItem('Authorization');

    setTimeout(() => {
      if (isLoggedIn) {
        // console.log("조건문 안에 있다.")
        axios
          .get(`${process.env.REACT_APP_API_URL}/games/my-rank`, {
            headers: { Authorization: `Bearer ${accessToken}` },
            withCredentials: true,
          })
          .then((response) => {
            dispatch(loadMyRank(response.data.data));
          });
        axios
          .get(`${process.env.REACT_APP_API_URL}/games`, {
            headers: { Authorization: `Bearer ${accessToken}` },
            withCredentials: true,
          })
          .then((response) => dispatch(loadGameRank(response.data.data)));
      }
    }, 1000);
  }, []);

  return (
    <div>
      <h1>VS</h1>

      <div style={{ display: 'flex', height: '100vh' }}>

      <span style={{ flex: '6',border: '3px solid orange',  margin:'30px'  }}>
            <App />
          </span>

        <span style={{ flex: '4', padding: '10px' }}>

          {GameRank10.length != 0 && (
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell align="right">Nick Name</TableCell>
                  <TableCell align="right">Bootcamp</TableCell>
                  <TableCell align="right">Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {GameRank10.map((row) => (
                  <TableRow
                  key={row.rank}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.rank}
                    </TableCell>
                    <TableCell align="right">{row.userNickname}</TableCell>
                    <TableCell align="right">{row.bootcampName}</TableCell>
                    <TableCell align="right">{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          )}
          </span>

      </div>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RankItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 10px; /* 아이템 간 간격을 위한 여백 설정 */
`;
