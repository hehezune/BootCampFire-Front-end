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
    category : ["카테고리 선택", "자유", "썸/연애", "헬스/스포츠", "스터디", "프로젝트", "IT", "고민",
            "질문", "부트캠프"], // 백에서 CAMP LIST 받아와야 하는 부분
}

function CategoryDropDown ({selectCategory, onSelectCategory} : {selectCategory: number, onSelectCategory: React.Dispatch<React.SetStateAction<number>>}) {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    const handleLiClick = (idx: number) => {
        onSelectCategory(idx);
        setDropdownVisibility(false);
    }

    const categoryList = dummyData.category.map((element, idx) => (
        idx > 0 ? <StyledLI key={element} onClick={() => handleLiClick(idx)}>{element}</StyledLI> : ""
    ))

    return (
        <StyledDropdown>
            <StyledCategory onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                {dummyData.category[selectCategory]}
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