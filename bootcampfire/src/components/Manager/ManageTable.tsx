import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LightBtn } from 'components/Board/styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { bootcampInputResponse } from 'components/Board/interface';
import { useNavigate } from 'react-router-dom';

function createData(index: number, bootcamp: string, score: number, reviewCnt: number) {
  return { index, bootcamp, score, reviewCnt };
}

const rows = [
  // createData(1, 'SSAFY', 6.0, 24),
  // createData(2, 'boostcamp', 9.0, 37),
  // createData(3, 'UTC', 16.0, 24),
  // createData(4, '42Seoul', 3.7, 67),
  // createData(5, 'SAP', 16.0, 49),
  // createData(6, 'GOOGLE', 16.0, 49),
];

const API_KEY = "http://i9a408.p.ssafy.io:8080/bootcamps/"
const accessToken = localStorage.getItem('Authorization');
const header = {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
}

export default function ManageTable() {
  const [bootcampList, setBootcampList] = useState<bootcampInputResponse[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(API_KEY + "lists/names", header)
    .then((res) => {setBootcampList(res.data.data); console.log('부캠리스트', res)})
    .catch(err => console.log(err))
  },[])

  const handleEditBootcamp = (bootcampId: number, idx: number) => {
    navigate(`modify/${bootcampId}`);
  }

  const handleDeleteBootcamp = (bootcampId: number, idx: number) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return ;

    const delProcess = async () => {
      const delResponse = await axios.delete(API_KEY + bootcampId, header);
      // 관리자 페이지의 부트캠프 목록은 실시간성이 떨어지므로 요청을 통한갱신이 아닌 프론트 내 자체 데이터 처리
      // 삭제 실패했을 경우 try 처리 해줘야함
      const newBootcampList = [...bootcampList];
      newBootcampList.splice(idx, 1);
      setBootcampList(newBootcampList);
    }

    delProcess();
  }

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
          {bootcampList.map((element : bootcampInputResponse, idx :number) => (
            <TableRow key={element.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center">{idx + 1}</TableCell>
              <TableCell align="center">{element.name}</TableCell>
              <TableCell align="center">{isNaN(element.score) ? 0 : Math.round(element.score * 10) / 10}</TableCell>
              <TableCell align="center">{element.reviewCnt}</TableCell>
              <TableCell align="right">
                <LightBtn onClick={() => handleEditBootcamp(element.id, idx)} type="first">수정</LightBtn>
                <LightBtn onClick={() => handleDeleteBootcamp(element.id, idx)} type="" style={{ marginLeft: '30px' }}>
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
