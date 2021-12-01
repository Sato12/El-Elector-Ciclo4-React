import React, { useState } from "react";
import clienteAxios from "../../config/axios";

const GetInTouch = () => {
  const initialState = {
    nombre: "",
    email: "",
  };

  const [contacto, setContacto] = useState(initialState);
  const { nombre, email } = contacto;

  const handleOnChange = (e) => {
    setContacto({ ...contacto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || email.trim() === "") {
      console.log("No se paso la validación de contacto");
    }
    const rta = await clienteAxios.post("/api/contacto", contacto);
    console.log(rta.data.Preview);
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1 className="mb-5">Contacto</h1>

        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              placeholder="Juan Perez"
              onChange={handleOnChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="email@email.com"
              onChange={handleOnChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btnn btnn-primario btnn-block"
              value="Enviar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
