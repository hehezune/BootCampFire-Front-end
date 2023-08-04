import React from 'react';
import styled from "styled-components";
import SeletedTag from 'components/BootCamp/SeletedTag';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
// import {onoff_num, onoff_text, category_onoff} from '../../store/selectSlice';
import { initTrack, initRegion, 
          onoff_track, category_onoff } from 'store/selectSlice';
import axios from 'axios';

import { useEffect } from 'react';

// /bootcamps/regions

// /bootcamps/tracks

const SelectBox: React.FC = () =>  {

  // const { sel_lst, item_lst, category, tmp_lst } = useSelector((state: RootState) => state.select);
  const { trackList, regionList, category, trackBoolean } = useSelector((state: RootState) => state.select);
  const dispatch = useDispatch();

  const handleCategoryToggle = (value: number) => {dispatch(category_onoff(value));};

  useEffect(() => {
    axios.get(`http://localhost:8080/bootcamps/tracks`) 
      .then((response) => dispatch(initTrack(response.data.data)))
      .catch((error) => console.log(error.message));
    axios.get(`http://localhost:8080/bootcamps/regions`) 
      .then((response) => dispatch(initRegion(response.data.data)))
      .catch((error) => console.log(error.message));
  }, []);

  const handleSeletedTagClick = (value: number) => {dispatch(onoff_track(value))};
  console.log(trackList);


  return (
    <>
      <Container>
        <div>
          <NavItem onClick={() => handleCategoryToggle(0)}>
            <span>트랙</span>
            <span style={{ textAlign: "center" }}>{category[0] ? "△" : "▽"}</span>
          </NavItem>
          {category[0] && (
            <ItemBox>
              {trackList.map((item, idx) => (
                <SeletedTag text={item}
                  isOn={trackBoolean[idx]}  
                  onClick={() => handleSeletedTagClick(idx)}
                />
              ))}
            </ItemBox>
          )}
        </div>

        <NavItem>선택 항목</NavItem>
        <ItemBox>
          nothing
        </ItemBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #FF603D;
  border-radius: 20px;
  padding: 10px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14pt;
  position: relative;
  height: 50px;
  z-index: 1; /* Add this line to set z-index */

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: red;
    bottom: 0;
    left: 0;
    visibility: visible;
    transform: scaleX(1);
    transition: transform 0.2s ease-in-out;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const ItemBox = styled.div`
    flex-wrap: wrap;
    display: flex;
    padding : 10px;
    gap : 10px;
`;

export default SelectBox;
