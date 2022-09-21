import React, { useState } from 'react'

function registerForm() {

    //Inicializamos los datos
    const initialData = [ 
        {
            user: ``,
            name: ``,
            email: ``,
            password: ``
        }
    ];

    // Establece estado con la data
    const [data, setData] = useState(initialData);


  return (
    <div>

    </div>
  )
}

export default registerForm