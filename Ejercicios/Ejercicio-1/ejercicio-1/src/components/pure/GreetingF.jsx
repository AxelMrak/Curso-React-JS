import React, { useState } from 'react'; //Traemos un HOOK, que es la funcion useState
import PropTypes from 'prop-types';

const GreetingF = (props) => { //Podriamos pasarle {name} en especifico tambien en el parentesis

    //No podemos agregar un estado mediante constructor por ser funcion. Por tanto tenemos que usar una funcion useState, esta permite crear un estado privado para el componente.
    //ESTRUCTURA DEL USESTATE const [variable, metodo para actualizarlo] = useState(valor inicial)
    const [age, setage] = useState(22);

    const birthday = () => {
        //Esta funcion actualiza el estado
        setage(age - 1) //Agarra el valor que tenia y le resta un 1 donde genera un nuevo estado con eso.
    };

    return (
        <div>
            <h1>
            Hello! {props.name} From functional Component. 
            </h1>
            <h2>
                Your age is: { age }
            </h2>
            <div>
                <button onClick={birthday}>
                More Young
                </button>
            </div>
            {/* Tenemos el name definido manualmente */}

        </div>
    )
}

GreetingF.propTypes = {
    name: PropTypes.string
};

export default GreetingF