import React, {Fragment} from 'react'
import imagen from "../Sobrenosotros/imagen.jpg"

export default function Sobrenosotros() {
  return (
    <Fragment>
    <div className="home-div container">
      <h1>Quienes Somos ?</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 ">
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-3 mt-5 ">
          <img
            src= {imagen}
            alt="asd"
            className="img-fluid mt-5 mx-auto d-block"
            height={1500}
            width={1000}
          />
</div>
</div>
</div>

          <h3>
            Somos una plataforma que centraliza la información verificada de candidatos
            que participan en los diferemtes comicios electorales del país. 
            </h3>
            <br>
            </br>
            <h3>
            Buscamos construir un lugar en donde la sociedad pueda encontrar
            una central de información verificada de acceso público,
            que aporte a la democracia de los gobiernos.
          </h3>
        </div>
      </div>
    </div>
              
        </Fragment>
    );
};




