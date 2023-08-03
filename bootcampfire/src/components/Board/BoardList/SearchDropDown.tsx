import React from 'react';
import DropDownCategory from './DropDownCategory';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import styled from 'styled-components';
import { StyledDropdown, StyledLI} from '../styled';
import { useDispatch } from 'react-redux';
import { setType } from 'store/searchSlice';

interface DropDownList {
    current: number;
    category : string[];
}

let dummyData : DropDownList = {
    current: 0,
    category : ["제목+내용", "작성자"],
}

function SearchDropDown() {
    const dispatch = useDispatch();
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
    const [dropdownSelect, setDropdownSelect] = React.useState(dummyData.current);
    const handleLiClick = (idx: number) => {
        setDropdownSelect(idx);
        dispatch(setType({type: idx}));
        setDropdownVisibility(false);
    }

    const categoryList = dummyData.category.map((element, idx) => (
        <StyledLI key={element} onClick={() => handleLiClick(idx)}>{element}</StyledLI>
    ))

    return (
        <StyledDropdown>
            <div onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                {!dropdownVisibility && <ArrowDropDownIcon sx={{color: '#FF603D'}}/>} 
                {dropdownVisibility && <ArrowDropUpIcon sx={{color: '#FF603D'}}/>} 
            </div>
            <DropDownCategory visibility={dropdownVisibility} >
                <ul className="search-category">
                    {categoryList}
                </ul>
            </DropDownCategory>
        </StyledDropdown>
    )
}

export default SearchDropDown;