import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LightBtn } from 'components/Board/styled';

function createData(index: number, bootcamp: string, score: number, reviewCnt: number) {
  return { index, bootcamp, score, reviewCnt };
}

const rows = [
  createData(1, 'SSAFY', 6.0, 24),
  createData(2, 'boostcamp', 9.0, 37),
  createData(3, 'UTC', 16.0, 24),
  createData(4, '42Seoul', 3.7, 67),
  createData(5, 'SAP', 16.0, 49),
  createData(6, 'GOOGLE', 16.0, 49),
];

export default function ManageTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, boxShadow: 'none', minHeight: 450 }} aria-label="simple table">
        <TableHead sx={{ borderBottom: 'solid' }}>
          <TableRow>
            <TableCell align="center">번호</TableCell>
            <TableCell align="center">부트캠프</TableCell>
            <TableCell align="center">평점</TableCell>
            <TableCell align="center">후기수</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center">{row.index}</TableCell>
              <TableCell align="center">{row.bootcamp}</TableCell>
              <TableCell align="center">{row.score}</TableCell>
              <TableCell align="center">{row.reviewCnt}</TableCell>
              <TableCell align="right">
                <LightBtn type="first">수정</LightBtn>
                <LightBtn type="" style={{ marginLeft: '30px' }}>
                  삭제
                </LightBtn>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
