import React, { useReducer } from "react";
import alertaReducer from "./alertaReducer";
import { MOSTRAR_ALERTA } from "../../types";
import AlertaContext from "./alertasContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AlertaState = (props) => {
  const MySwal = withReactContent(Swal);
  const initialState = {
    alerta: null,
  };

  const [state, dispatch] = useReducer(alertaReducer, initialState);

  // Funciones

  const mostrarAlerta = (msg, cat) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: { msg, cat },
    });

    switch (cat) {
      case "error":
        return MySwal.fire({
          icon: "error",
          title: "Algo falló...",
          text: msg,
        });

      default:
        return MySwal.fire({
          title: msg,
          width: 600,
          padding: "3em",
          confirmButtonColor: "#244f99",
          background: "#fff ",
          backdrop: `
                          rgba(0,0,123,0.4)
                          left top
                          no-repeat
                        `,
        });
    }
  };

  return (
    <AlertaContext.Provider
      value={{
        mostrarAlerta,
        alerta: state.alerta,
      }}
    >
      {props.children}
    </AlertaContext.Provider>
  );
};

export default AlertaState;
