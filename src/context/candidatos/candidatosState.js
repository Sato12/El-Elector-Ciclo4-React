import React, { useReducer } from "react";
import {
  SELECCIONAR_CANDIDATO,
  CANDIDATO_MODAL,
  CERRAR_CMODAL,
  ADMIN_TABLA,
  MODAL_ADDFORM,
  CLOSE_ADDFORM,
} from "../../types";
import CandidatosContext from "./candidatosContext";
import candidatosReducer from "./candidatosReducer";

import logo from "../../Images/svg/logoColombiaHumana.jpg";
import logo2 from "../../Images/svg/logo2.jpg";
import logo3 from "../../Images/svg/logoParty3.jpg";
import foto from "../../Images/svg/petro.jpg";
import foto2 from "../../Images/cabal.jpg";
import foto3 from "../../Images/fajardo.jpg";

const CandidatosState = (props) => {
  // Lista que se recive de la api
  const candidatosListaInicial = [
    {
      id: 1,
      nombre: "Gustavo Petro Urrego",
      fullNombre: "Gustavo Francisco Petro Urrego",
      descripcionBreve:
        "Gustavo Francisco Petro Urrego (Ciénaga de Oro, Córdoba, 19 de abril de 1960) es un político y economista colombiano de ascendencia italiana,1​ actual Senador de la República para el periodo legislativo 2018-2022, líder fundador del movimiento político Colombia Humana. Fue candidato para la presidencia de Colombia en 2010 y 2018.2​ Actualmente es candidato presidencial para las elecciones de 2022. En 2020 la Corte Interamericana de Derechos Humanos emitió un fallo en contra del Estado Colombiano por haber destituido y obstruido la alcaldía de Bogotá de Petro en el año 2013. Desde temprana edad vivió en Zipaquirá, Cundinamarca y en esta ciudad ocuparía diversos cargos públicos.4​ En su juventud fue parte de la organización guerrillera insurgente colombiana Movimiento 19 de abril, quiénes se desmovilizaron el 8 de marzo de 1990.5​ Fue Senador de la República por el Polo Democrático Alternativo (PDA), cargo al que accedió en las elecciones de 2006.6​7​ En 2009 renunció a su cargo para aspirar a la Presidencia de Colombia en las elecciones de 2010 en representación del mismo partido. Fue alcalde de Bogotá entre 2012 y 2015.Es precandidato para las elecciones presidenciales de Colombia de 2022 por la coalición política denominada Pacto Histórico.",
      partido: "Candidato de la Colombia Humana",
      genero: "M",
      cargos: [
        "Senador",
        "Alcalde de Bogotá",
        "Representante de la camara",
        "Secretario De Relaciones Exteriores",
        "Concejal de Zipaquirá",
        "Personero de Zipaquirá",
      ],
      formacion: ["Economía", "Estudios especializados en desarrollo"],
      logo,
      posicion: "Izquierda",
      encuestas: true,
      profesion: "Economista",
      foto,
      sigep:
        "https://www.funcionpublica.gov.co/web/sigep/hdv/-/directorio/M2735809-0925-4/view",
    },
    {
      id: 2,
      nombre: "Maria Fernanda Cabal",
      fullNombre: "María Fernanda Cabal Molina",
      descripcionBreve:
        "María Fernanda Cabal Molina nació en Cali, el 8 de agosto de 1964 es una politóloga5​ egresada de la Universidad de los Andes, universidad donde antes de graduarse trabajó como directora del Programa Democracia del Departamento de Ciencia Política. Estudió Literatura e Historia en el Instituto Universitario de Investigación Ortega y Gasset (IUIOG) en España. En septiembre del 2003 fundó la agencia de viajes para estudiantes Student Travel Center y se desempeñó como presidenta6​ de la Fundación Colombia Ganadera, donde creó un programa de acompañamiento a víctimas del terrorismo en Colombia. En el año 2006 fue nombrada por Mario Iguarán como directora de Asuntos Internacionales de la Fiscalía General de la Nación. Entre sus logros se destaca el fortalecimiento de los lazos de cooperación con todos los países aliados, labor que fue reconocida por el Departamento de Justicia de Estados Unidos.",
      partido: "Candidata del Centro Democrático",
      genero: "F",
      cargos: [
        "Representante Student Travel Center",
        "Directora de Asuntos Internacionales - Fiscalía",
        "Representante a la camara",
        "Senadora",
      ],
      formacion: ["Ciencia Política", "Literatura e Historia"],
      logo: logo2,
      posicion: "Derecha",
      encuestas: true,
      profesion: "Politologa",
      foto: foto2,
      sigep:
        "https://www.camara.gov.co/representantes/maria-fernanda-cabal-molina",
    },
    {
      id: 3,
      nombre: "Sergio Fajardo",
      fullNombre: "Sergio Fajardo Valderrama",
      descripcionBreve:
        "Matemático de la Universidad de los Andes, Magíster y Doctor en matemáticas de la Universidad de Wisconsin, Magíster de la Universidad de los Andes y Doctor Honoris Causa de la Universidad Internacional Menéndez Pelayo, España (2009) y la Universidad Nacional de Córdoba, Argentina (2015). Fue profesor de lógica matemática en la Universidad de los Andes y la Universidad Nacional de Colombia. Es hijo de Raúl Fajardo Moreno, reconocido arquitecto antioqueño quién diseñó el edificio Coltejer y María Elena Valderrama.1​ Sus hijos son Mariana y Alejandro Fajardo Arboleda.Comenzó su vida profesional como profesor de la Universidad de los Andes donde llegó a ser director de investigación y director del Departamento de Matemáticas[cita requerida], así como profesor en la Universidad Nacional. También trabajó en medios como Subdirector de El Colombiano y columnista de El Mundo, El Espectador y la Revista Dinero; trabajó en los programas de televisión; Operación Ciudad de Telemedellín y Zanahoria de Teleantioquia y perteneció al equipo de Viva FM en Caracol Estéreo de Caracol Radio, como parte del equipo periodístico del programa 6AM Hoy por Hoy.En 1994, hizo parte de la Comisión Facilitadora de Paz de Antioquia durante la gobernación de Álvaro Uribe.En el año 2003, fue elegido como el primer alcalde independiente de Medellín. En sus cuatro años como mandatario dirigió una transformación importante de la ciudad, labor por la que obtuvo diferentes reconocimientos nacionales e internacionales.",
      partido: "Candidato de la Alianza Verde",
      genero: "F",
      cargos: [
        "Director del Centro de Ciencia y Tecnología de Antioquia",
        "Junta Directiva de la Fundación de Apoyo a la Universidad de Antioquia",
        "Subdirector de El Colombiano",
        "Alcaldía de Medellín",
        "Gobernación de Antioquia",
      ],
      formacion: ["Matemáticas", "PhD Matemáticas"],
      logo: logo3,
      posicion: "Centro",
      encuestas: false,
      profesion: "Matemático",
      foto: foto3,
      sigep: "unlink.com",
    },
  ];

  const initialState = {
    candidatos: candidatosListaInicial,
    candidatoSelected: null,
    detalleModal: false,
    modoTablaAdmin: true,
    modalAddForm: false,
  };

  // Crear dispatch y state => Hook: useReducer
  const [state, dispatch] = useReducer(candidatosReducer, initialState);

  // Seleccionar un candidato de la lista
  const selecCandidato = (candidatoId) => {
    dispatch({
      type: SELECCIONAR_CANDIDATO,
      payload: candidatoId,
    });
  };

  // Mostrar los detalles del candidato en un modal
  const mostrarModalCandidato = () => {
    dispatch({
      type: CANDIDATO_MODAL,
    });
  };

  // Cerrar los detalles del candidato
  const cerrarModalCandidato = () => {
    dispatch({
      type: CERRAR_CMODAL,
    });
  };

  // Mostrar en admin candidatos o partidos
  const setModoTablaAdmin = (modo) => {
    dispatch({
      type: ADMIN_TABLA,
      payload: modo,
    });
  };

  // Abrir el Form en Admin de agregar candidato
  const openAddForm = () => {
    dispatch({
      type: MODAL_ADDFORM,
    });
  };

  // Cerrar el Form en Admin de agregar candidato
  const closeAddForm = () => {
    dispatch({
      type: CLOSE_ADDFORM,
    });
  };

  return (
    <CandidatosContext.Provider
      value={{
        candidatos: state.candidatos,
        candidatoSelected: state.candidatoSelected,
        detalleModal: state.detalleModal,
        modoTablaAdmin: state.modoTablaAdmin,
        modalAddForm: state.modalAddForm,
        selecCandidato,
        mostrarModalCandidato,
        cerrarModalCandidato,
        setModoTablaAdmin,
        openAddForm,
        closeAddForm,
      }}
    >
      {props.children}
    </CandidatosContext.Provider>
  );
};

export default CandidatosState;
