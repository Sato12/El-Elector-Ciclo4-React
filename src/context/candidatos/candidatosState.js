import React, { useEffect, useReducer } from "react";
import {
  SELECCIONAR_CANDIDATO,
  CANDIDATO_MODAL,
  CERRAR_CMODAL,
  ADMIN_TABLA,
  MODAL_ADDFORM,
  CLOSE_ADDFORM,
  AGREGAR_CANDIDATO,
  OBTENER_CANDIDATOS,
  CONTAR_EDITS,
  ELIMINAR_CANDIDATO,
} from "../../types";
import CandidatosContext from "./candidatosContext";
import candidatosReducer from "./candidatosReducer";
import clienteAxios from "../../config/axios";

import logo from "../../Images/svg/logoColombiaHumana.jpg";
import logo2 from "../../Images/svg/logo2.jpg";
import logo3 from "../../Images/svg/logoParty3.jpg";
import foto from "../../Images/svg/petro.jpg";
import foto2 from "../../Images/cabal.jpg";
import foto3 from "../../Images/fajardo.jpg";

const CandidatosState = (props) => {
  const initialState = {
    candidatos: [],
    candidatoSelected: null,
    detalleModal: false,
    modoTablaAdmin: true,
    modalAddForm: false,
    numberEdits: 0,
  };

  // Crear dispatch y state => Hook: useReducer
  const [state, dispatch] = useReducer(candidatosReducer, initialState);

  // Seleccionar un candidato de la lista
  const selecCandidato = (candidatoId) => {
    dispatch({
      type: SELECCIONAR_CANDIDATO,
      payload: candidatoId,
    });
  };

  // Mostrar los detalles del candidato en un modal
  const mostrarModalCandidato = () => {
    dispatch({
      type: CANDIDATO_MODAL,
    });
  };

  // Cerrar los detalles del candidato
  const cerrarModalCandidato = () => {
    dispatch({
      type: CERRAR_CMODAL,
    });
  };

  // Mostrar en admin candidatos o partidos
  const setModoTablaAdmin = (modo) => {
    dispatch({
      type: ADMIN_TABLA,
      payload: modo,
    });
  };

  // Abrir el Form en Admin de agregar candidato
  const openAddForm = () => {
    dispatch({
      type: MODAL_ADDFORM,
    });
  };

  // Cerrar el Form en Admin de agregar candidato
  const closeAddForm = () => {
    dispatch({
      type: CLOSE_ADDFORM,
    });
  };

  // Agregar candidato
  const addCandidato = async (candidato) => {
    try {
      const respuesta = await clienteAxios.post("/api/candidatos", candidato);
      dispatch({
        type: AGREGAR_CANDIDATO,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  // Obtener los candidatos en la db
  const obtenerCandidatosUsuario = async () => {
    try {
      const respuesta = await clienteAxios.get("/api/candidatos");
      console.log(respuesta);
      dispatch({
        type: OBTENER_CANDIDATOS,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Editar candidato
  const editarCandidato = async (candidato) => {
    console.log(`editando el candidato con id ${candidato._id}`);
    try {
      const respuesta = await clienteAxios.put(
        `/api/candidatos/${candidato._id}`,
        candidato
      );
      dispatch({
        type: CONTAR_EDITS,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  // Eliminar candidato
  const deleteCandidato = async (id) => {
    try {
      await clienteAxios.delete(`/api/candidatos/${id}`);
      dispatch({
        type: ELIMINAR_CANDIDATO,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CandidatosContext.Provider
      value={{
        candidatos: state.candidatos,
        candidatoSelected: state.candidatoSelected,
        detalleModal: state.detalleModal,
        modoTablaAdmin: state.modoTablaAdmin,
        modalAddForm: state.modalAddForm,
        numberEdits: state.numberEdits,
        selecCandidato,
        mostrarModalCandidato,
        cerrarModalCandidato,
        setModoTablaAdmin,
        openAddForm,
        closeAddForm,
        addCandidato,
        obtenerCandidatosUsuario,
        editarCandidato,
        deleteCandidato,
      }}
    >
      {props.children}
    </CandidatosContext.Provider>
  );
};

export default CandidatosState;
