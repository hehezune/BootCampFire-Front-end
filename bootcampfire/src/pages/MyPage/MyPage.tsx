import React from "react";
import MyPageHeader from "components/MyPage/MyPageHeader";
import { Outlet } from "react-router-dom";
function MyPage() {
  return (
    <>
      <MyPageHeader/>
      <Outlet />
    </>
  )
}

export default MyPage;