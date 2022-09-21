//Componente que contiene un formulario para autenticacion de usuarios

import React, { useState } from 'react'

export default function loginForm() {

    // Inicializamos credenciales que contiene un array de objetos que contiene un user y su password vacios
    const initialCredentials = [ 
        {
            user: ``,
            password: ``
        }
    ];

    // Establece estado con las credenciales iniciales
    const [credential, setCredential] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    )
}
