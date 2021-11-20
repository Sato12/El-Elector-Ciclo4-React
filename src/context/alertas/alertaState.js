import React,{useReducer} from 'react';
import alertaReducer from './alertaReducer';
import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from "../../types";
import AlertaContext from './alertasContext';


const AlertaState = (props) =>{

    const initialState = {
        alerta: null,
    };

    const [state, dispatch] = useReducer(alertaReducer, initialState);

    // Funciones 

    const mostrarAlerta = (msg, cat) =>{

        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {msg,cat}
        });

    };

    const ocultarAlerta = ()=>{
        dispatch({
            type:OCULTAR_ALERTA
        });
    };
    return(
        <AlertaContext.Provider

            value={{

            }}

        >
            {props.children}
        </AlertaContext.Provider>
    );
};

export default AlertaState;

