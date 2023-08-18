import MissionBar from 'components/VSGame/MissionBar';
import axios from 'axios';
import MissionData from 'components/VSGame/MissionData';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Bold18px } from 'components/Board/styled';
interface fastBootCampList {
  bootcampName: string;
  rank: number;
}
interface manyBootCampList {
  algoCnt: string;
  bootcampName: string;
  rank: number;
}
interface myFastBootCampList {
  bootcampName: string;
  rank: number;
}
interface myManyBootCampList {
  algoCnt: string;
  bootcampName: string;
  rank: number;
}
export default function MissionPage() {
  const initialMyFastData: myFastBootCampList = {
    bootcampName: '예비 부트캠프',
    rank: 0,
  };
  const initialMyManyData: myManyBootCampList = {
    algoCnt: '0',
    bootcampName: '예비 부트캠프',
    rank: 0,
  };
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [fastBootCamps, setFastBootCamps] = useState<fastBootCampList[]>([]);
  const [myFastBootCamps, setMyFastBootCamps] = useState<myFastBootCampList>(initialMyFastData);
  const [manyBootCamps, setManyBootCamps] = useState<manyBootCampList[]>([]);
  const [myManyBootCamps, setMyManyBootCamps] = useState<myManyBootCampList>(initialMyManyData);
  const accessToken = localStorage.getItem('Authorization');

  const [isFastInclude, setFastInclude] = useState('none');
  const [isManyInclude, setManyInclude] = useState('none');
  useEffect(() => {
    //이게 안뜸
    axios.get(`${process.env.REACT_APP_API_URL}/algorithms/algo-fifty`).then((res) => {
      setFastBootCamps(res.data.data);
    });

    axios.get(`${process.env.REACT_APP_API_URL}/algorithms/algo-many`).then((res) => {
      setManyBootCamps(res.data.data);
    });

    if (isLoggedIn) {
      // 이게 뜸
      axios
        .get(`${process.env.REACT_APP_API_URL}/algorithms/algo-fifty/my-rank`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          if (res.data.data.rank === -1) {
          } else {
            setMyFastBootCamps(res.data.data);
            if (myFastBootCamps.rank > 10) setFastInclude('');
          }
        });
      axios
        .get(`${process.env.REACT_APP_API_URL}/algorithms/algo-many/my-rank`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        })
        .then((res) => {
          setMyManyBootCamps(res.data.data);
          if (myManyBootCamps.rank > 10) setManyInclude('');
        });
    }
  }, []);
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '20px', gap: '30px'}}>
        <div>
          <MissionBar />
        </div>
        <div>
          <div style={{ display: 'flex' }}>
            <MissionData />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: '30px' }}>
        <span style={{ marginLeft: 'auto', marginRight: 'auto'}}>
          <Bold18px>가장 불을 먼저 점화시킨 부트 캠프</Bold18px>
          <div
            style={{
              marginTop: '20px',
              borderBottom: 'solid',
              marginLeft: 'auto',
              color: '#94969B',
              marginBottom: '20px',
            }}></div>
          <table>
            <tbody>
              {fastBootCamps.map((row) => (
                <tr key={row.rank}>
                  <td>{row.rank}</td>
                  <td>{row.bootcampName}</td>
                </tr>
              ))}
              <tr style={{ display: isFastInclude}}>
                <td>{myFastBootCamps.rank}</td>
                <td>{myFastBootCamps.bootcampName}</td>
              </tr>
            </tbody>
          </table>
        </span>
        <span style={{ marginLeft: 'auto', marginRight: 'auto'}}>
          <Bold18px>가장 많이 문제를 푼 부트 캠프</Bold18px>
          <div
            style={{
              marginTop: '20px',
              borderBottom: 'solid',
              marginLeft: 'auto',
              color: '#94969B',
            }}></div>
          <table>
            <tbody>
              {manyBootCamps.map((row) => (
                <tr key={row.rank}>
                  <td>{row.rank}</td>
                  <td>{row.bootcampName}</td>
                  <td>{row.algoCnt}</td>
                </tr>
              ))}
              <tr style={{ display: isManyInclude}}>
                <td>{myManyBootCamps.rank}</td>
                <td>{myManyBootCamps.bootcampName}</td>
                <td>{myManyBootCamps.algoCnt}</td>
              </tr>
            </tbody>
          </table>
        </span>
      </div>
    </div>
  );
}
