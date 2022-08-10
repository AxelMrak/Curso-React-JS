import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './contact.class';

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
        { Contact.online ? `Contact is online` : `Contact is offline` }
    </h4>
    </div>
  )
}

ContactComponent.propTypes = {
  ContactComponent: PropTypes.instanceOf( Contact ),
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  online: PropTypes.bool
}

export default ContactComponent
