import React from 'react';
import styled from 'styled-components';
import { colors } from 'constant/constant';
import { Bold15px } from './styled';
const A2 = ({children, type}: {children: string, type?:string | null}) => {
  return (
    <A2Container type={type}> {/* color 속성을 A2Container 컴포넌트로 전달 */}
      {children}
    </A2Container>
  );
};

export default A2;

const A2Container = styled(Bold15px)<{type?: string | null}>`
    padding: 0px 15px 0px 15px;
    /* gap: 5px; */
    display: inline-flex;
    justify-content: center;
    align-items: center;
    /* flex-shrink: 0; */
    /* height: 20px; */
    margin: 0px;
    background: #FFFFFF;
    border: 0.5px solid ${colors.BORDER_LIGHT};
    border-radius: 50px;
    line-height: 20px;
  
    /* color 속성이 전달되면 해당 색상으로 스타일 적용 */
    color: ${(props) => props.type};
  `;