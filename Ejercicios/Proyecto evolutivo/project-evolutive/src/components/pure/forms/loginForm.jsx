//Componente que contiene un formulario para autenticacion de usuarios

import React, { useState } from 'react'

export default function loginForm() {

    //Inicializamos las credenciales
    const initialCredentials = [ 
        {
            user: ``,
            password: ``
        }
    ];

    const [credential, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    )
}
