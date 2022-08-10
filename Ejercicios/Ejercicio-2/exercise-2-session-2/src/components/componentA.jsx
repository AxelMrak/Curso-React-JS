import PropTypes from "prop-types";

export class Contact {

  // Properties
  name = ``;
  surname = ``;
  email = ``;
  connected = false;

  //Constructor
  constructor(name, surname, email, connected) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.connected = connected;
  };

};

Contact.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  connected: PropTypes.bool
};

