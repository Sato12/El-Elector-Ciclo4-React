import React from "react";
//import Sidebar from "../layout/Sidebar";
import styled from "@emotion/styled";

const Candidatos = () => {
  return (
    <div className="contenedor-app">
      <div className="seccion-principal">
        <main>
          <div className="contenedor-tareas">
            <Title>Conozca los precandidatos a la presidencia</Title>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Candidatos;

const Title = styled.h1`
  font-weight: 3rem;
  font-size: 3rem;
`;
