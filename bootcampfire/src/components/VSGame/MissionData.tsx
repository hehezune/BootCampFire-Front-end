import axios from 'axios';
import { LightBtn } from 'components/Board/styled';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

interface missionData {
  id: number;
  num: number;
  link: string;
  title: string;
  description: string;
  date: string;
}

const MissionData = () => {
  const userId = useSelector((state: RootState) => state.auth.userId);
  const [algorithm, setAlgorithm] = useState<missionData>(Object);
  const accessToken = localStorage.getItem('Authorization');
  const isSolved = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/algorithms/${algorithm.num}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
      });
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/algorithms`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setAlgorithm(res.data.data);
      });
  }, []);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{algorithm.title}</td>
          </tr>
          <tr>
            <td>{algorithm.description}</td>
          </tr>
          <tr>
            <td>{algorithm.date}</td>
          </tr>
        </tbody>
      </table>
      <span>
        <a href={algorithm.link}>
          <LightBtn
            type="first"
            style={{
              marginTop: '20px',
              justifyContent: 'right',
              marginRight: 'auto',
            }}>
            알고리즘 풀러가기
          </LightBtn>
        </a>
      </span>
      <span>
        <LightBtn
          type=""
          style={{
            marginTop: '20px',
            justifyContent: 'right',
            marginRight: 'auto',
          }}
          onClick={isSolved}>
          알고리즘 풀었습니다!
        </LightBtn>
      </span>
    </div>
  );
};

export default MissionData;
