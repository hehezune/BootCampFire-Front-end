import React, { useState, ChangeEvent, FormEvent } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SearchDropDown from './SearchDropDown';
import { setKeyword } from 'store/searchSlice';
import { useDispatch } from 'react-redux';

interface DropDownList {
  current: number;
  category : string[];
}

let dummyData : DropDownList = {
  current: 0,
  category : ["제목+내용", "작성자"],
}

export default function InputSection() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  const [dropdownSelect, setDropdownSelect] = React.useState(dummyData.current);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setKeyword({keyword: searchTerm, type: dropdownSelect}));
    // 여기에서 검색 기능을 구현하거나 검색 결과를 처리합니다.
    console.log('Search term:', searchTerm);
    // 예를 들면, 검색 결과를 표시하는 함수를 호출하거나 검색 API를 호출할 수 있습니다.
    // 이 부분을 원하는 검색 기능으로 대체하시면 됩니다.
  };

  const handleLiClick = (idx: number) => {
    setDropdownSelect(idx);
    setDropdownVisibility(false);
}

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        border: 3,
        borderColor: '#FF603D',
        borderRadius: 10,
        boxShadow: 'none',
      }}
      onSubmit={handleSearchSubmit}>
      <SearchDropDown 
        visibility= {dropdownVisibility}
        searchType= {dropdownSelect}
        dropDownHandler= {handleLiClick}
        visibilityHandler = {setDropdownVisibility}
      />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="검색하세요"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}