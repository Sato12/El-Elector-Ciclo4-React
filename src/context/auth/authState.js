import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/authToken";
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
    fallo: false,
    revisarAlerta: 0,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registrarUsuario = async (datos) => {
    try {
      const rta = await clienteAxios.post("/api/usuarios", datos);
      console.log(rta);

      dispatch({
        type: REGISTRO_EXITOSO,
        payload: rta.data,
      });

      // Obtener el usuario
      usuarioAutenticado();
    } catch (error) {
      console.log(error);

      dispatch({
        type: REGISTRO_ERROR,
      });
    }
  };

  // Muestra el usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      //Enviar el token por headers
      tokenAuth(token);

      try {
        const rta = await clienteAxios.get("/api/auth");
        console.log(rta);

        dispatch({
          type: OBTENER_USUARIO,
          payload: rta.data.usuario,
        });
      } catch (error) {
        console.log(error);

        dispatch({
          type: LOGIN_ERROR,
        });
      }
    }
  };

  // Iniciar sesión
  const iniciarSesion = async (usuario) => {
    try {
      const rta = await clienteAxios.post("/api/auth", usuario);

      dispatch({
        type: LOGIN_EXITOSO,
        payload: rta.data,
      });
    } catch (error) {
      console.log(error.response.data);

      dispatch({
        type: REGISTRO_ERROR,
        payload: error.response.data.msg,
      });

      usuarioAutenticado();
    }
  };

  // Cerrar sesión del usuario
  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        fallo: state.fallo,
        revisarAlerta: state.revisarAlerta,
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
