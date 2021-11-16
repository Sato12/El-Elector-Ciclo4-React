import React, { useContext } from "react";
import styled from "@emotion/styled";
import CandidatosContext from "../../context/candidatos/candidatosContext";

const SideBar = () => {
  const candidatosContext = useContext(CandidatosContext);
  const { setModoTablaAdmin } = candidatosContext;

  return (
    <Aside>
      <h1 className="text-center">Administración</h1>
      <div className="proyectos">
        <BotonOpcion onClick={() => setModoTablaAdmin(true)}>
          Candidatos
        </BotonOpcion>
        <BotonOpcion onClick={() => setModoTablaAdmin(false)}>
          Partidos
        </BotonOpcion>
      </div>
    </Aside>
  );
};

export default SideBar;

const BotonOpcion = styled.p`
  align-items: center;
  justify-content: center;
  display: flex;
  padding-left: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 2rem;
  font-size: medium;
  background-color: #d9d4e6;
  &:hover {
    background-color: #c5bdd8;
  }
`;

const Aside = styled.aside`
  background-color: #eeedf3;
`;
