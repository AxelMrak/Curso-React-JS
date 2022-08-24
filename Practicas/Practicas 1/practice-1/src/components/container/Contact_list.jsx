
/**
 * * Lo segundo que haremos, este contiene la lógica de ContactComponent y tambien lo renderiza.
 */

import React, { useState } from 'react'
import { Contact } from '../../models/contactClass'
import ContactForm from '../form/ContactForm';
import ContactComponent from '../pure/contact'

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
     * ? Primero trae el array vacio y lo guarda en la const temporalContact
     * ? Luego empuja o mete el contacto con push al array vacio
     * ? Luego regenera el estado de la lista con ese contacto agregado, esto hace que se renderice.
     */
    const addContact = contact => {
        const emptyArray = [...contacts];
        emptyArray.push(contact);
        setContacts(emptyArray);
    };

    const removeContact = contact => {
        const emptyArray = [...contacts];
        emptyArray.splice(contact, 1);
        setContacts(emptyArray);
    };


    return (
        <div>
            {/* Se recorre el estado inicial definido en el useState, este se llama contacts */}
            {/* A cada elemento o posicion se le coloca el nombre contact */}
            {/* Esto devuelve el ContactComponent */}
            {/* Se le pasan los parametros que definimos en ContactComponent, en este caso recibe el contacto que se encuentre en la posicion por donde pase el map */}
            {contacts.map((contact, index) => {
               
                return (
                    <ContactComponent key={index} contact={contact} remove={removeContact}></ContactComponent>
                )
            })}
            {/* Añadimos el formulario para agregar el contacto. Este tiene el parametro add que contiene la funcion que agrega el contacto */}
            <ContactForm add={addContact}></ContactForm>
        </div>
    )
}

export default ContactList