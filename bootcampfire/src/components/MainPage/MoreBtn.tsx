import { SetStateAction, useState } from 'react';
import { Link, To, useNavigate } from 'react-router-dom';
import { Normal13px } from 'components/Board/styled';
import { colors } from 'constant/constant';
import styled from 'styled-components';
const MoreBtn = (props: any) => {
  const navigate = useNavigate();
  const moreView = () => {
    navigate('/Board', { state: props.index });
  };
  return (
    <StyledNormal13px style={{ textDecorationLine: 'none'}} onClick={moreView}>
      더보기
    </StyledNormal13px>
  );
};

const StyledNormal13px = styled(Normal13px)`
  color: ${colors.TEXT_NORMAL} !important;
`

export default MoreBtn;
