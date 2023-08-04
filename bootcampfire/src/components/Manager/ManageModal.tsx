import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Modal from '@mui/material/Modal';
import React from 'react';

interface ManageModalProps {
  isManageModalOpen: boolean;
  onClose: () => void;
  imgSrc: string;
  nickname: string;
}

export const ManageModal: React.FC<ManageModalProps> = (props) => {
  const onAccess = () => {
    props.onClose();
  };

  const onReject = () => {
    props.onClose();
  };
  const [bootcamp, setBootcamp] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setBootcamp(event.target.value as string);
  };
  // 모달 내용을 원하는 대로 수정하거나 추가해주세요.
  return (
    <div>
      <Modal open={props.isManageModalOpen} onClose={props.onClose} aria-labelledby="modal-modal-title">
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
          {/* 모달 내용을 추가합니다. */}
          <h2 id="modal-modal-title">{props.nickname}</h2>
          <img src={props.imgSrc} alt="" style={{ height: '500px', width: '550px' }} />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Bootcamp</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={bootcamp}
              label="Bootcamp"
              onChange={handleChange}>
              <MenuItem value={10}>SSAFY</MenuItem>
              <MenuItem value={20}>우아한 테크코스</MenuItem>
              <MenuItem value={30}>SOMA</MenuItem>
              <MenuItem value={40}>부스트 캠프</MenuItem>
              <MenuItem value={50}>42 서울</MenuItem>
              <MenuItem value={60}>멋쟁이 사자들</MenuItem>
            </Select>
          </FormControl>
          <button onClick={onAccess}>승인</button>
          <button onClick={onReject}>반려</button>
        </div>
      </Modal>
    </div>
  );
};
