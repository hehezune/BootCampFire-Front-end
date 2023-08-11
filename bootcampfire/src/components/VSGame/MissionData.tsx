import axios from 'axios';
import { useEffect, useState } from 'react';

interface missionData {
  id: number;
  num: number;
  link: string;
  title: string;
  description: string;
  date: string;
}

const MissionData = () => {
  const [algorithm, setAlgorithm] = useState<missionData>(Object);
  useEffect(() => {
    axios.get('http://localhost:8080/algorithms').then((res) => {
      setAlgorithm(res.data.data);
    });
  }, []);
  return (
    <div>
      <table>
        <tbody>
          <td>{algorithm.id}</td>
          <td>{algorithm.num}</td>
          <td>{algorithm.link}</td>
          <td>{algorithm.title}</td>
          <td>{algorithm.description}</td>
          <td>{algorithm.date}</td>
        </tbody>
      </table>
    </div>
  );
};

export default MissionData;
