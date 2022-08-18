import React, { useEffect, useState } from 'react';

function ClockFunctional(props) {

    /*
     * Creamos un estado para la fecha y la edad. Ambos estan separados, no como en el objeto state del tipo clase.
     */

    const [fecha, setFecha] = useState(new Date()); //fecha inicia con una nueva fecha y se actualiza mediante setFecha
    const [edad, setEdad] = useState(0); //edad inicia en 0 y se modifica con setEdad



    /**
     * * Funcion que actualiza los estados. Le suma uno a la edad y va actualizando la fecha constantemente.
     * ? Retorna los estados actualizados.
     */
    const tick = () => {
        const edad1 = setEdad(edad +1);
        const fecha1 = setFecha(new Date())
        return {
            fecha1,
            edad1
        }
    }



/**
 * * Usamos useEffect ya que replica el ciclo de vida de un componente tipo clase en un componente tipo funcion.
 * ? El componentDidMount se coloca en la primera parte del useEffect. En este encontramos que se crea un timer que tiene un intervalo donde actualiza el estado cada 1 segundo.
 * ? El componentWillMount se coloca en el return, en este componente se limpia el intervalo para dar lugar a la nueva actualizacion cada 1 segundo.
*/
useEffect(() => {

    const timerID = setInterval(() => {
    tick()
    }, 1000);
        

    return () => {
        clearInterval(timerID);
    }

})


/**
 * * Retornamos un h2 que contiene la fecha pasada a un formato que se puede leer facilmente mediante el metodo toLocaleString.
 */

return (
    <div>
        <h2>Hora actual: {fecha.toLocaleTimeString()}</h2>
        <h3>{props.nombre} {props.apellidos}</h3>
        <h1>Edad: {edad}</h1>
    </div>
)

}

export default ClockFunctional;