import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import SideBar from "../layout/Sidebar";
import CandidatosContext from "../../context/candidatos/candidatosContext";
import TablaCandidatosAdmin from "../layout/TablaCandidatosAdmin";
import authContext from "../../context/auth/authContext";

const Admin = () => {
  // Ver si hay token
  const authcontext = useContext(authContext);
  const { usuarioAutenticado } = authcontext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  const candidatosContext = useContext(CandidatosContext);
  const { modoTablaAdmin } = candidatosContext;

  return (
    <div className="contenedor-app">
      <SideBar />
      <div className="container">
        <main>
          {modoTablaAdmin ? (
            <TablaCandidatosAdmin />
          ) : (
            <h1>Aún no se agregan datos</h1>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
