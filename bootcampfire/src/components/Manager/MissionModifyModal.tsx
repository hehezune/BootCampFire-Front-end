import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { LightBtn, StrongBtn } from "components/Board/styled";
import React, { useState } from "react";

interface MissionModifyModalProps {
  isMissionModifyModalOpen: boolean;
  onClose: () => void;
  missionId: number;
  missionNum: number;
  missionDate: string;
}
interface TableRegistData {
  id: number;
  date: string;
  num: number;
}

interface MissionRegistData {
  id: number;
  num: number;
  date: string;
}

export const MissionModifyModal: React.FC<MissionModifyModalProps> = (
  props
) => {
  const initialMissionData: MissionRegistData = {
    id: props.missionId,
    date: props.missionDate,
    num: props.missionNum,
  };

  const [problemData, setProblemData] =
    useState<MissionRegistData>(initialMissionData);

  const onAccess = () => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/algorithms/${props.missionId}`, {
        date: problemData.date,
        num: problemData.num,
      })
      .then((res) => {
        setProblemData(res.data.data);
      });
    props.onClose();
  };
  // Sample data for the table

  const handleTextFieldChange = (
    columnKey: keyof MissionRegistData,
    value: string | number
  ) => {
    setProblemData((prevData) => ({
      ...prevData,
      [columnKey]: value,
    }));
  };

  return (
    <div>
      <Modal
        open={props.isMissionModifyModalOpen}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ borderBottom: "none" }}>
                    <TextField fullWidth variant="outlined" value="날짜" />
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none" }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      defaultValue={initialMissionData.date}
                      value={problemData.date}
                      onChange={(event) =>
                        handleTextFieldChange("date", event.target.value)
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: "none" }}>
                    <TextField fullWidth variant="outlined" value="문제 번호" />
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none" }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      defaultValue={initialMissionData.num}
                      value={problemData.num}
                      onChange={(event) =>
                        handleTextFieldChange("num", event.target.value)
                      }
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "20px",
              justifyContent: "right",
            }}
          >
            <LightBtn type="first" onClick={onAccess}>
              {"수정"}
            </LightBtn>
          </div>
        </div>
      </Modal>
    </div>
  );
};
