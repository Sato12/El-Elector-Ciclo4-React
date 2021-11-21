import React, { useContext, useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import authContext from "../../context/auth/authContext";

const RutaPrivada = ({ component: Component, ...props }) => {
  const authcontext = useContext(authContext);
  const { autenticado } = authcontext;

  const navigate = useNavigate();
  return (
    <Route
      {...props}
      render={(props) =>
        autenticado ? navigate("/") : <Component {...props} />
      }
    />
  );
};

export default RutaPrivada;
