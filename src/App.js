import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Candidatos from "./components/candidatos/Candidatos";
import Home from "./components/misc/Home";
import Header from "./components/layout/Header";
import Login from "./components/login/Login";
import CandidatosState from "./context/candidatos/candidatosState";
import Admin from "./components/misc/Admin";
import Contacto from "./components/Contacto/ContactoForm"

function App() {
  return (
    <CandidatosState>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidatos" element={<Candidatos />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Contacto" element={<Contacto/>} />
        </Routes>
      </Router>
    </CandidatosState>
  );
}

export default App;
