import styled from 'styled-components';

const BoldFont = styled.div`
    color: #0E0301;
    font-family: DM Sans;
    font-style: bold;
    font-weight: 700;
`

const Font = styled.div`
    color: #0E0301;
    font-family: DM Sans;
    font-style: normal;
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

export { Bold18px, Bold24px, Bold15px, Bold21px, Normal15px, Normal13px };