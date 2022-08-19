import React, { useState } from 'react';

/**
 * * Estilos en constantes
*/

// ? Estilo para usuario logeado
const loggedStyle = {
    color: 'white'
}


// ? Estilo para usuario no logeado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

/**
 * 
 * @param {Props} props 
 * @returns Devuelve renderizado condicional
 */

const GreetingStyled = props => {

    //Generamos un estado para el componente que controla si el usuario esta loggeado o no.
    const [logged, setLogged] = useState(false);

    return (
        // Si el usuario esta logged entonces se renderiza el loggedStyle, sino se utiliza unloggedStyle
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ?
                (<p>Hola, { props.name }</p>) :
                (<p>Please Login</p>) }
            {/* Las condiciones de arriba se pueden colocar en variables para que sea mas limpio el codigo */}
            <button onClick={() => {
                setLogged( !logged );
                // Coloca el estado contrario al que se encuentra al momento que se realiza el evento onClick
            }}> { logged ? 'logout' : 'Login' } </button>
            {/* Cambia el contenido del boton dependiendo de si el usuario esta logeado o no. */}
        </div>
    );
};

export default GreetingStyled;
