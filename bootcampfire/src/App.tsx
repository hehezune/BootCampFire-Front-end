import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./component/Nav";
import Board from "./pages/Board";
import BootCamp from "./pages/BootCamp";
import CampArticle from "./pages/CampArticle";
import VS from "./pages/VS";

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
        </Routes>
      </main>
    </div>
  );
}
