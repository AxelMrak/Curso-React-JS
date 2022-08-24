import React, { useState } from 'react'
import Child from '../pure/child';

const Father = () => {

  const [name, setName] = useState(`Axel`)

  const showMessage = (text) => {  //Metodo a ser ejecutado por el hijo pero controlado por el padre.
    alert(`Message received: ${text}`)
  };

  const updateName = newName => {
    setName(newName)
  };

  return (
    <div style={{background: 'tomato', padding: '1rem'}}>
        <Child name={name} send={showMessage} update={updateName}></Child>
    </div>
  )
};

export default Father