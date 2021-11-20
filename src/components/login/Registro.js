import React,{useState, useContext} from 'react';
import authContext from '../../context/auth/authContext';


const Registro = ()=>{

    const authContextt = useContext(authContext);
    const {registrarUsuario} = authContextt;

    const [user, setUser] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmar: "",
      });

    const { nombre, email, password, confirmar } = user;

    const handleOnChange = (e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value,
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (
            nombre.trim() === "" ||
            email.trim() === "" ||
            password.trim() === "" ||
            confirmar.trim() === ""
          ) {
            console.log("Todos los campos son obligatorios...");
            return;
          }
        
        if (password !== confirmar) {
            console.log("Las contraseñas no coinciden");
            return;
        }

        // Mandarlo al dispatch

        registrarUsuario({
            nombre,
            email, 
            password
        });


    };

    return(
        <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1 className="mb-5">Crea tu cuenta</h1>

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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password123"
                value={password}
                onChange={handleOnChange}
              />
            </div>
            <div className="campo-form">
              <label htmlFor="confirmar">Repite tu password</label>
              <input
                type="password"
                id="confirmar"
                name="confirmar"
                placeholder="password123"
                value={confirmar}
                onChange={handleOnChange}
              />
            </div>
            <div className="campo-form">
              <input
                type="submit"
                className="btnn btnn-primario btnn-block"
                value="Registrarse"
              />
            </div>
          </form>
          <a>
            Volver a iniciar sesión
          </a>
        </div>
      </div>
    );
};

export default Registro;

