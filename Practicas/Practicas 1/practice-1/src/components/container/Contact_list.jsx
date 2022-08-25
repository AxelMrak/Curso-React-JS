
/**
 * * Lo segundo que haremos, este contiene la lógica de ContactComponent y tambien lo renderiza.
 */

import React, { useState } from 'react'
import { Contact } from '../../models/contactClass'
import ContactForm from '../form/ContactForm';
import ContactComponent from '../pure/contact'
import '../styles/list.css'

const ContactList = () => {


    /**
     * * Definimos unos contactos que son instancias de la clase Contact, aunque podemos prescindir de ellos. Es solo de muestra o para establecer por defecto.
     */
    const contact1 = new Contact('Marco', 21, 'Italy', false);
    const contact2 = new Contact('John', 15, 'United States', true);
    const contact3 = new Contact('Eduardo', 24, 'Argentina', false);

    /**
     * *Inicializamos un estado que contendra un array vacio que luego será rellenado con la funcion addContact. 
     */
    const [contacts, setContacts] = useState([contact1, contact2, contact3]);



    /**
     * * Esta funcion añade un contacto a la lista.
     * @param {Recibe un contact} contact 
     * ? Primero se traen los contactos mediante un spread sintaxis, y se guardan en la constante
     * ? Luego empuja o mete el contacto con push al array vacio
     * ? Luego regenera el estado de la lista con ese contacto agregado, esto hace que se renderice.
     */
    const addContact = contact => {
        const contactsArray = [...contacts];
        contactsArray.push(contact);
        setContacts(contactsArray);
    };

        /**
     * * Esta funcion añade un contacto a la lista.
     * @param {Recibe un contact} contact 
     * ? Primero se traen los contactos mediante un spread sintaxis, y se guardan en la constante
     * ? Luego quita el contacto con splice al array de contactos
     * ? Luego regenera el estado de la lista con ese contacto eliminado, esto hace que se renderice.
     */

    const removeContact = contact => {
        const contactsArray = [...contacts];
        contactsArray.splice(contact, 1);
        setContacts(contactsArray);
    };

    /**
     * * Este cambia el estado de conexion del contacto
     * @param {contacto} contact
     * ? Primero obtiene la posicion del contacto en el que se para
     * ? Luego las propiedades del contacto son traidas mediante el spread sintaxis.
     * ? Luego de ese contacto en ese indice se referencia al valor online, y se cambia al contrario. Es decir, si el online es true se cambia a false. 
     */

    const changeState = contact => {
        const index = contacts.indexOf(contact);
        const temporalContact = [...contacts];
        temporalContact[index].online = !temporalContact[index].online;
        setContacts(temporalContact);
    }


    return (
        <div >
            {/* Se recorre el estado inicial definido en el useState, este se llama contacts */}
            {/* A cada elemento o posicion se le coloca el nombre contact */}
            {/* Esto devuelve el ContactComponent */}
            {/* Se le pasan los parametros que definimos en ContactComponent, en este caso recibe el contacto que se encuentre en la posicion por donde pase el map */}
            {contacts.map((contact, index) => {
               
                return (
                    <ContactComponent key={index} contact={contact} remove={removeContact} changeStatus={changeState}></ContactComponent>
                )
            })}
            {/* Añadimos el formulario para agregar el contacto. Este tiene el parametro add que contiene la funcion que agrega el contacto */}
            <ContactForm add={addContact}></ContactForm>
        </div>
    )
}

export default ContactList