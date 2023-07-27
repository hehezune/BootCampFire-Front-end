import React from 'react';
import DropDownCategory from './DropDownCategory';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styled from 'styled-components';
import {StyledDropdown} from './Styled';

interface DropDownList {
    current: string;
    category : string[];
}

let dummyData : DropDownList = {
    current: "최신순",
    category : ["최신순", "좋아요순", "조회수순"],
}

function DropDown() {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
    const [dropdownSelect, setDropdownSelect] = React.useState(dummyData.current);
    const handleLiClick = (event: React.MouseEvent<HTMLLIElement>) => {
        setDropdownSelect(event.currentTarget.textContent ?? "");
    }
    
    const categoryList = dummyData.category.map((element, idx) => 
        <li key={element} onClick={handleLiClick}>{element}</li>
    )

    return ( // 드롭다운을 따로 파일로 분리할 수 있는가? 분리한다면 styled, 분라하지 못한다면 styled를 어떻게 적용할 것인가?
        <StyledDropdown>
            <div onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                {dropdownSelect}
                {!dropdownVisibility && <KeyboardArrowDownIcon />} 
                {dropdownVisibility && <KeyboardArrowUpIcon />} 
                
            </div>
            <DropDownCategory visibility={dropdownVisibility} >
                <ul className="search-category">
                    {categoryList}
                </ul>
            </DropDownCategory>
        </StyledDropdown>
    )
}

export default DropDown;