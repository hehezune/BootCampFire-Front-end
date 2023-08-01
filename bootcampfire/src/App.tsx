import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardList from 'pages/BoardPage/BoardListPage';
import BoardDetail from 'pages/BoardPage/BoardDetailPage';
import BootCamp from './pages/BootCamp';
import BoardCreate from 'pages/BoardPage/BoardCreatePage';
import BoardModify from 'pages/BoardPage/BoardModifyPage';
import MyPage from 'pages/MyPage/MyPage';
import VS from './pages/VSPage/VsPage';
import MainPage from './pages/MainPage/MainPage';
import store from './store';
import { Provider } from 'react-redux';
import Header from 'components/Header';
import BootCampListDetailPage from './pages/BootCampPage/BootCampDetailPage';


export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Board" element={<BoardList />} />
            <Route path="/BoardDetail" element={<BoardDetail />} />
            <Route path="/BoardCreate" element={<BoardCreate />} />
            <Route path="/BootCamp" element={<BootCamp />} />
            <Route path="/src/pages/VSPage/VsPage" element={<VS />} />
            <Route path="/BoardModify" element={<BoardModify />} />
            <Route path="/MyPage/*" element={<MyPage />} >
              <Route path="" element={<BoardCreate />} />
              <Route path="MyPost" element={<BoardModify />} />
            </Route>
          <Route path="/bootcampdetail/:bootcampid" element={<BootCampListDetailPage/>} />
          </Routes>
        </main>
      </Provider>
    </div>
  );
}
