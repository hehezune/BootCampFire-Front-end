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
} from '@mui/material';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { StrongBtn } from 'components/Board/styled';
import React, { useEffect, useState } from 'react';

interface MissionCreateModalProps {
  isMissionCreateModalOpen: boolean;
  onClose: () => void;
}

interface TableRegistData {
  date: string;
  num: number;
}

interface MissionRegistData {
  id: number;
  num: number;
  link: string;
  title: string;
  description: string;
  date: string;
}

export const MissionCreateModal: React.FC<MissionCreateModalProps> = (props) => {
  const onAccess = () => {
    try {
      axios
        .post(`${process.env.REACT_APP_API_URL}/algorithms`, {
          date: tableData.date,
          num: tableData.num,
        })
        .then((res) => {
          setProblemData(res.data.data);
        });
    } catch (error) {
      // console.log(error);
    }
    props.onClose();
  };

  // Sample data for the table
  const initialTableData: TableRegistData = {
    date: '',
    num: 0,
  };
  const initialMissionData: MissionRegistData = {
    id: 0,
    num: 0,
    link: '',
    title: '',
    description: '',
    date: '',
  };

  const [tableData, setTableData] = useState<TableRegistData>(initialTableData);
  const [problemData, setProblemData] = useState<MissionRegistData>(initialMissionData);

  const handleTextFieldChange = (columnKey: keyof MissionRegistData, value: string | number) => {
    setTableData((prevData) => ({
      ...prevData,
      [columnKey]: value,
    }));
  };

  return (
    <div>
      <Modal open={props.isMissionCreateModalOpen} onClose={props.onClose} aria-labelledby="modal-modal-title">
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '5px',
          }}>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none' }}>
                    <TextField fullWidth variant="outlined" value="날짜" />
                  </TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      value={tableData.date}
                      onChange={(event) => handleTextFieldChange('date', event.target.value)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none' }}>
                    <TextField fullWidth variant="outlined" value="문제 번호" />
                  </TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      value={tableData.num}
                      onChange={(event) => handleTextFieldChange('num', event.target.value)}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '20px',
              justifyContent: 'right',
            }}>
            <StrongBtn type={'first'} onClick={onAccess}>
              {'등록'}
            </StrongBtn>
          </div>
        </div>
      </Modal>
    </div>
  );
};
