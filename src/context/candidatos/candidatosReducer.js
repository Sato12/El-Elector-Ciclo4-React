import {
  SELECCIONAR_CANDIDATO,
  CANDIDATO_MODAL,
  CERRAR_CMODAL,
  ADMIN_TABLA,
  MODAL_ADDFORM,
  CLOSE_ADDFORM,
  AGREGAR_CANDIDATO,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SELECCIONAR_CANDIDATO:
      return {
        ...state,
        candidatoSelected: state.candidatos.filter(
          (candidato) => candidato.id === action.payload
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
      return { ...state, modalAddForm: false };

    case AGREGAR_CANDIDATO:
      return { ...state, candidatos: [...state.candidatos, action.payload] };

    default:
      return state;
  }
};
