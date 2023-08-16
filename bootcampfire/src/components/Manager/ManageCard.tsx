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
import AWS from "aws-sdk"

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
}); 

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
  const [imageUrl, setImageUrl] = useState<string>("");
  useEffect(() => {
    const getImageUrl = async (name: string) => {
      const s3 = new AWS.S3();
      const params = {
        Bucket: process.env.REACT_APP_AWS_BUCKER || 'default-bucket-name',
        Key: `certifyCamp/${name}.png`,
      }
      console.log("경로확인", name)
      try {
        const res = await s3.getObject(params).promise();
        const blob = new Blob([res.Body as ArrayBuffer], { type: 'image/png' });
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } catch (error) {
        console.error('Error downloading file:', error);
      }
    }
    console.log("img 데이터 확인",img)
    getImageUrl(img);
  }, [])

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
        <img src={imageUrl} alt="" style={{ height: '252px', borderRadius: '20px' }} />
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
