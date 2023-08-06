import BootCampListPage from './BootCampPage/BootCampListPage';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { StyledPage } from "./BoardPage/styledPage";
import styled from "styled-components";
import { TextField } from "@mui/material";

import DropdownCategory from "components/Board/BoardList/DropDownCategory";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { StyledDropdown, Normal13px, StyledLI } from 'components/Board/styled';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "store";
import { selectDropBox, updateBootSearch } from "store/bootcampListSlice";

export default function BootCamp() {
  return (
    <>
      <Container>
        <HorizontalTabDivs>
          <SearchBar />
        </HorizontalTabDivs>
        <HorizontalTabDivs>
          <SortDropDown />
        </HorizontalTabDivs>
      </Container>
      <BootCampListPage />
    </>
  );
}

interface DropDownList {
  current: string;
  category : string[];
}

let dummyData : DropDownList = {
  current: "이름순",
  category : ["이름순", "평점순", "후기개수순"],
}

const SortDropDown = () => {
  const { dropBoxidx } = useSelector((state: RootState) => state.bootcamp);
  const dispatch = useDispatch();
  
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  const [dropdownSelect, setDropdownSelect] = React.useState(dummyData.current);
  const handleLiClick = (event: React.MouseEvent<HTMLLIElement>) => {
      dispatch(selectDropBox(event.currentTarget.textContent === "이름순" ? 0
      : event.currentTarget.textContent === "평점순" ? 1
      : event.currentTarget.textContent === "후기개수순" ? 2 : 0));
      setDropdownSelect(event.currentTarget.textContent ?? "");
      setDropdownVisibility(false);
  }
  return (
      <StyledDropdown>
          <Normal13px className="test" onClick={e => setDropdownVisibility(!dropdownVisibility)}>
              {dropdownSelect}
              {!dropdownVisibility && <KeyboardArrowDownIcon />} 
              {dropdownVisibility && <KeyboardArrowUpIcon />} 
          </Normal13px>
          <DropdownCategory visibility={dropdownVisibility} >
              <ul className="search-category">
                  {dummyData.category.map((element, idx) => 
                  <StyledLI key={element} onClick={handleLiClick}>{element}</StyledLI>)}
              </ul>
          </DropdownCategory>
      </StyledDropdown>
  );
};

const SearchBar = () => {
  const { bootSearch } = useSelector((state: RootState) => state.bootcamp);
  const dispatch = useDispatch();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateBootSearch(event.target.value));
  };

  return (
    <Paper
      component="form"
      sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,
        border: 3, borderColor: '#FF603D', borderRadius: 10, '& .MuiTextField-root': {
          flex: 1,},}}>
      <TextField
      sx={{ml: 3, "& fieldset": { border: 'none' },}}
      variant="standard" margin="normal"
      autoFocus
      onChange={handleSearchChange}
      placeholder="검색"
      value={bootSearch}
      InputProps={{disableUnderline: true, }}
      />          
    </Paper>
  );
};

const Container = styled(StyledPage)`
  display: flex;
  flex-direction: row;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  margin: 20px;
`;
const HorizontalTabDivs = styled.div`
display: flex; flex-direction: row; margin:10px 25px`;
