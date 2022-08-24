import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react'
import  Contact  from '../models/contact.class'
import ContactComponent from './contactComponent'

function Contact2(state) {

    const [conected, setConected] = useState(state)

  return (
    <div>
       <h3>
       {conected === false ? `Offline` : `Online`}
       </h3>
       <button onClick={() => setConected( !conected )}>{ conected === false ? `Online` : `Offline` }</button>
    </div>
  )
}

Contact2.propTypes = {
  state: PropTypes.bool,
};

export default Contact2

/**
 * *Aca se pone la logica, sera el componente de mayor jerarquia. Por tanto, lleva como argumento de funcion el estado. Y dentro se coloca un renderizado que mostrara que si conected es falso se muestra en offline y sino se muestra un online. Esto se podra cambiar por un boton con un evento que regenera el estado. Antes se ha declarado un useState que permite esta regeneracion. Luego se aplica el proptype que corresponde a este componente, el cual indica que el state es de tipo booleano.
 * 
 */