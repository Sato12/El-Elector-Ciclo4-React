import React, { Fragment } from "react";
import logo from "../../Images/svg/logoAlgo.svg";
import logo2 from "../../Images/svg/logo2.svg";
import logo3 from "../../Images/svg/logo3.svg";

const Home = () => {
  return (
    <Fragment>
      <div className="home-div container">
        <h1>Información para votar a tu alcance</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-7 ">
            <h3>
              Somos una plataforma que centraliza la información de candidatos a
              elecciones. Con esta plataforma se busca aportar en la necesidad
              de una central de información verificada que esté dispuesta al
              público y que sea una ayuda para los gobiernos democráticos.
            </h3>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-3 mt-5">
            <img
              src={logo}
              alt="asd"
              className="img-fluid mt-5"
              height={180}
              width={180}
            />
            <h3 className="mt-3">Información Verificada</h3>
          </div>
          <div className="col-3 mt-5">
            <img
              src={logo2}
              alt="asd"
              className="img-fluid mt-5"
              height={180}
              width={180}
            />
            <h3 className="mt-3">Bases de datos Oficiales</h3>
          </div>
          <div className="col-3 mt-5">
            <img
              src={logo3}
              alt="asd"
              className="img-fluid mt-5"
              height={180}
              width={180}
            />
            <h3 className="mt-3">Datos de Dominio Público</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
