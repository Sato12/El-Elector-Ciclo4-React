import React, { useContext } from "react";
import SideBar from "../layout/Sidebar";
import CandidatosContext from "../../context/candidatos/candidatosContext";
import TablaCandidatosAdmin from "../layout/TablaCandidatosAdmin";

const Admin = () => {
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
