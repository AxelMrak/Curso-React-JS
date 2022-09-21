import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 120;


/**
 * * Estilos condicional para el boton
 */

const loggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color: 'white'
}


const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}


/**
 * * Componentes que se mostrarán dependiendo la condicion.
 * ? Son componentes puros
 */
const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button onClick={loginAction} style={propStyle}>Login</button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button onClick={logoutAction} style={propStyle}>Logout</button>
    )
}


/**
 * * Componente de alto rango
 */
function OptionalRender() {

    /**
     * * Establecemos un estado en True
     */
    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);


    const loginAction = () => {
        setAccess(true);
    }
    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;


    if (access === true) {
        optionalButton = <LogoutButton logoutAction={logoutAction} propStyle={unloggedStyle}></LogoutButton>
    } else {
        optionalButton = <LoginButton loginAction={loginAction} propStyle={loggedStyle}></LoginButton>
    };

    /**
     * * Unread Messages
     */

    let addMessages = () => {
        setNMessages(nMessages + 1)
    }

    // if(access === true) {
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // } else {
    //     optionalButton = <button onClick={updateAccess}>Login</button>
    // };

    // ? (Expresion True) && (AND) expresion => Se renderiza la expresion
    // * nMessages > 0 SI EL NUMERO DE MENSAJES ES MAYOR QUE 0 SE MUESTRA EL MENSAJE 
    // ? (Expresion False) && (AND) expresion => No se renderiza la expresion
    // * Si el numero de mensajes es menor que 0 no se muestra nada

    return (
        <div>
            {/* Optional Button */}
            {optionalButton}
            {/* Number of messages unread */}
            {access ? 
            (<div>
            <h2>Metodo AND. Mas elegante</h2>
                {nMessages > 0 && nMessages === 1 && <p>You have {nMessages} message unreads...</p>}
                {nMessages > 1 && <p>You have {nMessages} messages unreads...</p>}
                {nMessages === 0 && <p>You don't have messages unread </p>}
                {/* Ejemplo operador ternario. Esto va a fallar, ya que deben cumplirse si o si ambas condiciones para que se renderice el primer elemento, no es como el anterior que permite cambiar el renderizado dependendiendo de varias condiciones */}
                <h2>Metodo Operador ternario</h2>
                {nMessages > 0 && nMessages === 1 ?
                    <p>You have {nMessages} message unreads...</p> : <p>You don't have messages unread </p>}
                {/* Operador ternario que si funciona. */}
                <p>Operador ternario que si funciona</p>
                {nMessages > 0 ?
                    <p>You have {nMessages} message{nMessages > 1 ? 's' : null} unread{nMessages > 1 ? 's' : null}</p> : <p>You don't have messages unread </p>}
                <button onClick={addMessages}>{nMessages === 0 ? 'Add your first message' : 'Add new message'}</button>
                </div>) : (<p>Please, log in for see the messages</p>)}

        </div>
    )
}

export default OptionalRender