import React from 'react';
import DropDownCategory from './DropDownCategory';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import styled from 'styled-components';
import { StyledDropdown, StyledLI} from './styled';

interface DropDownList {
    current: string;
    category : string[];
}

let dummyData : DropDownList = {
    current: "최신순",
    category : ["제목+내용", "작성자"],
}

function DropDown() {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
    const [dropdownSelect, setDropdownSelect] = React.useState(dummyData.current);
    const handleLiClick = (event: React.MouseEvent<HTMLLIElement>) => {
        console.log(dropdownSelect);
        setDropdownSelect(event.currentTarget.textContent ?? "");
        setDropdownVisibility(false);
    }

    const categoryList = dummyData.category.map((element) => (
        <StyledLI key={element} onClick={handleLiClick}>{element}</StyledLI>
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

export default DropDown;