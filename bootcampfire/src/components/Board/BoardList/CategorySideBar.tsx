import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { categories } from 'constant/constant';

interface CategorySideBarProps {
    selectCategory: number;
    onCategorySelect: (id: number) => void;
}

function CategorySideBar({selectCategory, onCategorySelect}: CategorySideBarProps) {

    const buttons = categories.map((element, idx) => 
        <StyledBtn 
            key={element} 
            $selected={idx === selectCategory ? true : false}
            onClick={() => onCategorySelect(idx)}>{element}</StyledBtn>
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
    min-width: 130px;
    width: 16%;
    max-width: 198px;
`

const StyledBtn = styled.button<{ $selected?: boolean; }>`
    outline-color: #FEE9E6;
    outline-style: solid;
    outline-width: 1px;
    border-radius: 10px;
    border-width: 0;
    background: ${props => props.$selected ? "#FEE9E6" : "#FFFFFF"};
    min-width: 130px;
    /* max-width: 198px; */
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