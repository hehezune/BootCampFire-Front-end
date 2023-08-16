import React from 'react';
import DropDownCategory from './DropDownCategory';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {StyledDropdown, Normal13px, StyledLI} from '../styled';
import { useDispatch } from 'react-redux';
import { setSort } from 'store/searchSlice';
import axios from 'axios';
import styled from 'styled-components';

interface DropDownList {
    current: number;
    category : string[];
}

let dummyData : DropDownList = {
    current: 0,
    category : ["최신순", "좋아요순", "조회수순"],
}

function SortDropDown() {
    const dispatch = useDispatch();
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
    const [dropdownSelect, setDropdownSelect] = React.useState(dummyData.current);
    const handleLiClick = (idx: number) => {
        setDropdownSelect(idx);
        setDropdownVisibility(false);
        dispatch(setSort({sort: idx}));
    }
    
    const categoryList = dummyData.category.map((element, idx) => 
        <StyledLI key={element} onClick={() => handleLiClick(idx)}>{element}</StyledLI>
    )

    return (
        <StyledSortDropdown>
            <Normal13px className="test" onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                {dummyData.category[dropdownSelect]}
                {!dropdownVisibility && <KeyboardArrowDownIcon />} 
                {dropdownVisibility && <KeyboardArrowUpIcon />} 
            </Normal13px>
            <DropDownCategory visibility={dropdownVisibility} >
                <ul className="search-category">
                    {categoryList}
                </ul>
            </DropDownCategory>
        </StyledSortDropdown>
    )
}

const StyledSortDropdown = styled(StyledDropdown)`
    position: absolute;
    left: calc(100% + 30px);
    width: 80px;
`

export default SortDropDown;