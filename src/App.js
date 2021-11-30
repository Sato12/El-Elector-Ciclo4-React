import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import Candidatos from "./components/candidatos/Candidatos";
import Home from "./components/misc/Home";
import Header from "./components/layout/Header";
import Login from "./components/login/Login";
import CandidatosState from "./context/candidatos/candidatosState";
import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/auth/authState";
import Admin from "./components/misc/Admin";
import Contacto from "./components/Contacto/ContactoForm";
import Registro from "./components/login/Registro";
import tokenAuth from "./config/authToken";
import RutaPrivada from "./components/ruta/RutaPrivada";

// Revisar si hay token
const token = localStorage.getItem("token");

if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <AuthState>
      <AlertaState>
        <CandidatosState>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/candidatos" element={<Candidatos />} />
              <Route path="/Login" element={<Login />} />
              {/* {token ? (
                <Route path="/admin" element={<Admin />} />
              ) : (
                <Route path="/admin" element={<Navigate to="/" />} />
              )} */}
              <Route path="/admin" element={<RutaPrivada />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/registro" element={<Registro />} />
            </Routes>
          </Router>
        </CandidatosState>
      </AlertaState>
    </AuthState>
  );
}

export default App;
