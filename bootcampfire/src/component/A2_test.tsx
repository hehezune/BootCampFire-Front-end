import React from "react";
// import logo from './logo.svg';
import "./App.css";
import A2 from "./A2";
// import A3 from './component/A3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>A3, A2</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <A2 text="풀스택" />
          <A2 text="임베디드" />
          <A2 text="모바일" />
        </div>
        <div style={{ marginTop: "20px" }} />
        <div style={{ display: "flex", gap: "10px" }}>
          <A2 text="오프라인" color="#21C63C" />
          <A2 text="지원금 O" color="#4E80FF" />
          <A2 text="코테 O" color="#B131DD" />
        </div>
        <div style={{ marginTop: "20px" }} />
        <div>{/* <A3 text="코테 O"/> */}</div>
      </header>
    </div>
  );
}

export default App;
