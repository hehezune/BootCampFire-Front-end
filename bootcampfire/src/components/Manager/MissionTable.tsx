import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { LightBtn } from "components/Board/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { MissionModifyModal } from "./MissionModifyModal";

interface missionList {
  id: number;
  num: number;
  title: string;
  date: string;
}
export default function MissionTable() {
  const [rows, setRows] = useState<missionList[]>([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/algorithms/lists`)
      .then((res) => {
        setRows(res.data.data);
      });
  }, []);
  const [isMissionModifyModalOpen, setMissionModifyModalOpen] =
    React.useState(false);
  const [missionId, setMissionId] = useState(0);
  const [missionNum, setMissionNum] = useState(0);
  const [missionDate, setMissionDate] = useState("");
  const isManageModifyHandle = (id: number, num: number, date: string) => {
    setMissionId(id);
    setMissionNum(num);
    setMissionDate(date);
    console.log(id);
    console.log(num);
    console.log(date);
    setMissionModifyModalOpen(true);
  };

  // 모달을 닫기 위한 이벤트 핸들러를 만듭니다.
  const handleCloseModal = () => {
    setMissionModifyModalOpen(false);
  };

  const deleteAlgo = (id: number) => {
    // 새로고침 해야함
    axios
      .delete(`${process.env.REACT_APP_API_URL}/algorithms/${id}`)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, boxShadow: "none", minHeight: 450 }}
          aria-label="simple table"
        >
          <TableHead sx={{ borderBottom: "solid" }}>
            <TableRow>
              <TableCell align="center">날짜</TableCell>
              <TableCell align="center">문제번호</TableCell>
              <TableCell align="center">문제제목</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.num}</TableCell>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="right">
                  <LightBtn
                    type="first"
                    onClick={() =>
                      isManageModifyHandle(row.id, row.num, row.date)
                    }
                  >
                    수정
                  </LightBtn>
                  <LightBtn
                    type=""
                    style={{ marginLeft: "30px" }}
                    onClick={() => deleteAlgo(row.id)}
                  >
                    삭제
                  </LightBtn>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MissionModifyModal
        isMissionModifyModalOpen={isMissionModifyModalOpen}
        missionId={missionId}
        missionNum={missionNum}
        missionDate={missionDate}
        onClose={handleCloseModal}
      />
    </div>
  );
}
