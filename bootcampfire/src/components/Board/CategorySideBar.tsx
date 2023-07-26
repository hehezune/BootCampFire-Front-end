import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const dummyData : string[] = ["자유", "썸/연애", "헬스/스포츠", "스터디", "프로젝트", "IT", "고민", "질문", "내 부트캠프"];

function CategorySideBar() {
    const [category, setCategory] = React.useState()

    const buttons = dummyData.map((element) => 
        <StyledBtn key={element} $selected={false}>{element}</StyledBtn>
    )

    return (
        <StyledBoardList>
            {buttons}
        </StyledBoardList>
    )
}

const StyledBoardList = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledBtn = styled.button<{ $selected?: boolean; }>`
    outline-color: #FEE9E6;
    outline-style: solid;
    outline-width: 1px;
    border-radius: 10px;
    border-width: 0;
    background: ${props => props.$selected ? "#FEE9E6" : "#FFFFFF"};
    width: 198px;
    height: 55px;
    color: #0E0301;
    font-family: DM Sans;
    font-size: 18px;
    font-style: bold;
    font-weight: 700;

    &:hover {
        background: #FEE9E6;
    }
`
export default CategorySideBar;