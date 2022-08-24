
/**
 * * Segundo que haremos. Este es PADRE DE LA CLASE Contact.
 * * Contendrá las instrucciones de como se renderizan los datos que definimos en la clase. Recibe informacion.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contactClass';

/**
 * 
 * @param {Recibe un contacto como parametros, aunque puede ser props tambien} param0 
 * @returns renderizado
 */

const ContactComponent = ({ contact, remove }) => {

    const [status, setStatus] = useState(contact.online);

    const changeStatus = () => {
        setStatus(!status)
    }

  return (
    <div>
        <h1>Name: {contact.name}</h1>
        <h2>{contact.age}</h2>
        <h3>{contact.country}</h3>
        <p>{status ? 'Online' : 'Offline'}</p>
        <button onClick={changeStatus}>Change</button>
        <button onClick={() => remove(contact)}>X</button>
    </div>
  )
}

/**
 * * El contact en los parametros es una instancia de la clase CONTACT
 */

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent