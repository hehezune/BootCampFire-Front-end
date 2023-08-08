import React from 'react';
import SearchInput from './SearchInput';
import SortDropDown from './SortDropDown';
import styled from 'styled-components';
import {Bold21px} from '../styled';
import { categories } from 'constant/constant';
import { Board } from '../interface';
interface SearchProps {
    selectCategory: number;
    setBoardList: React.Dispatch<React.SetStateAction<Board[]>>
}

function SearchBar({selectCategory, setBoardList}: SearchProps) {
    return (
        <StyledSearchBar>
            <StyledCategoryName>{categories[selectCategory]}게시판</StyledCategoryName>
            <SearchInput />
            <SortDropDown />
        </StyledSearchBar>
    )
}

const StyledCategoryName = styled(Bold21px)`
    width: 180px;
    text-align: right;
`

const StyledSearchBar = styled.div`
    margin: 20px;
    /* flex-grow: 1; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;

export default SearchBar;