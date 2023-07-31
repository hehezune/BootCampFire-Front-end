import React from "react";
import { Bold18px, Bold24px } from "components/Board/styled";
import styled from "styled-components";
function MyPageHeader() {
    return (
        <>
            <Bold24px>마이페이지</Bold24px>
            <StyledDiv>
            <StyledBold21px as="span" onClick={handlerListClick}>개인정보</StyledBold21px>
            <StyledBold21px as="span" onClick={handlerListClick}>내가 쓴 글 보기</StyledBold21px>
            </StyledDiv>
        </>
    )
}

const StyledDiv = styled.div`
`;

const StyledBold21px = styled(Bold21px)<{ $selected?: boolean; }>`
    border-bottom: ${(props) => props.$selected == true ? '5px' : '1px'} 
                    solid ${colors.PRIMARY};
    padding: 5px 50px;
    
`
export default MyPageHeader;