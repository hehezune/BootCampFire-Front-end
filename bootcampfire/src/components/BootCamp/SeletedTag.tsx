import styled from 'styled-components';
import React from 'react';

interface A2Props {
  text: string;
  isOn: boolean; 
  onClick?: () => void;
}

const SeletedTag: React.FC<A2Props> = ({ text, isOn, onClick  }) => {
  return (
    <A2Container isOn={isOn} onClick={onClick} >
      {text}
    </A2Container>
  );
};

export default SeletedTag;

interface A2ContainerProps {
    isOn: boolean;
}
const A2Container = styled.div<A2ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  gap: 5px;

  height: 25px;

  background: ${(props) => (props.isOn ?  '#FFF9F9' : '#FFFFFF')};
  border: 0.5px solid ${(props) => (props.isOn ?  '#0E0301' : '#94969B')};
  border-radius: 15px;

  font-family: DM Sans;
  font-weight: 700;
  font-style: bold;
  font-size: 13px;
  line-height: 25px;

  /* color 속성이 전달되면 해당 색상으로 스타일 적용 */
  color: ${(props) => (props.isOn ? '#0E0301' : '#94969B')};


`;
