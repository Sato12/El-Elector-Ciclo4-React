import React, { useContext, useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import authContext from "../../context/auth/authContext";
import Admin from "../misc/Admin";

const RutaPrivada = ({ component: Component, ...props }) => {
  const authcontext = useContext(authContext);
  const { autenticado, usuarioAutenticado } = authcontext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return <>{autenticado ? <Admin /> : <Navigate to="/" />}</>;
};

export default RutaPrivada;
