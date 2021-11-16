import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import CandidatosContext from "../../context/candidatos/candidatosContext";

const TarjetaCandidato = ({ candidato }) => {
  const { id, nombre, partido, logo, posicion, encuestas, profesion, foto } =
    candidato;

  const candidatosContext = useContext(CandidatosContext);
  const { selecCandidato, mostrarModalCandidato } = candidatosContext;

  const [lugarEncuestas, setLugarEncuestas] = useState({
    mensaje: "",
    color: "",
  });

  useEffect(() => {
    if (encuestas) {
      setLugarEncuestas({
        mensaje: "Buen lugar en las encuestas",
        color: "bien-encuestas",
      });
    } else {
      setLugarEncuestas({
        mensaje: "Mal lugar en las encuestas",
        color: "mal-encuestas",
      });
    }
  }, [encuestas]);

  const mostrarDetalleCandidato = (id) => {
    selecCandidato(id);
    mostrarModalCandidato();
  };
  return (
    <div className="container">
      <div className="card mb-3 mt-5 ">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={foto} className="card-img tarjeta-foto" alt="..." />
          </div>
          <div className="col-md-4 ">
            <div className="card-body ">
              <h2 className="card-title titulo-tarjeta-canditatos ">
                {nombre}
              </h2>

              <p className="texto-tarjeta-canditatos">{partido}</p>
              <img src={logo} className="card-img tajeta-logo" alt="..." />
              <h1>
                <BontonConIcono className="btnn btnn-primario">
                  <FontAwesomeIcon
                    className="tajerta-icono-posicion"
                    icon={faInfoCircle}
                    size="xs"
                  />
                  {posicion}
                </BontonConIcono>
                <BontonPEncuestas
                  className={`btnn btnn-primario ${lugarEncuestas.color}`}
                >
                  {lugarEncuestas.mensaje}
                </BontonPEncuestas>
              </h1>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="col-10"></div>
                  <div className="col-2">
                    <div className="card border-secondary">
                      <h3 className="card-title numero-de-tarjeta">{id}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="px-4">{profesion}</h5>
              <div className="dropdown-divider mt-3"></div>
              <div className="row ">
                <div className="col-12 d-flex justify-content-center ">
                  <BotonMasInfo
                    className="btnn btnn-primario "
                    onClick={() => mostrarDetalleCandidato(id)}
                  >
                    <FontAwesomeIcon
                      className="tajerta-icono-posicion m-4"
                      icon={faInfoCircle}
                      size="2x"
                    />
                    Ver detalle
                  </BotonMasInfo>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaCandidato;

const BontonConIcono = styled.button`
  margin-right: 1rem;
`;

const BontonPEncuestas = styled.button`
  margin-right: 1rem;
`;

const BotonMasInfo = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  padding-left: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 2rem;
  background-color: #5f4999;
  &:hover {
    background-color: #5a4886;
  }
`;
