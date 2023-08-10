import { Card } from '@mui/material';
import { LightBtn, Normal13px } from 'components/Board/styled';
import styled from 'styled-components';
import { styled as styled2 } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ManageModal } from './ManageModal';
import { colors } from 'constant/constant';
import axios from 'axios';
import { RootState } from 'store';
interface CardProps {
  img: string;
  nickname: string;
  id: number;
}
interface bootCampList {
  bootcampId: number;
  bootcampName: string;
}
const ManageCard = ({ id, img, nickname }: CardProps) => {
  // 모달 열림 상태를 관리하는 변수를 만듭니다.
  const [isManageModalOpen, setManageModalOpen] = React.useState(false);

  // "상세 보기" 버튼을 클릭하면 모달을 열기 위한 이벤트 핸들러를 만듭니다.
  const isManageModalHandle = () => {
    setManageModalOpen(true);
  };

  // 모달을 닫기 위한 이벤트 핸들러를 만듭니다.
  const handleCloseModal = () => {
    setManageModalOpen(false);
  };
  return (
    <div>
      <Card sx={{ height: '317px', width: '250px', boxShadow: 'none', display: 'block' }}>
        {/* 이미지를 표시합니다. */}
        <img src={img} alt="" style={{ height: '252px', borderRadius: '20px' }} />
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '5px',
          }}>
          <div>
            {/* 닉네임과 부 캠 정보를 표시합니다. */}

            <div>
              <StyledBold13px as="span">닉네임: </StyledBold13px>
              <StyledNormal13px as="span">{nickname}</StyledNormal13px>
            </div>
          </div>
          {/* "상세 보기" 버튼을 만들고 클릭 이벤트에 모달을 열도록 합니다. */}
          <LightBtn type="first" onClick={isManageModalHandle}>
            상세 보기
          </LightBtn>
        </div>
      </Card>
      <ManageModal
        nickname={nickname}
        imgSrc={img}
        isManageModalOpen={isManageModalOpen}
        onClose={handleCloseModal}
        userId={id}
      />
    </div>
  );
};
const StyledBold13px = styled(Normal13px)`
  font-weight: 700;
  color: ${colors.TEXT_NORMAL} !important;
`;

const StyledNormal13px = styled(Normal13px)`
  color: ${colors.TEXT_NORMAL} !important;
`;
export default ManageCard;
