import React, { useState } from 'react';
import styled from "styled-components";
import Tag from './Tag';
import SeletedTag from './SeletedTag';


type VisibleState = {
    track: boolean;
    onOff: boolean;
    region: boolean;
    etc: boolean;
  };

const SelectBox: React.FC = () => {
  const [isVisible, setIsVisible] = useState<VisibleState>({
    track: false,
    onOff: false,
    region: false,
    etc: false,
  });

  const toggleVisibility = (itemName: keyof VisibleState) => {
    setIsVisible(prevState => ({
      ...prevState,
      [itemName]: !prevState[itemName],
    }));
  };
  

  return (
    <>
      <Container>
      <NavItem onClick={() => toggleVisibility('track')}>
          <span>트랙</span>
          <span style={{ textAlign: "center" }}>{isVisible.track ? "△" : "▽"}</span>
        </NavItem>
        {isVisible.track && <ItemBox>
            <SeletedTag text='백엔드' isOn={true} />
            
            <Tag text='풀스택' />
            <Tag text='임베디드' />
            <Tag text='프론트' />
            <Tag text='모바일' />                
        </ItemBox>}

        <NavItem onClick={() => toggleVisibility('onOff')}>
        <span>온오프</span>
          <span style={{ textAlign: "center" }}>{isVisible.onOff ? "△" : "▽"}</span>
        </NavItem>
        {isVisible.onOff && <ItemBox>
            <Tag text='온라인' />
            <Tag text='오프라인' />
            <Tag text='온/오프라인' />          
        </ItemBox>}

        <NavItem onClick={() => toggleVisibility('region')}>
        <span>지역</span>
          <span style={{ textAlign: "center" }}>{isVisible.region ? "△" : "▽"}</span>
        </NavItem>
        {isVisible.region && <ItemBox>
            <Tag text='서울' />
            <Tag text='서울' />
            <Tag text='서울' />
            <Tag text='서울' />
            <Tag text='서울' />
        </ItemBox>}

        <NavItem onClick={() => toggleVisibility('etc')}>
        <span>기타</span>
          <span style={{ textAlign: "center" }}>{isVisible.etc ? "△" : "▽"}</span>
        </NavItem>
        {isVisible.etc && <ItemBox>
            <Tag text='모집중' />
            <Tag text='코테 O' />
            <Tag text='비용 O' />
        </ItemBox>}

        <NavItem>
          선택 결과
        </NavItem>
        <div>내용</div>
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
