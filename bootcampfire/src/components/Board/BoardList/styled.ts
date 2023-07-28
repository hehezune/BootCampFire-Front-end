import styled from 'styled-components';

const BoldFont = styled.div`
    color: #0E0301;
    font-family: DM Sans;
    font-style: bold;
    font-weight: 700;
    margin: 5px;
`

const Font = styled.div`
    color: #0E0301;
    font-family: DM Sans;
    font-style: normal;
    margin: 5px;
`

const Bold18px = styled(BoldFont)`
    font-size: 21px;
`
const Bold24px = styled(BoldFont)`
    font-size: 24px;
`

const Bold15px = styled(BoldFont)`
    font-size: 15px;
`
const Bold21px = styled(BoldFont)`
    font-size: 21px;
`

const Normal15px = styled(Font)`
    font-size: 15px;
`

const Normal13px = styled(Font)`
    font-size: 13px;
    color: #94969B !important;
`

const StyledDropdown = styled.div`
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
const StyledLI = styled.li`
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

export { Bold18px, Bold24px, Bold15px, Bold21px, Normal15px, Normal13px, StyledDropdown, StyledLI};