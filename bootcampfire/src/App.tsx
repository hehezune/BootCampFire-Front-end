import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import BoardList from 'pages/BoardPage/BoardListPage';
import BootCamp from './pages/BootCamp';
import VS from './pages/VSPage/VsPage';
import MainPage from './pages/MainPage/MainPage';
import store from './store';
import { Provider } from 'react-redux';
import BootCampListDetailPage from './pages/BootCampPage/BootCampDetailPage';


export default function App() {
  return (
    <div>
        <Provider store={store}>
      <Provider store={store}>
        <nav>
          <Nav />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Board" element={<BoardList />} />
            <Route path="/BootCamp" element={<BootCamp />} />
            <Route path="/src/pages/VSPage/VsPage" element={<VS />} />
          <Route path="/bootcampdetail/:bootcampid" element={<BootCampListDetailPage/>} />
          </Routes>
        </main>
        </Provider>
      </Provider>
    </div>
  );
}
