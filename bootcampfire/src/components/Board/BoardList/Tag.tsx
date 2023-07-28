import React from 'react';
import A2Container from './Tag_Styled';

interface A2Props {
  text: string;
  color?: string; // color 속성을 옵션으로 받음
}

const A2: React.FC<A2Props> = ({ text, color }) => {
  return (
    <A2Container color={color}> {/* color 속성을 A2Container 컴포넌트로 전달 */}
      {text}
    </A2Container>
  );
};

export default A2;