import axios from 'axios';
import ManageCard from 'components/Manager/ManageCard';
import { useEffect, useState } from 'react';

interface registBootCamp {
  img: string;
  id: number;
  nickname: string;
}
export default function Regist() {
  const [rows, setRows] = useState<registBootCamp[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/users/admin/permission/list`).then((res) => {
      setRows(res.data.data);
    });
  }, []);

  return (
    <div style={{ height: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          gap: 70,
          display: 'flex',
          flexWrap: 'wrap',
        }}>
        {rows.map((row) => (
          <ManageCard id={row.id} img={row.img} nickname={row.nickname}></ManageCard>
        ))}
      </div>
    </div>
  );
}
