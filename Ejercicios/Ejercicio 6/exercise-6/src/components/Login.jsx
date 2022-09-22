import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'

function Login() {

    const history = useHistory();

    const userInput = useRef()
    const passInput = useRef()

    const user = localStorage.getItem('Users')
    const pass = localStorage.getItem('Pass')

    const getData = () => {
        if( user === userInput.current.value && pass === passInput.current.value ){
            history.push('/tasks')
        } else {
            alert('You must be logged')
        }
        
    }

  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', rowGap: '1rem' }}>
        <label htmlFor='user'>Your username: </label>
        <input name='user' type='text' placeholder='JohnDoe123' ref={userInput}></input>
        <label htmlFor='pass'>Password: </label>
        <input name='pass' type='password' ref={passInput}></input>
        <button onClick={getData}>Login</button>
    </div>
  )
}

export default Login