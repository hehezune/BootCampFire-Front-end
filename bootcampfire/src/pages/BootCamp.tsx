import BootCampListPage from './BootCampPage/BootCampListPage';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { StyledPage } from './BoardPage/styledPage';
import styled from 'styled-components';

import DropdownCategory from 'components/Board/BoardList/DropDownCategory';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { StyledDropdown, Normal13px, StyledLI } from 'components/Board/styled';

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

const Container = styled(StyledPage)`
  display: flex;
  flex-direction: row;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  margin: 20px;
`;
const HorizontalTabDivs = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 25px;
`;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 여기에서 검색 기능을 구현하거나 검색 결과를 처리합니다.
    console.log('Search term:', searchTerm);
    // 예를 들면, 검색 결과를 표시하는 함수를 호출하거나 검색 API를 호출할 수 있습니다.
    // 이 부분을 원하는 검색 기능으로 대체하시면 됩니다.
  };

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
      }}
      onSubmit={handleSearchSubmit}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="부트 캠프 검색"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

const SortDropDown = () => {
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  const [dropdownSelect, setDropdownSelect] = React.useState(dummyData.current);
  const handleLiClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setDropdownSelect(event.currentTarget.textContent ?? '');
    setDropdownVisibility(false);
  };

  const categoryList = dummyData.category.map((element, idx) => (
    <StyledLI key={element} onClick={handleLiClick}>
      {element}
    </StyledLI>
  ));

  return (
    <StyledDropdown>
      <Normal13px className="test" onClick={(e) => setDropdownVisibility(!dropdownVisibility)}>
        {dropdownSelect}
        {!dropdownVisibility && <KeyboardArrowDownIcon />}
        {dropdownVisibility && <KeyboardArrowUpIcon />}
      </Normal13px>
      <DropdownCategory visibility={dropdownVisibility}>
        <ul className="search-category">{categoryList}</ul>
      </DropdownCategory>
    </StyledDropdown>
  );
};

interface DropDownList {
  current: string;
  category: string[];
}

let dummyData: DropDownList = {
  current: '이름순',
  category: ['이름순', '평점순', '후기개수순'],
};
