import React from "react";
import DropDownCategory from "../BoardList/DropDownCategory";
import {StyledDropdown, StyledLI} from '../styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { colors } from "constant/constant";
import styled from "styled-components";
import { Bold18px } from "../styled";

interface DropDownList {
    current: string;
    category : string[];
}

let dummyData : DropDownList = {
    current: "카테고리 선택",
    category : ["자유", "썸/연애", "헬스/스포츠", "스터디", "프로젝트", "IT", "고민",
            "질문", "부트캠프"], // 백에서 CAMP LIST 받아와야 하는 부분
}

function CategoryDropDown () {
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
            <StyledCategory onClick={e => setDropdownVisibility(!dropdownVisibility)}>
            {dropdownSelect}
                {!dropdownVisibility && <ArrowDropDownIcon sx={{color: colors.TEXT_LIGHT}}/>} 
                {dropdownVisibility && <ArrowDropUpIcon sx={{color: colors.TEXT_LIGHT}}/>} 
            </StyledCategory>
            <DropDownCategory visibility={dropdownVisibility} >
                <ul className="search-category"> 
                    {categoryList}
                </ul>
            </DropDownCategory>
        </StyledDropdown>
    )
}

// const StyledCategory = styled(StyledLI)`
// font-family: DM Sans;
// color: #0E0301;
// font-style: bold;
// font-weight: 700;
// margin: 0px;
// padding: 1px 0 0 0 ;
// `

const StyledCategory = styled(Bold18px)`
    flex-grow: 1;
    color: ${colors.TEXT_LIGHT};
    display: flex;
    align-items: center;
`

export default CategoryDropDown;