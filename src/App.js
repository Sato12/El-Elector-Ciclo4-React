import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Candidatos from "./components/candidatos/Candidatos";
import Home from "./components/misc/Home";
import Header from "./components/layout/Header";
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidatos" element={<Candidatos />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
