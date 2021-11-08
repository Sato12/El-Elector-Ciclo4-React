import styled from "@emotion/styled";
import React from "react";
import logoL from "../../Images/svg/logoL.svg";

const BarraListado = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-sm-12 ">
          <nav className="navbar navbar-light barra-candidatos navbar-expand-lg">
            <div className="col-sm-12 ">
              <p className="navbar-brand">
                <img
                  src={logoL}
                  width="70"
                  height="70"
                  className="d-inline-block align-top"
                  alt="L"
                />
                <EnunciadoBarra>Candidatos</EnunciadoBarra>
                <EnunciadoBarra>Precandidatos</EnunciadoBarra>
              </p>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BarraListado;

const EnunciadoBarra = styled.button`
  margin-top: 1rem;
  padding: 2rem;
  padding-left: 2rem;
  font-family: "Montserrat", sans-serif;
  background-color: #e3f2fd;
  border: none;
  font-weight: 300;
  display: flex;
`;
