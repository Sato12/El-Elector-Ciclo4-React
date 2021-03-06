import React, { useContext, useState, useEffect } from "react";
import CandidatosContext from "../../context/candidatos/candidatosContext";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";

const FormAdmin = () => {
  const candidatosContext = useContext(CandidatosContext);
  const {
    candidatos,
    candidatoSelected,
    modalAddForm,
    closeAddForm,
    addCandidato,
    editarCandidato,
    obtenerCandidatosUsuario,
  } = candidatosContext;

  const [img, setImg] = useState(null);
  const [fotoC, setFotoC] = useState(null);

  const [editMode, setEditMode] = useState(false);

  const initialState = {
    fId: 0,
    nombre: "",
    fullNombre: "",
    descripcionBreve: "",
    partido: "",
    genero: "",
    cargos: { cargos0: "" },
    formacion: { formacion0: "" },
    logo: "",
    posicion: "",
    encuestas: true,
    profesion: "",
    foto: "",
    sigep: "",
    idDB: 0,
  };
  const [candidatoForm, setCandidatoForm] = useState(initialState);
  const {
    nombre,
    fullNombre,
    descripcionBreve,
    partido,
    genero,
    cargos,
    formacion,
    logo,
    posicion,
    profesion,
    foto,
    sigep,
  } = candidatoForm;

  useEffect(() => {
    setEditMode(false);
    if (candidatoSelected) {
      obtenerCandidatosUsuario();
      setCandidatoForm(candidatoSelected[0]);
      setGapsCargos(Object.values(candidatoSelected[0].cargos).length);
      setGapsFormacion(Object.values(candidatoSelected[0].formacion).length);
      setEditMode(true);
    }

    if (img) {
      setCandidatoForm({ ...candidatoForm, logo: "" });
      const fileReader = new FileReader();

      fileReader.onloadend = () => {
        setCandidatoForm({ ...candidatoForm, logo: fileReader.result });
      };
      fileReader.readAsDataURL(img);
    }
    if (fotoC) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(fotoC);

      fileReader.onloadend = () => {
        setCandidatoForm({ ...candidatoForm, foto: fileReader.result });
      };
    } else return;
    // eslint-disable-next-line
  }, [img, fotoC, candidatoSelected]);

  const handleClose = () => {
    setCandidatoForm(initialState);
    setFotoC(null);
    setImg(null);
    closeAddForm();
  };

  const handleSave = () => {
    if (editMode) {
      editarCandidato(candidatoForm);
    } else {
      addCandidato(candidatoForm);
    }
  };

  const onChangeCandidato = (e) => {
    setCandidatoForm({
      ...candidatoForm,
      [e.target.name]: e.target.value,
      fId: candidatos.length + 1,
    });
  };

  const onChangeEncuestas = (e) => {
    setCandidatoForm({
      ...candidatoForm,
      [e.target.name]: JSON.parse(e.target.value),
    });
  };

  const onChangeArrays = (e) => {
    if (e.target.name === "cargos") {
      const objcargos = {
        ...candidatoForm.cargos,
        [e.target.id]: e.target.value,
      };

      setCandidatoForm({
        ...candidatoForm,
        [e.target.name]: objcargos,
      });
    } else if (e.target.name === "formacion") {
      const objformacion = {
        ...candidatoForm.formacion,
        [e.target.id]: e.target.value,
      };

      setCandidatoForm({
        ...candidatoForm,
        [e.target.name]: objformacion,
      });
    } else return;
  };

  const onChangeImg = (e) => {
    console.log(e.target.files[0]);
    setImg(e.target.files[0]);
    setFotoC(null);
  };

  const onChangeFoto = (e) => {
    console.log(e.target.files[0]);
    setFotoC(e.target.files[0]);
    setImg(null);
  };

  const [gapsCargos, setGapsCargos] = useState(1);
  const [gapsFormacion, setGapsFormacion] = useState(1);

  const removerGap = (typeGap) => {
    if (typeGap === "cargos") {
      const objCargos = candidatoForm.cargos;

      delete objCargos[`cargos${gapsCargos - 1}`];

      setCandidatoForm({ ...candidatoForm, cargos: objCargos });

      setGapsCargos(gapsCargos - 1);
    } else if (typeGap === "formacion") {
      const objFormacion = candidatoForm.formacion;

      delete objFormacion[`formacion${gapsFormacion - 1}`];

      setCandidatoForm({ ...candidatoForm, formacion: objFormacion });

      setGapsFormacion(gapsFormacion - 1);
    } else return;
  };

  const handleSubmit = () => {
    if (
      nombre.trim() === "" ||
      fullNombre.trim() === "" ||
      descripcionBreve.trim() === "" ||
      partido.trim() === "" ||
      genero.trim() === "" ||
      Object.keys(cargos).length === 0 ||
      Object.keys(formacion).length === 0 ||
      logo.trim() === "" ||
      posicion.trim() === "" ||
      logo.trim() === "" ||
      posicion.trim() === "" ||
      profesion.trim() === "" ||
      foto.trim() === "" ||
      sigep.trim() === ""
    ) {
      console.log("No se pas?? la validaci??n del form...");
      return;
    }
    handleSave();
    handleClose();
  };

  return (
    <Modal show={modalAddForm} onHide={handleClose} centered size={"xl"}>
      <Modal.Header closeButton>
        <Modal.Title className="modal-candidato-titulo">
          {editMode ? <h2>Editar Candidato</h2> : <h2>Agregar Candidato</h2>}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-10">
              <form>
                <label
                  htmlFor="nombre"
                  className="ms-3 mt-5 form-gap-peque??o-label"
                >
                  Nombre Corto
                </label>
                <input
                  type="text"
                  className="input-text form-gap-peque??o"
                  placeholder="Apodo del Candidato"
                  name="nombre"
                  id="nombre"
                  onChange={onChangeCandidato}
                  value={candidatoForm.nombre}
                />
                <br />
                <br />
                <hr />
                <label
                  htmlFor="fullNombre"
                  className="ms-3 mt-5 form-gap-peque??o-label"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="input-text form-gap-peque??o"
                  placeholder="Nombre completo"
                  name="fullNombre"
                  id="fullNombre"
                  onChange={onChangeCandidato}
                  value={candidatoForm.fullNombre}
                />
                <br />
                <br />
                <hr />
                <label
                  htmlFor="partido"
                  className="ms-3 mt-5 form-gap-peque??o-label"
                >
                  Partido
                </label>
                <input
                  type="text"
                  className="input-text form-gap-peque??o"
                  placeholder="Partido del Candidato"
                  name="partido"
                  id="partido"
                  onChange={onChangeCandidato}
                  value={candidatoForm.partido}
                />
                <br />
                <br />
                <hr />
                <label
                  htmlFor="genero"
                  className="ms-3 mt-5 form-gap-peque??o-label"
                >
                  Genero
                </label>
                <select
                  name="genero"
                  value={candidatoForm.genero}
                  onChange={onChangeCandidato}
                  className="input-text form-gap-peque??o"
                >
                  <option value="">-- Selecccione --</option>
                  <option value="M">-- Masculino --</option>
                  <option value="F">-- Femenino --</option>
                </select>
                <br />
                <br />
                <hr />
                <label
                  htmlFor="cargos"
                  className="ms-3 mt-5 form-gap-peque??o-label"
                >
                  Cargos
                </label>
                <br />
                {Object.values(candidatoForm.cargos)
                  ? [...Array(gapsCargos)].map((elemento, index) => (
                      <input
                        key={index}
                        type="text"
                        className="input-text form-gap-adicional"
                        placeholder="Trabajos del candidato"
                        name="cargos"
                        id={`cargos${index}`}
                        onChange={onChangeArrays}
                        value={Object.values(candidatoForm.cargos)[index]}
                      />
                    ))
                  : null}
                <FontAwesomeIcon
                  className="form-sum-icon"
                  icon={faPlusSquare}
                  size="2x"
                  onClick={() => setGapsCargos(gapsCargos + 1)}
                />
                {gapsCargos === 1 ? null : (
                  <FontAwesomeIcon
                    className="form-sum-icon"
                    icon={faMinusSquare}
                    size="2x"
                    onClick={() => removerGap(`cargos`)}
                  />
                )}
                <br />
                <br />
                <hr />
                <label
                  htmlFor="formacion"
                  className="ms-3 mt-5 form-gap-peque??o-label"
                >
                  Formaci??n
                </label>
                <br />
                {Object.values(candidatoForm.formacion)
                  ? [...Array(gapsFormacion)].map((elemento, index) => (
                      <input
                        key={index}
                        type="text"
                        className="input-text form-gap-adicional"
                        placeholder="Estudios del candidato"
                        name="formacion"
                        id={`formacion${index}`}
                        onChange={onChangeArrays}
                        value={Object.values(candidatoForm.formacion)[index]}
                      />
                    ))
                  : null}
                <FontAwesomeIcon
                  className="form-sum-icon"
                  icon={faPlusSquare}
                  size="2x"
                  onClick={() => setGapsFormacion(gapsFormacion + 1)}
                />
                {gapsFormacion === 1 ? null : (
                  <FontAwesomeIcon
                    className="form-sum-icon"
                    icon={faMinusSquare}
                    size="2x"
                    onClick={() => removerGap(`formacion`)}
                  />
                )}
                <br />
                <br />
                <hr />
                <label
                  htmlFor="posicion"
                  className="ms-3 mt-5 form-gap-peque??o-label"
                >
                  Postura Pol??tica
                </label>
                <select
                  name="posicion"
                  value={candidatoForm.posicion}
                  onChange={onChangeCandidato}
                  className="input-text form-gap-peque??o"
                >
                  <option value="">-- Selecccione --</option>
                  <option value="derecha">-- Derecha --</option>
                  <option value="izquierda">-- Izquierda --</option>
                  <option value="centro">-- Centro --</option>
                </select>
                <br />
                <br />
                <hr />
                <label
                  htmlFor="encuestas"
                  className="ms-3 mt-5 form-gap-peque??o-label"
                >
                  ??Buena posici??n en encuestas?
                </label>
                <select
                  name="encuestas"
                  value={candidatoForm.encuestas}
                  onChange={onChangeEncuestas}
                  className="input-text form-gap-peque??o"
                >
                  <option value={true}>-- S?? --</option>
                  <option value={false}>-- No --</option>
                </select>
                <br />
                <br />
                <hr />
                <label
                  htmlFor="profesion"
                  className="ms-3 mt-5 form-gap-peque??o-label"
                >
                  Profesion
                </label>
                <input
                  type="text"
                  className="input-text form-gap-peque??o"
                  placeholder="Profesi??n del Candidato"
                  name="profesion"
                  id="profesion"
                  onChange={onChangeCandidato}
                  value={candidatoForm.profesion}
                />
                <br />
                <br />
                <hr />
                <label
                  htmlFor="sigep"
                  className="ms-3 mt-5 form-gap-peque??o-label"
                >
                  HV
                </label>
                <input
                  type="text"
                  className="input-text form-gap-peque??o"
                  placeholder="Link de HV del candidato"
                  name="sigep"
                  id="sigep"
                  onChange={onChangeCandidato}
                  value={candidatoForm.sigep}
                />
                <br />
                <br />
                <hr />
                <label
                  htmlFor="logo"
                  className="ms-3 mt-5 form-gap-peque??o-label"
                >
                  Logo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="input-text form-gap-peque??o"
                  placeholder="Logo del partido pol??tico"
                  name="logo"
                  id="logo"
                  onChange={onChangeImg}
                />
                <br />
                <br />
                <hr />
                <label
                  htmlFor="foto"
                  className="ms-3 mt-5 form-gap-peque??o-label"
                >
                  Foto
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="input-text form-gap-peque??o"
                  placeholder="Foto del candidato"
                  name="foto"
                  id="foto"
                  onChange={onChangeFoto}
                />

                <hr />
                <label
                  htmlFor="descripcionBreve"
                  className="ms-3 mb-3 form-gap-grande-label"
                >
                  Descripci??n
                </label>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-9">
                      <textarea
                        className="input-text form-gap-grande"
                        placeholder="Descripci??n del candidato"
                        name="descripcionBreve"
                        id="descripcionBreve"
                        onChange={onChangeCandidato}
                        value={candidatoForm.descripcionBreve}
                      ></textarea>
                    </div>
                  </div>
                </div>
                {candidatoForm.logo ? (
                  <img
                    className="img-fluid"
                    src={candidatoForm.logo}
                    alt="asdas"
                  />
                ) : null}
                {candidatoForm.foto ? (
                  <img
                    className="img-fluid"
                    src={candidatoForm.foto}
                    alt="asdas"
                  />
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btnn btnn-primario" onClick={handleClose}>
          Cerrar
        </button>
        <button
          type="submit"
          className="btnn btnn-primario"
          onClick={handleSubmit}
        >
          Guardar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormAdmin;
