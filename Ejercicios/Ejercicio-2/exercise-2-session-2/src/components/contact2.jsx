import React from 'react'
import { Contact } from './contact.class'
import ContactComponent from './contactComponent'

function Contact2() {

    const defaultContact = new Contact(`Axel`, `Polo`, `axelmrak@live.com`, true)

  return (
    <div>
        <ContactComponent Contact={defaultContact}></ContactComponent>
    </div>
  )
}

export default Contact2