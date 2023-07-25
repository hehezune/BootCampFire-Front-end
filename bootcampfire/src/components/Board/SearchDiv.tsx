import React from 'react';
import Dropdown from './DropDown';
import { SvgIcon } from '@mui/material';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';

interface DropDownList {
    current: String;
    category : String[];
}

let dummyData : DropDownList = {
    current: "최신순",
    category : ["최신순", "좋아요순", "조회수순"],
}

function SearchDiv() {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
    const categoryList = dummyData.category.map((element) => (
        <li>{element}</li>
    ))

    return (
        <>
            <div>
                <div onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                    {dummyData.current}
                    <ExpandMoreSharpIcon />
                </div>
                <Dropdown visibility={dropdownVisibility}>
                    <ul>
                        {categoryList}
                    </ul>
                </Dropdown>
                
            </div>
        </>
    )
}

export default SearchDiv;