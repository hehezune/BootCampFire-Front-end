import axios from 'axios';
import ManageCard from 'components/Manager/ManageCard';

import { useEffect, useState } from 'react';
import { setBootcampInfo } from 'store/bootcampSimpleListSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

interface registBootCamp {
  img: string;
  id: number;
  nickname: string;
}
export default function Regist() {
  const [rows, setRows] = useState<registBootCamp[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/users/admin/permission/list`).then((res) => {
      setRows(res.data.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/bootcamps/names`).then((res) => {
      dispatch(setBootcampInfo({ list: res.data.data }));
    });
  }, []);

  return (
    <WrapperManageCardContainer className="Wrapper">
      <ManageCardContainer className="Container">
        {rows.map((row) => (
          <ManageCard id={row.id} img={row.img} nickname={row.nickname}></ManageCard>
        ))}
      </ManageCardContainer>
    </WrapperManageCardContainer>
  );
}
const WrapperManageCardContainer = styled.div`
  width: 100%;
  position: relative;
`;
const ManageCardContainer = styled.div`
  gap: 65px;
  width: 100%;
  top: 50px;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  align-items: center;
`;
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
function bootcampInfo(arg0: { bootcampId: any; bootcampName: any }): any {
  throw new Error('Function not implemented.');
}
