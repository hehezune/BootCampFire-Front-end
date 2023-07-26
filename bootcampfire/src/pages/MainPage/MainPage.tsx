import styled from 'styled-components';
import CustomizedInputBase from '../../components/CustomizedInputBase'; // CustomizedInputBase 컴포넌트 import
import HotBoard from '../../components/MainPage/HotBoard';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function MainPage() {
  return (
    <div>
      <MainContainer>
        <h1>MainPage</h1>
        <CustomizedInputBase />
        <HotBoard />
      </MainContainer>
    </div>
  );
}
