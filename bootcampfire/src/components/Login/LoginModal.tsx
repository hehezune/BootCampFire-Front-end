import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const KakaoImg = styled.img`
  width: 200px;
  height: 50px;
`;

export default function BasicModal(props: { isModalOpen: boolean; onClose: () => void }) {
  return (
    <div>
      <Modal
        open={props.isModalOpen}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <KakaoImg src="../../../public/logo512.png" alt="Kakao Login" />
        </Box>
      </Modal>
    </div>
  );
}
