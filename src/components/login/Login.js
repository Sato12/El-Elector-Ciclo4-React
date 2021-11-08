import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
      if(email.length > 0 && password.length > 0){
        MySwal.fire({
            title: 'Gato para introducir mas de un campo.',
            width: 600,
            padding: '3em',
            background: '#fff url(https://sweetalert2.github.io/#examplesimages/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://image.jimcdn.com/app/cms/image/transf/none/path/s7a7866289313eaaa/image/i5f8936f5a2ca1dd6/version/1405717936/image.gif")
              left top
              no-repeat
            `
          })
      }
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if((e.target.email.value == "prueba@prueba.com") && (e.target.password.value =="12345678")){
        MySwal.fire({
            icon: 'success',
            title: <p>Bienvenido ElElector</p>,
            footer: 'Pagina en proceso',
          })
    } else{
        MySwal.fire({
            icon: 'success',
            title: <p>Sus credenciales no han funcionado con exito 	🦊</p>,
            footer: 'Pagina en proceso',
          }).then((result) => {
              window.location.replace("/");
          })
    }
  }

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
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}