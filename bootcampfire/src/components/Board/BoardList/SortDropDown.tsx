import React from 'react';
import DropDownCategory from './DropDownCategory';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {StyledDropdown, Normal13px, StyledLI} from '../styled';

interface DropDownList {
    current: string;
    category : string[];
}

let dummyData : DropDownList = {
    current: "최신순",
    category : ["최신순", "좋아요순", "조회수순"],
}

function SortDropDown() {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
    const [dropdownSelect, setDropdownSelect] = React.useState(dummyData.current);
    const handleLiClick = (event: React.MouseEvent<HTMLLIElement>) => {
        setDropdownSelect(event.currentTarget.textContent ?? "");
        setDropdownVisibility(false);
    }
    
    const categoryList = dummyData.category.map((element, idx) => 
        <StyledLI key={element} onClick={handleLiClick}>{element}</StyledLI>
    )

    return (
        <StyledDropdown>
            <Normal13px className="test" onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                {dropdownSelect}
                {!dropdownVisibility && <KeyboardArrowDownIcon />} 
                {dropdownVisibility && <KeyboardArrowUpIcon />} 
            </Normal13px>
            <DropDownCategory visibility={dropdownVisibility} >
                <ul className="search-category">
                    {categoryList}
                </ul>
            </DropDownCategory>
        </StyledDropdown>
    )
}

export default SortDropDown;