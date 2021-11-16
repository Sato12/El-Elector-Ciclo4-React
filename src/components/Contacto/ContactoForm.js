import React, {Component} from "react";


export default class PersonForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            lastname:"",
            phone:"",
            email:"",
            message:"",
    }
}


render(){
    return(
        
        <div className="contenedor-contacto">
                <>
                              
                <form>

                <h1> CONTACTENOS </h1>
                <br />        
                <br />

                <label htmlFor="name">Nombre:</label>
                <input id="name" name="name" type="text" 
                placeholder="Escribe tu nombre..."/>

                <label htmlFor="lastname">Apellido:</label>
                <input id="lastname" lastname="lastname" type="text" 
                placeholder="Escribe tu apellido..."/>
                <br />        
                <br />

        
                <label htmlFor="phone">Telefono:</label>
                <input id="phone" phone="phone" type="number" 
                placeholder="Escribe tu telefono..."/>
        
                <label htmlFor="email">Email:</label>
                <input id="email" email="email" type="text" 
                placeholder="Escribe tu email..."/>
                <br />        
                <br />

                <label htmlFor="message">Mensaje:</label>
                <input id="message" message="message" type="text" 
                placeholder="Dejanos tu mensaje..."/>                 <br />        
                <br />
                <button type="submit">Guardar</button>        
                </form>
                </>
                </div>
            );
}
}

