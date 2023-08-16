import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardList from 'pages/BoardPage/BoardListPage';
import BoardDetail from 'pages/BoardPage/BoardDetailPage';
import BootCamp from './pages/BootCamp';
import BoardCreate from 'pages/BoardPage/BoardCreatePage';
import BoardModify from 'pages/BoardPage/BoardModifyPage';
import MyPosts from 'pages/MyPage/MyPosts';
import PersonalInfo from 'pages/MyPage/PersonalInfo';
import MainPage from './pages/MainPage/MainPage';
import store from './store';
import { Provider } from 'react-redux';
import Header from 'components/Header';
import BootCampListDetailPage from './pages/BootCampPage/BootCampDetailPage';
import ManagerPage from 'pages/ManagerPage/ManagerPage';
import Regist from 'pages/ManagerPage/Regist';
import Management from 'pages/ManagerPage/Management';
import Mission from 'pages/ManagerPage/Mission';
import LoginDataPage from 'components/Login/LoginDataPage';
import MyPage from 'pages/MyPage/MyPage';
import ManageCreate from 'pages/ManagerPage/ManageCreate';
import MissionPage from 'pages/VSPage/MissionPage';
import VsPage from 'pages/VSPage/VsPage';
import G2048 from 'pages/VSPage/G2048';
import MainSearchListPage from 'pages/MainPage/MainSearchListPage';
import ManageModify from 'pages/ManagerPage/ManageModify';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/mainSearch/:searchType/:keyword" element={<MainSearchListPage />} />
            <Route path="/loginInfo" element={<LoginDataPage />} />
            <Route path="/Board" element={<BoardList />} />
            <Route path="/BoardDetail/:id" element={<BoardDetail />} />
            <Route path="/BoardCreate" element={<BoardCreate />} />
            <Route path="/BootCamp" element={<BootCamp />} />
            <Route path="/VsPage/*" element={<VsPage />}>
              <Route path="" element={<MissionPage />} />
              <Route path="G2048" element={<G2048 />} />
            </Route>
            <Route path="/bootcampdetail/:bootcampid" element={<BootCampListDetailPage />} />
            <Route path="/BoardModify/:bootcampid" element={<BoardModify />} />
            <Route path="/MyPage/*" element={<MyPage />}>
              <Route path="" element={<PersonalInfo />} />
              <Route path="MyPosts" element={<MyPosts />} />
            </Route>
            <Route path="/ManagerPage/*" element={<ManagerPage />}>
              <Route path="" element={<Regist />} />
              <Route path="Management" element={<Management />} />
              <Route path="Management/create" element={<ManageCreate />} />
              <Route path="Management/modify/:bootcampId" element={<ManageModify />} />
              <Route path="Mission" element={<Mission />} />
            </Route>
          </Routes>
        </main>
      </Provider>
    </div>
  );
}
