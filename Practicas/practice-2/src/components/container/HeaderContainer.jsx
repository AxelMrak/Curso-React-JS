import React, { useRef, useState } from 'react'
import Header from '../pure/header'
import { Main } from '../pure/main';

export const HeaderContainer = () => {

    const [name, setName] = useState('Axel');


    const changeName = newName => {
        setName(newName)
    }

  return (
    <div>
        <Header name={name} changeName={changeName}/>
        <Main name={name}></Main>
    </div>    
  )
}
