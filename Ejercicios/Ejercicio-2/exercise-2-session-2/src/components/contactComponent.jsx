import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './contact.class';
import Contact2 from './contact2';

function ContactComponent({ Contact }) {
  return (
    <div>
    <h1>
        { Contact.name } 
    </h1>
    <h2>                 
        { Contact.surname }
    </h2>
    <h3>
        { Contact.email }
    </h3>
    <h4>
    <Contact2 status={true}></Contact2>
    </h4>
    </div>
  )
}

ContactComponent.propTypes = {
  ContactComponent: PropTypes.instanceOf( Contact ),
}

export default ContactComponent

/**
 * !Error mio: Aca no se coloca el if. Sino el estado que tendra el contact 2 que se hara mas adelante.
 * !Otro error: Aca se declara solo la proptype que se usa en este componente. En este caso se dice que este es una instancia de la clase creada anteriormente.
 * 
 */