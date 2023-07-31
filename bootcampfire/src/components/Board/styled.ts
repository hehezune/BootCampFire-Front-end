import styled from 'styled-components';

export const BoldFont = styled.div`
    color: #0E0301;
    font-family: DM Sans;
    font-style: bold;
    font-weight: 700;
    margin: 0px;
    padding: 1px 0 0 0 ;
`

export const Font = styled.div`
    color: #0E0301;
    font-family: DM Sans;
    font-style: normal;
    margin: 0px;
`

export const Bold18px = styled(BoldFont)`
    font-size: 18px;
`
export const Bold24px = styled(BoldFont)`
    font-size: 24px;
`

export const Bold15px = styled(BoldFont)`
    font-size: 15px;
`
export const Bold21px = styled(BoldFont)`
    font-size: 21px;
`

export const Normal15px = styled(Font)`
    font-size: 15px;
`

export const Normal13px = styled(Font)`
    font-size: 13px;
    color: #94969B !important;
`

export const StyledDropdown = styled.div`
    position: relative;

    .search-category {
        width: 100px;
        position: absolute;
        z-index: 3;
        list-style-type: none;
        padding-left: 0px;
        box-shadow: 0px 5px 10px 1px #DBDBDB;
        background-color: #ffffffec;
        backdrop-filter: blur(1px);
        top: 26px;
    }

    .test {
        display: flex;
        align-items: center;
    }
`
export const StyledLI = styled.li`
    color: #0E0301;
    font-family: DM Sans;
    font-style: bold;
    font-size: 13px;

    width: 70px;
    height: 20px;
    padding: 5px 10px;
    margin: 0px;
    &:hover {
        font-weight: 800;
    }
`
export const StyledSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const StyledLeftFlex = styled.div`
    display: flex;
    justify-content: row;
    align-items: center;
    height: 40px;
    gap: 15px;
`

export const StyledRightFlex = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`