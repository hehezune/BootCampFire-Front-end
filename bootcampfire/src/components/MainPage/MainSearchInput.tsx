import React, { useState, ChangeEvent, FormEvent } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SearchDropDown from 'components/Board/BoardList/SearchDropDown';
import { useNavigate } from 'react-router-dom';
import { colors } from 'constant/constant';
import { Bold21px } from 'components/Board/styled';
import styled from 'styled-components';

interface DropDownList {
  current: number;
  category : string[];
}

let dummyData : DropDownList = {
  current: 0,
  category : ["제목+내용", "작성자"],
}

const StyledBold21px = styled(Bold21px)`
  position: absolute;
  right: calc(100% + 15px);
  width: 80px;
`

export default function MainSearchInput({activeTitle} : {activeTitle: boolean}) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  const [dropdownSelect, setDropdownSelect] = React.useState(dummyData.current);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    const searchType = dropdownSelect === 0 ? 'keywords' : 'nickname';
    navigate(`/mainSearch/${searchType}/${searchTerm}`);
  };

  const handleLiClick = (idx: number) => {
    setDropdownSelect(idx);
    setDropdownVisibility(false);
}

  return (
    <Paper
      component="form"
      sx={{
        // p: '2px 4px',
        margin: '40px auto',
        display: 'flex',
        alignItems: 'center',
        width: "85%",
        maxWidth: "700px",
        border: `2px solid ${colors.PRIMARY}`,
        height: "56px",
        borderRadius: 10,
        boxShadow: 'none',
        position: 'relative',
      }}
      onSubmit={handleSearchSubmit}>
      { activeTitle && <StyledBold21px>통합 검색</StyledBold21px> }
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
        <SearchIcon sx={{color: colors.PRIMARY, fontSize: "40px", marginRight: "5px"}}/>
      </IconButton>
    {/* </form> */}
    </Paper>
  );
}