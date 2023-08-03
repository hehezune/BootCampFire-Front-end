import React from "react";
import MyPageHeader from "components/MyPage/MyPageHeader";
import { Outlet } from "react-router-dom";

import { StyledPage } from "pages/BoardPage/styledPage";
function MyPage() {
  return (
    <StyledPage>
      <MyPageHeader/>
      <Outlet />
    </StyledPage>
  )
}

export default MyPage;