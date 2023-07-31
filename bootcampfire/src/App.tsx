import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardList from 'pages/BoardPage/BoardListPage';
import BootCamp from './pages/BootCamp';
import VS from './pages/VSPage/VsPage';
import MainPage from './pages/MainPage/MainPage';
import store from './store';
import { Provider } from 'react-redux';
import Header from 'components/Header';
import BootCampListDetailPage from './pages/BootCampPage/BootCampDetailPage';
import LoginModal from 'components/Login/LoginModal';
import MyPage from 'pages/MyPage/MyPage';
import ManngerPage from 'pages/ManagerPage/ManagerPage';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Board" element={<BoardList />} />
            <Route path="/BootCamp" element={<BootCamp />} />
            <Route path="/src/pages/VSPage/VsPage" element={<VS />} />
            <Route path="/bootcampdetail/:bootcampid" element={<BootCampListDetailPage />} />
            <Route path="/MyPage/MyPage" element={<MyPage />} />
            <Route path="/ManagerPage/ManagerPage" element={<ManngerPage />} />
          </Routes>
        </main>
      </Provider>
    </div>
  );
}
