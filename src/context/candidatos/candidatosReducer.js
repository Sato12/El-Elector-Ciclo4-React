import {
  SELECCIONAR_CANDIDATO,
  CANDIDATO_MODAL,
  CERRAR_CMODAL,
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

    default:
      return state;
  }
};
