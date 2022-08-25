/**
 * * Este componente es hijo de ComponentList.
 * * Es el formulario para agregar contactos, esto significa que la informacion colocada alli se remite a contacts en el componente padre.
 */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contactClass';
import '../styles/form-styles.css'

const ContactForm = ({ add }) => {


    /**
     * * Definimos constantes que contendran el hook useRef.
     * * Este hook hace referencia a un elemento del DOM, este elemento del DOM es el campo input correspondiente a cada uno.
     * ? Colocamos un tipo de dato por default tambien.
     */
    const nameRef = useRef('');
    const ageRef = useRef(0);
    const countryRef = useRef('');


    /**
     * * Esta funcion añade la informacion para ser renderizada por ContactList, saca la informacion a traves del useRef y la coloca en cada argumento al momento de instanciar el nuevo objeto contacto.
     * * Luego de esto el add sera el nuevo contacto que es guardado en la constante definida con anterioridad.
     * @param {Evento} e 
     */
    const addContact = e => {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            ageRef.current.value,
            countryRef.current.value,
            false
        );
        add(newContact);
    }

  return (
    /**
     * * El formulario AL ENVIAR ejecuta la funcion addContact
     * * Cada input tiene referencia a su useRef correspondiente. Esto permite sacar el valor ingresado y colocarlo como argumento al momento de instanciar un nuevo objeto.
     */
    <form onSubmit={addContact}>
        <input type='text' placeholder='Name' ref={nameRef} required></input>
        <input type='number' placeholder='0-150' ref={ageRef} required></input>
        <input type='text' placeholder='Italy' ref={countryRef} required></input>
        <button type='submit'> + </button>
    </form>
  )
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;