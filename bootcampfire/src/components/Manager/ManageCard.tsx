import { Card } from '@mui/material';
import { LightBtn } from 'components/Board/styled';
import styled from 'styled-components';
import { styled as styled2 } from '@mui/material/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ManageModal } from './ManageModal';
interface CardProps {
  email: string;
  img: string;
  nickname: string;
  bootcamp: string;
}

const ManageCard = ({ email, img, nickname, bootcamp }: CardProps) => {
  const [isManageModalOpen, setManageModalOpen] = React.useState(false);
  const isManageModalHandle = () => {
    setManageModalOpen(true);
  };
  const handleCloseModal = () => {
    // 모달 닫기 함수
    setManageModalOpen(false);
  };
  return (
    <Card sx={{ height: '317px', width: '250px', boxShadow: 'none', display: 'block' }}>
      <img src={img} alt="" style={{ height: '252px' }} />
      <div style={{ display: 'flex', gap: '80' }}>
        <div>
          <span>닉네임: {nickname}</span>
          <div>부 캠: {bootcamp}</div>
        </div>
        <LightBtn type="first" onClick={isManageModalHandle}>
          상세 보기
        </LightBtn>
        <ManageModal isManageModalOpen={isManageModalOpen} onClose={handleCloseModal} />
      </div>
    </Card>
  );
};

export default ManageCard;
