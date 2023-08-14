import MainSearchInput from './MainSearchInput';
import styled from 'styled-components';
import {Bold21px} from 'components/Board/styled';

function MainSearchBar({activeTitle} : {activeTitle: boolean}) {
    return (
        <StyledSearchBar>
            { activeTitle &&
                <StyledBold21px>통합 검색</StyledBold21px>
            }
            <MainSearchInput />
        </StyledSearchBar>
    )
}

const StyledBold21px = styled(Bold21px)`
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

export default MainSearchBar;