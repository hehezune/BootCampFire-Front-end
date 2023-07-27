import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Board from './pages/Board';
import BootCamp from './pages/BootCamp';
import VS from './pages/VSPage/VsPage';
import MainPage from './pages/MainPage/MainPage';
import store from './store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <nav>
          <Nav />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Board" element={<Board />} />
            <Route path="/BootCamp" element={<BootCamp />} />
            <Route path="/src/pages/VSPage/VsPage" element={<VS />} />
          </Routes>
        </main>
      </Provider>
    </div>
  );
}
