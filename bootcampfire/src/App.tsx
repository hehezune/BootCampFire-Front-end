import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardList from 'pages/BoardPage/BoardListPage';
import BootCamp from './pages/BootCamp';
import VS from './pages/VSPage/VsPage';
import MainPage from './pages/MainPage/MainPage';
import store from './store';
import { Provider } from 'react-redux';
import Header from 'components/Header';

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
          </Routes>
        </main>
      </Provider>
    </div>
  );
}
