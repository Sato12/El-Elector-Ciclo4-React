import React, { useState, useContext, useEffect } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import CandidatosContext from "../../context/candidatos/candidatosContext";

const CandidatoDetail = () => {
  const candidatosContext = useContext(CandidatosContext);
  const { candidatoSelected, detalleModal, cerrarModalCandidato } =
    candidatosContext;
  const {
    fullNombre,
    descripcionBreve,
    partido,
    posicion,
    profesion,
    foto,
    cargos,
    formacion,
    sigep,
  } = candidatoSelected[0];

  return (
    <Modal
      show={detalleModal}
      onHide={() => cerrarModalCandidato()}
      centered
      size={"xl"}
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-candidato-titulo">
          <h2>{fullNombre}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-10">
              <p className="modal-candidato-parrafo mt-3">{descripcionBreve}</p>
              <h2 className="modal-candidato-subtitulo">
                Partido: <p className="modal-candidato-propiedad">{partido}.</p>
              </h2>
              <h2 className="modal-candidato-subtitulo">
                Posición:
                <p className="modal-candidato-propiedad">{posicion}.</p>
              </h2>
              <h2 className="modal-candidato-subtitulo">
                Profesión:
                <p className="modal-candidato-propiedad">{profesion}.</p>
              </h2>
              <h2 className="modal-candidato-subtitulo">
                Cargos previos:
                <ol>
                  {cargos.map((cargo) => (
                    <li className="modal-list" key={cargo}>
                      <p className="modal-candidato-propiedad">{cargo}.</p>
                    </li>
                  ))}
                </ol>
              </h2>
              <h2 className="modal-candidato-subtitulo">
                Formación académica:
                <ol>
                  {formacion.map((item) => (
                    <li className="modal-list" key={item}>
                      <p className="modal-candidato-propiedad">{item}.</p>
                    </li>
                  ))}
                </ol>
              </h2>
              <h2 className="modal-candidato-subtitulo">
                HV:
                <a
                  href={sigep}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-candidato-propiedad"
                >
                  {sigep}
                </a>
              </h2>
              <img
                className="img-fluid modal-img"
                src={foto}
                alt="Foto del candidato"
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btnn btnn-primario"
          onClick={() => cerrarModalCandidato()}
        >
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default CandidatoDetail;
