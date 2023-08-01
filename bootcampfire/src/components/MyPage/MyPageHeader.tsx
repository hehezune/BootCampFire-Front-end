import React, { useState } from "react";
import { Bold18px, Bold24px } from "components/Board/styled";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "constant/constant";

function MyPageHeader() {

    const [activeId, setActiveId] = useState(0);

    const handlerTabClick = (id: number) => {
        setActiveId(id);
        console.log(id)
    }

    return (
        <>
            <StyledBold24px>마이페이지</StyledBold24px>
            <StyledDiv>
                <StyledLink to="/MyPage">
                    <StyledBold21px as="span" onClick={() => handlerTabClick(0)} 
                        className={0 === activeId ? "active" : ""}>개인정보</StyledBold21px>
                </StyledLink>
                <StyledLink to="/MyPage/MyPost">
                    <StyledBold21px as="span" onClick={() => handlerTabClick(1)} 
                        className={1 === activeId ? "active" : ""}>내가 쓴 글 보기</StyledBold21px>
                </StyledLink>
            </StyledDiv>
        </>
    )
}

const StyledDiv = styled.div`

`;

const StyledLink = styled(Link)`
    border-bottom: 1px solid ${colors.PRIMARY};
            text-decoration: none;
            padding: 5px 0 9px 0;
`
const StyledBold24px = styled(Bold24px)`
    margin: 10px 20px 20px 20px;
`
const StyledBold21px = styled(Bold18px)`
    padding: 5px 50px 9px 50px;

    &.active {
        border-bottom: 5px solid ${colors.PRIMARY};
        padding: 5px 50px;
    }
`
export default MyPageHeader;