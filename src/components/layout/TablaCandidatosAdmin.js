import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import CandidatosContext from "../../context/candidatos/candidatosContext";
import CandidatoDetail from "../candidatos/CandidatoDetail";
import FormAdmin from "../misc/FormAdmin";

const TablaCandidatosAdmin = () => {
  const candidatosContext = useContext(CandidatosContext);
  const {
    candidatos,
    candidatoSelected,
    numberEdits,
    selecCandidato,
    mostrarModalCandidato,
    openAddForm,
    obtenerCandidatosUsuario,
    deleteCandidato,
  } = candidatosContext;

  useEffect(() => {
    obtenerCandidatosUsuario();
  }, [numberEdits]);

  const mostrarDetalleCandidato = (id) => {
    selecCandidato(id);
    mostrarModalCandidato();
  };

  const handleEdit = (id) => {
    selecCandidato(id);
    openAddForm();
  };

  const handleDelete = (id) => {
    deleteCandidato(id);
  };
  return (
    <div className="container">
      {candidatoSelected ? <CandidatoDetail /> : null}
      <FormAdmin />
      <BotonNuevoCandidato onClick={openAddForm}>
        Agregar candidato
      </BotonNuevoCandidato>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Partido</th>
            <th scope="col">Profesion</th>
            <th scope="col">Detalle</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {candidatos.length > 0 ? (
            candidatos.map((candidato) => (
              <tr key={candidato._id}>
                <th scope="row">{candidato.fId}</th>
                <td>{candidato.nombre}</td>
                <td>{candidato.partido}</td>
                <td>{candidato.profesion}</td>
                <td>
                  <BotonModal
                    onClick={() => mostrarDetalleCandidato(candidato._id)}
                  >
                    Ver detalle
                  </BotonModal>
                </td>
                <td>
                  <FontAwesomeIcon
                    className="tajerta-icono-posicion  tabla-candi-editbott"
                    icon={faEdit}
                    size="2x"
                    onClick={() => handleEdit(candidato._id)}
                  />
                  <FontAwesomeIcon
                    className="tajerta-icono-posicion ms-2 tabla-candi-editbott"
                    icon={faTrashAlt}
                    size="2x"
                    onClick={() => handleDelete(candidato._id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-info">
              <th>Sin candidatos. Agrega para visualizar.</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablaCandidatosAdmin;

const BotonNuevoCandidato = styled.p`
  align-items: center;
  justify-content: center;
  display: flex;
  padding-left: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 2rem;
  margin-bottom: 0rem;
  color: #fff;
  background-color: #222225;

  &:hover {
    background-color: #39373d;
    cursor: pointer;
  }
`;

const BotonModal = styled.p`
  align-items: start;
  justify-content: start;
  display: flex;
  padding-left: 1rem;
  padding-top: 0rem;
  padding-bottom: 0rem;
  padding-right: 0rem;
  margin-bottom: 0rem;
  color: #fff;
  background-color: #212529;

  &:hover {
    cursor: pointer;
  }
`;
