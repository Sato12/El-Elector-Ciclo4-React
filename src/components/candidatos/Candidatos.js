import React, { useEffect, useState } from "react";
import BarraListado from "../layout/BarraListado";
import styled from "@emotion/styled";
import TarjetaCandidato from "./TarjetaCandidato";
import logo from "../../Images/svg/logoColombiaHumana.jpg";
import logo2 from "../../Images/svg/logo2.jpg";
import logo3 from "../../Images/svg/logoParty3.jpg";
import foto from "../../Images/svg/petro.jpg";
import foto2 from "../../Images/cabal.jpg";
import foto3 from "../../Images/fajardo.jpg";

const Candidatos = () => {
  const candidatosLista = [
    {
      id: 1,
      nombre: "Gustavo Petro Urrego",
      partido: "Candidato de la Colombia Humana",
      logo,
      posicion: "Izquierda",
      encuestas: true,
      profesion: "Economista",
      foto,
    },
    {
      id: 2,
      nombre: "Maria Fernanda Cabal",
      partido: "Candidata del Centro Democrático",
      logo: logo2,
      posicion: "Derecha",
      encuestas: true,
      profesion: "Politologa",
      foto: foto2,
    },
    {
      id: 3,
      nombre: "Sergio Fajardo",
      partido: "Candidato de la Alianza Verde",
      logo: logo3,
      posicion: "Centro",
      encuestas: false,
      profesion: "Matemático",
      foto: foto3,
    },
  ];

  const [candidatos, setCandidatos] = useState([]);

  useEffect(() => {
    if (candidatosLista) setCandidatos(candidatosLista);
    // eslint-disable-next-line
  }, []);
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
            <BarraListado />
            {candidatos.map((candidato) => (
              <TarjetaCandidato key={candidato.id} candidato={candidato} />
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
  font-size: 3rem;
  font-family: "Noticia Text", serif;
  margin-top: 3rem;
`;
