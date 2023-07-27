import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Board from './pages/Board';
import BootCamp from './pages/BootCamp';
import CampArticle from './pages/CampArticle';
import VS from './pages/VS';
import BootCampListDetailPage from './pages/BootCampPage/BootCampDetailPage';

export default function App() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/BootCamp" element={<BootCamp />} />
          <Route path="/CampArticle" element={<CampArticle />} />
          <Route path="/VS" element={<VS />} />
          <Route path="/bootcampdetail/:bootcampid" element={<BootCampListDetailPage/>} />
        </Routes>
      </main>
    </div>
  );
}
