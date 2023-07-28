import styled from 'styled-components';
import CustomizedInputBase from '../../components/CustomizedInputBase'; // CustomizedInputBase 컴포넌트 import
import HotBoard from '../../components/MainPage/HotBoard';
import Ranking from '../../components/MainPage/Ranking';
import LoveBoard from '../../components/MainPage/LoveBoard';
import FreeBoard from '../../components/MainPage/FreeBoard';
import ItBoard from '../../components/MainPage/ItBoard';
import BootCampBoard from '../../components/MainPage/BootCampBoard';
import QuestionBoard from '../../components/MainPage/QuestionBoard';
import WorryBoard from '../../components/MainPage/WorryBoard';
import StudyBoard from '../../components/MainPage/StudyBoard';
import HealthBoard from '../../components/MainPage/HealthBoard';
import ProjectBoard from '../../components/MainPage/ProjectBoard';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  left: 80px;
`;

const BoardDiv = styled.div`
  margin-left: 100;
`;

export default function MainPage() {
  return (
    <MainContainer>
      <BoardDiv>
        <h1>MainPage</h1>
        <CustomizedInputBase />
        <HotBoard />
        <table>
          <tbody>
            <tr>
              <td>
                <FreeBoard />
              </td>
              <td>
                <LoveBoard />
              </td>
            </tr>
            <tr>
              <td>
                <HealthBoard />
              </td>
              <td>
                <WorryBoard />
              </td>
            </tr>
            <tr>
              <td>
                <ProjectBoard />
              </td>
              <td>
                <StudyBoard />
              </td>
            </tr>
            <tr>
              <td>
                <QuestionBoard />
              </td>
              <td>
                <ItBoard />
              </td>
            </tr>
            <tr>
              <td>
                <BootCampBoard />
              </td>
            </tr>
          </tbody>
        </table>
      </BoardDiv>
      <Ranking />
    </MainContainer>
  );
}
