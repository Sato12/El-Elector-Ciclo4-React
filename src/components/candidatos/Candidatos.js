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
            <TextoEnunciado>
              Actualmente se tienen conocen los siguientes candidatos a la
              presidencia. Puede observar diferentes características sobre ellos
              como el partido que los representa, su educación, cargos,
              anteriores, entre otros. También se da un hipervínculo hacia una
              base de datos estatal para leer más características.
            </TextoEnunciado>
            {/* <BarraListado /> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Candidatos;

const Title = styled.h1`
  font-weight: 700;
  font-size: 5rem;
  font-family: "Noticia Text", serif;
  text-align: center;
`;

const TextoEnunciado = styled.p`
  font-size: 3rem;
  font-family: "Noticia Text", serif;
  margin-top: 3rem;
`;
