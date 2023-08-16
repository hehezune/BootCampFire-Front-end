import MissionBar from '../../components/VSGame/MissionBar';
import axios from 'axios';
import MissionData from 'components/VSGame/MissionData';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
interface bootcampList {
  id: number;
  name: string;
}
interface fastBootCampList {
  algoCnt: string;
  bootcampName: string;
  rank: number;
}
interface manyBootCampList {
  algoCnt: string;
  bootcampName: string;
  rank: number;
}
interface myFastBootCampList {
  algoCnt: string;
  bootcampName: string;
  rank: number;
}
interface myManyBootCampList {
  algoCnt: string;
  bootcampName: string;
  rank: number;
}
export default function MissionPage() {
  const bootcampId = useSelector((state: RootState) => state.auth.bootcampId);
  const [bootcamps, setBootcamps] = useState<bootcampList[]>([]);
  const [fastBootCamps, setFastBootCamps] = useState<fastBootCampList[]>([]);
  const [myFastBootCamps, setMyFastBootCamps] = useState<myFastBootCampList>();
  const [manyBootCamps, setManyBootCamps] = useState<manyBootCampList[]>([]);
  const [myManyBootCamps, setMyManyBootCamps] = useState<myManyBootCampList>();
  const accessToken = localStorage.getItem('Authorization');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/bootcamps/lists/names`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setBootcamps(res.data.data);
      });

    axios.get(`${process.env.REACT_APP_API_URL}/algorithms/algo-fifty`).then((res) => {
      setFastBootCamps(res.data.data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/algorithms/algo-many`).then((res) => {
      setManyBootCamps(res.data.data);
    });
    axios
      .get(`${process.env.REACT_APP_API_URL}/algorithms/algo-fifty/my-rank`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setMyFastBootCamps(res.data.data);
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
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <h3 style={{ marginTop: '20px' }}>1</h3>
      <div style={{ display: 'flex' }}>
        <span>
          <MissionBar />
        </span>
        <span>
          <div style={{ display: 'flex' }}>
            <MissionData />
          </div>
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
          <table>
            <tbody>
              {fastBootCamps.map((row) => (
                <tr key={row.rank}>
                  <td>{row.rank}</td>
                  <td>{row.bootcampName}</td>
                  <td>{row.algoCnt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </span>
        <span style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <div>가장 많이 문제를 푼 부트 캠프</div>
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
            </tbody>
          </table>
        </span>
      </div>
    </div>
  );
}
