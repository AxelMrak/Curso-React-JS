
/**
 * * Segundo que haremos. Este es PADRE DE LA CLASE Contact.
 * * Contendrá las instrucciones de como se renderizan los datos que definimos en la clase. Recibe informacion.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contactClass';
import '../styles/contact-styles.css'

/**
 * 
 * @param {Recibe un contacto como parametros, aunque puede ser props tambien} param0 
 * @returns renderizado
 */

const ContactComponent = ({ contact, remove, changeStatus }) => {

  return (
    <div className='Contact-unit'>
        <h1>{contact.name}</h1>
        <h2>{contact.age}</h2>
        <h3>{contact.country}</h3>
        <h4>{contact.online ? (<h4>Online</h4>) : (<h4>Offline</h4>)}</h4>
        <button onClick={() => remove(contact)}>Remove</button>
        <button onClick={() => {changeStatus(contact)}}>{contact.online ? 'Offline' : 'Online'}</button>
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