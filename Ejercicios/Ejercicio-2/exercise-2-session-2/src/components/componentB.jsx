import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from './componentA'

function componentB() {

    const defaultContact = new Contact(`Marco`, `Rosas`, `marcoro@gmail.com`, true)


  return (
    <div>
        <h2>
            Contact:
        </h2>
    </div>
  )
}

componentB.propTypes = {}

export default componentB
