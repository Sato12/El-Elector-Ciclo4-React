import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import authContext from "../../context/auth/authContext";
import Form from "react-bootstrap/Form";
import "./Login.css";
import AlertaContext from "../../context/alertas/alertasContext";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authcontext = useContext(authContext);
  const { fallo, iniciarSesion, mensaje, autenticado, revisarAlerta } =
    authcontext;

  const alertaContext = useContext(AlertaContext);
  const { mostrarAlerta } = alertaContext;

  useEffect(() => {
    if (autenticado) {
      navigate("/candidatos");
    }

    if (fallo) {
      mostrarAlerta(mensaje, "error");
      return;
    }
    // eslint-disable-next-line
  }, [revisarAlerta, autenticado]);

  const validateForm = () => {
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios.", "error");
      return false;
    }
    if (password.trim().length < 6) {
      mostrarAlerta("La contraseña debe ser mínimo de 6 carácteres", "error");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    iniciarSesion({ email, password });
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1 className="mb-5">Iniciar Sesión</h1>
        <Form onSubmit={handleSubmit}>
          <div className="login-campo-form">
            <Form.Group size="lg" controlId="email" className="d-flex">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="login-campo-form">
            <Form.Group size="lg" controlId="password" className="d-flex ml-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="d-{block}"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </div>
          <input
            size="lg"
            className="btnn btnn-primario btnn-block"
            type="submit"
            value="Login"
          />
        </Form>
        <p className="mt-4">
          ¿No tienes cuenta?
          <button
            onClick={() => navigate("/registro")}
            className="ms-4 btnn btnn-primario"
          >
            Registrate
          </button>
        </p>
      </div>
    </div>
  );
}
