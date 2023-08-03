import styled from 'styled-components';
import React from 'react';

interface A2Props {
  text: string;
  color?: string; // color 속성을 옵션으로 받음
}

const Tag: React.FC<A2Props> = ({ text, color }) => {
  return (
    <A2Container color={color}>
      {text}
    </A2Container>
  );
};

export default Tag;

interface A2ContainerProps {
  color?: string; // color 속성을 옵션으로 받음
}
const A2Container = styled.div<A2ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  gap: 5px;
  height: 25px;
  background: #FFFFFF;
  border: 0.5px solid ${(props) => (props.color ? props.color : '#94969B')};
  border-radius: 15px;
  font-family: DM Sans;
  font-style: bold;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  /* color 속성이 전달되면 해당 색상으로 스타일 적용 */
  color: ${(props) => (props.color ? props.color : '#94969B')};
`;