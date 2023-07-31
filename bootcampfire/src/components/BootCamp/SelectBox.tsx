import React from 'react';
import styled from "styled-components";
import SeletedTag from 'components/BootCamp/SeletedTag';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import {onoff_num, onoff_text, category_onoff} from '../../store/selectSlice';

const SelectBox: React.FC = () =>  {

  const { sel_lst, item_lst, category, tmp_lst } = useSelector((state: RootState) => state.select);
  const dispatch = useDispatch();

  const handleSeletedTagClick = (value: number) => {dispatch(onoff_num(value));};
  const handleCategoryToggle = (value: number) => {dispatch(category_onoff(value));};

  const CATEGORY: string[] = ["트랙", "온오프", "지역", "기타"];
  const OFFSET: number[] = [0,
                            item_lst.indexOf("온라인"),
                            item_lst.indexOf("서울"),
                            item_lst.indexOf("모집중"),
                            item_lst.length];

  return (
    <>
      <Container>
        {CATEGORY.map( (item_p, idx_p) => (
          <div >
            <NavItem onClick={() => handleCategoryToggle(idx_p)}>
            <span>{item_p}</span>
            <span style={{ textAlign: "center" }}>{category[idx_p] ? "△" : "▽"}</span>
            </NavItem>
            
            {category[idx_p] && <ItemBox>
            {item_lst.slice(OFFSET[idx_p], OFFSET[idx_p+1]).map((item, idx)=> (
              <SeletedTag text={item} isOn={sel_lst[OFFSET[idx_p]+idx]}  onClick={() => handleSeletedTagClick(OFFSET[idx_p]+idx)} />
            ))} 
            </ItemBox>}
          </div>
        ))}

        <NavItem>선택 항목</NavItem>
        <ItemBox>
          {tmp_lst.map((item, idx) => (
            <SeletedTag text={item} isOn={sel_lst[item_lst.indexOf(item)]} onClick={() => handleSeletedTagClick(item_lst.indexOf(item))} />
            ))}
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
