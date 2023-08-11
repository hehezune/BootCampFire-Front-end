import { LightBtn } from 'components/Board/styled';
import MissionBar from '../../components/VSGame/MissionBar';
import axios from 'axios';
import MissionData from 'components/VSGame/MissionData';
export default function MissionPage() {
  return (
    <div>
      <h3 style={{ marginTop: '20px' }}>캠프 이름</h3>
      <div style={{ display: 'flex' }}>
        <span>
          <img src="vsCampFire.png" alt="" />
          <MissionBar />
        </span>
        <span>
          <div style={{ display: 'flex' }}>여기에 알고리즘 들어감</div>
          <LightBtn type="first" style={{ marginTop: '20px', justifyContent: 'right', marginRight: 'auto' }}>
            문제 풀러 가기
          </LightBtn>
        </span>
      </div>
      <div style={{ display: 'flex' }}>
        <span style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <div>가장 불을 먼저 점화시킨 부트 캠프</div>
          <div
            style={{
              marginTop: '20px',
              borderBottom: 'solid',
              marginLeft: 'auto',
              color: '#94969B',
              marginBottom: '20px',
            }}></div>
          <MissionData />
        </span>
        <span style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <div>가장 많이 문제를 푼 부트 캠프</div>
          <div style={{ marginTop: '20px', borderBottom: 'solid', marginLeft: 'auto', color: '#94969B' }}></div>
        </span>
      </div>
    </div>
  );
}
