import React from 'react';
import '../css/Navegacion.css';
import {Link} from 'react-router-dom';

const Navegacion = () => {
    return ( 
        <nav className="navegacion">
            <Link to={'/nosotros'}>Nosotros</Link>
            <Link to={'/productos'}>Productos</Link>
            <Link to={'/contacto'}>Contacto</Link>
        </nav>
     );
}
 
export default Navegacion;