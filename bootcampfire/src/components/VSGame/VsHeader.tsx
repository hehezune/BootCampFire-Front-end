import React, { useState } from "react";
import { Bold18px, Bold24px } from "components/Board/styled";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "constant/constant";
import { useLocation } from "react-router-dom";
function VsHeader() {
  const selectTab = useLocation().state as number ?? 0;
  const [activeId, setActiveId] = useState(selectTab);

  const handlerTabClick = (id: number) => {
    setActiveId(id);
  };

  return (
    <div>
      <StyledBold24px>VS</StyledBold24px>
      <StyledDiv>
        <StyledLink to="/VsPage">
          <StyledBold21px
            as="span"
            onClick={() => handlerTabClick(0)}
            className={0 === activeId ? "active" : ""}
          >
            오늘의 미션
          </StyledBold21px>
        </StyledLink>
        <StyledLink to="/VsPage/G2048">
          <StyledBold21px
            as="span"
            onClick={() => handlerTabClick(1)}
            className={1 === activeId ? "active" : ""}
          >
            2048 게임
          </StyledBold21px>
        </StyledLink>
      </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div``;
const StyledBold24px = styled(Bold24px)`
  margin: 20px 20px 30px 20px;
`;
const StyledLink = styled(Link)`
  border-bottom: 1px solid ${colors.PRIMARY};
  text-decoration: none;
  padding: 5px 0 9px 0;
`;
const StyledBold21px = styled(Bold18px)`
  padding: 5px 50px 9px 50px;

  &.active {
    border-bottom: 5px solid ${colors.PRIMARY};
    padding: 5px 50px;
  }
`;
export default VsHeader;
