import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Candidatos from "./components/candidatos/Candidatos";
import Home from "./components/misc/Home";
import Header from "./components/layout/Header";
import Login from "./components/login/Login";
import CandidatosState from "./context/candidatos/candidatosState";
import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/auth/authState";
import GetInTouch from "./components/Contacto/Contacto";
import Contacto from "./components/Contacto/ContactoForm";
import Registro from "./components/login/Registro";
import tokenAuth from "./config/authToken";
import RutaPrivada from "./components/ruta/RutaPrivada";
import Sobrenosotros from "./components/Sobrenosotros/Sobrenosotros";
import Verpartidos from "./components/Verpartidos/verpartidos";
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
              <Route path="/admin" element={<RutaPrivada />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/gitouch" element={<GetInTouch />} />
              <Route path="/Sobrenosotros" element={<Sobrenosotros/>} />
              <Route path="/Verpartidos" element={<Verpartidos/>} />
            </Routes>
          </Router>
        </CandidatosState>
      </AlertaState>
    </AuthState>
  
  );
}

export default App;
