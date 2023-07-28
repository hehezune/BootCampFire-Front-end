import React from 'react';
import SearchInput from './SearchInput';
import SortDropDown from './SortDropDown';
import styled from 'styled-components';
import {Bold21px} from './styled';

function SearchBar() {
    return (
        <StyledSearchBar>
            <Bold21px>카테고리 이름</Bold21px>
            <SearchInput/>
            <SortDropDown />
        </StyledSearchBar>
    )
}

const StyledSearchBar = styled.div`
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;

export default SearchBar;