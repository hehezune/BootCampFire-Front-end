import React from 'react';
import DropDownCategory from './DropDownCategory';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

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
        console.log(dropdownSelect);
        setDropdownSelect(event.currentTarget.textContent ?? "");
    }
    
    const categoryList = dummyData.category.map((element) => (
        <li key={element} onClick={handleLiClick}>{element}</li>
    ))

    return (
        <>
            <div>
                <div onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                    {!dropdownVisibility && <ArrowDropDownIcon />} 
                    {dropdownVisibility && <ArrowDropUpIcon />} 
                </div>
                <DropDownCategory visibility={dropdownVisibility}>
                    <ul>
                        {categoryList}
                    </ul>
                </DropDownCategory>
            </div>
        </>
    )
}

export default DropDown;