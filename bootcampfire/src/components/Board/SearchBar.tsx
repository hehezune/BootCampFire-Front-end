import React from 'react';
import SearchInput from './SearchInput';
import SortDropDown from './SortDropDown';
import styled from 'styled-components';
import {Bold21px} from './Styled';

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
    display: flex;
    justify-content: center;
`;

export default SearchBar;