import React, { useRef } from 'react';
import logo from '../../img/icons8-powerschool.svg'
import user from '../../img/icons8-usuario-64.png'
const Header = ({ name, changeName }) => {

    const nameRef = useRef();

    const submitName = e => {
        e.preventDefault();
        changeName(nameRef.current.value)
    }

  return (
    <header>
        <div className='logo-container'>
            <img src={logo}></img>
            <h2>PintMark</h2>
        </div>
        <div className='user-container'>
            <img src={user}></img>
            <p>{name}</p>
            <label htmlFor='name'></label>
            <input type='text' name='name' ref={nameRef}></input>
            <button onClick={submitName}>Submit</button>
        </div>
    </header>
  )
}

export default Header