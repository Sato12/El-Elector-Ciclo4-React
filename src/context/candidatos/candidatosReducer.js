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

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SELECCIONAR_CANDIDATO:
      return {
        ...state,
        candidatoSelected: state.candidatos.filter(
          (candidato) => candidato._id === action.payload
        ),
      };

    case CANDIDATO_MODAL:
      return { ...state, detalleModal: true };

    case CERRAR_CMODAL:
      return { ...state, detalleModal: false, candidatoSelected: null };

    case ADMIN_TABLA:
      return { ...state, modoTablaAdmin: action.payload };

    case MODAL_ADDFORM:
      return { ...state, modalAddForm: true };

    case CLOSE_ADDFORM:
      return { ...state, modalAddForm: false, candidatoSelected: null };

    case AGREGAR_CANDIDATO:
      return { ...state, candidatos: [...state.candidatos, action.payload] };

    case OBTENER_CANDIDATOS:
      return { ...state, candidatos: action.payload.candidatos };

    case CONTAR_EDITS:
      return { ...state, numberEdits: state.numberEdits + 1 };

    case ELIMINAR_CANDIDATO:
      return {
        ...state,
        candidatos: state.candidatos.filter(
          (candidato) => candidato._id !== action.payload
        ),
      };

    default:
      return state;
  }
};
