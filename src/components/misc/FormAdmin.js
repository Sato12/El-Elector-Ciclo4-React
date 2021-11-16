import React, { useContext, useState } from "react";
import CandidatosContext from "../../context/candidatos/candidatosContext";
import { Modal } from "react-bootstrap";

const FormAdmin = () => {
  const candidatosContext = useContext(CandidatosContext);
  const { modalAddForm, closeAddForm } = candidatosContext;

  const [candidatoForm, setCandidatoForm] = useState({
    id: 0,
    nombre: "",
    fullNombre: "",
    descripcionBreve: "",
    partido: "",
    genero: "",
    cargos: [],
    formacion: [],
    logo: "",
    posicion: "",
    encuestas: true,
    profesion: "",
    foto: "",
    sigep: "",
  });

  const handleClose = () => {
    closeAddForm();
  };

  const onChangeCandidato = (e) => {
    setCandidatoForm({
      ...candidatoForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal
      show={modalAddForm}
      onHide={() => closeAddForm()}
      centered
      size={"xl"}
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-candidato-titulo">
          <h2>Agregar Candidato</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-10">
              <form>
                <input
                  type="number"
                  className="input-text"
                  placeholder="Id Candidato"
                  name="id"
                  onChange={onChangeCandidato}
                  value={candidatoForm.id}
                />
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btnn btnn-primario" onClick={handleClose}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormAdmin;
