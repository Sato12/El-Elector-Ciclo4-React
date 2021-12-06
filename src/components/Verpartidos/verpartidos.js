import React, {Fragment} from 'react'
import partidoverde from "./partidoverde.jpg"
import liberal from "./liberal.png"
import conservador from "./conservador.jpg"

export default function Sobrenosotros() {
  return (
    <Fragment>
    <div className="home-div container">
      <h1>Partidos Políticos</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 ">
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-3 mt-5 ">
          <img
            src= {partidoverde}
            alt="asd"
            className="img-fluid mt-5 mx-auto d-block"
            height={5000}
            width={5000}
           
          />

          <img
            src= {liberal}
            alt="asd"
            className="img-fluid mt-5 mx-auto d-block"
            height={5000}
            width={5000}
          
          />

          <img
            src= {conservador}
            alt="asd"
            className="img-fluid mt-5 mx-auto d-block"
            height={5000}
            width={5000}
           
          />
</div>
</div>
</div>
        </div>
      </div>
    </div>
              
        </Fragment>
    );
};