import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="app-header ">
      {/*sticky-top*/}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-md-8 justify-content-center">
            <p className="nombre-usuario">
              <span onClick={() => navigate("/")}>El Elector</span>
            </p>
          </div>
        </div>
        <nav className="nav-principal ">
          <div className="row justify-content-start mt-3 mb-3">
            <div className="col-auto col-md-auto">
              <button
                className="btnn btnn-header"
                onClick={() => navigate("/candidatos")}
              >
                Ver Candidatos
              </button>
            </div>
            <div className="col-auto col-md-auto ">
              <button className="btnn btnn-header ">Ver Partidos</button>
            </div>
            <div className="col-auto col-md-auto ">
              <button className="btnn btnn-header ">Sobre Nosotros</button>
            </div>
            <div className="col-auto col-md-auto">
              <button className="btnn btnn-header ">Contacto</button>
            </div>
            <div className="col-auto col-md-auto ms-auto ">
              <p
                className="btnn btnn-header iniciar-sesion-h"
                onClick={() => navigate("/login")}
              >
                Iniciar Sesión
              </p>
            </div>
          </div>
          <div className="row justify-content-end"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
