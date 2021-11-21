import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import authContext from "../../context/auth/authContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
