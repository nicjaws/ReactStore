import React from 'react';

const Producto = (props) => {
    const {imagen, nombre, precio, id} = props.informacion; 

    return ( 
        <li>
            <img src={`img/${imagen}.png`} alt={nombre}/>
            <p>{nombre} <span>${precio}</span></p>
            <a href="#"> Más Información</a>
        </li>
     );
}
 
export default Producto;