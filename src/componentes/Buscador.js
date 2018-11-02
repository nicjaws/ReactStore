import React, { Component } from 'react';
import '../css/Buscador.css';

class Buscador extends Component {

    leerDatos = (e) => {
        console.log(e.target.value);
      }

    render() { 
        return ( 
            <form className="buscador">
                <input type="text" placeholder="Búsqueda" onChange={this.leerDatos} />
            </form>
         );
    }
} 
export default Buscador;