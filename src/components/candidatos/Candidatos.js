import React, { useEffect, useState, useContext } from "react";
import BarraListado from "../layout/BarraListado";
import styled from "@emotion/styled";
import TarjetaCandidato from "./TarjetaCandidato";
import CandidatosContext from "../../context/candidatos/candidatosContext";
import CandidatoDetail from "./CandidatoDetail";

const Candidatos = () => {
  const candidatosContext = useContext(CandidatosContext);
  const { candidatos, candidatoSelected, obtenerCandidatosUsuario } =
    candidatosContext;

  useEffect(() => {
    obtenerCandidatosUsuario();
    if (candidatos.length === 0) return;
    // eslint-disable-next-line
  }, []);
  return (
    <div className="contenedor-app">
      {candidatoSelected ? <CandidatoDetail /> : null}
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
            <BarraListado />
            {candidatos.map((candidato, index) => (
              <TarjetaCandidato
                key={candidato._id}
                candidato={candidato}
                index={index}
              />
            ))}
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
  font-size: 2.5rem;
  font-family: "Noticia Text", serif;
  margin-top: 3rem;
`;
