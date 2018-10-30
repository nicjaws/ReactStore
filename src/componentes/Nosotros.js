import React, { Component } from 'react'
import '../css/Nosotros.css';


class Nosotros extends Component {
    render() { 
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="iamgen nosotros"/>
                </div>
                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus auctor elit quis blandit. Morbi vitae purus turpis. Integer pellentesque non mauris id volutpat. Aenean interdum neque vel metus auctor suscipit. Maecenas efficitur vulputate interdum. Sed sit amet lacus posuere, tempus purus et, bibendum dolor. Donec sit amet arcu vel quam tincidunt rutrum eu eget mi. Duis ut volutpat libero. Pellentesque non tellus libero. Nam quis ornare velit. Aliquam finibus, neque a tempus dignissim, tellus dui consectetur nibh, quis aliquam velit nisi vehicula turpis. Proin tristique ante venenatis velit rutrum, a viverra massa ornare. Nulla lacinia a odio sit amet consequat. Nunc felis arcu, venenatis eu dolor vitae, malesuada faucibus nibh.</p>
                </div>
            </div>
          );
    }
}
 
export default Nosotros;