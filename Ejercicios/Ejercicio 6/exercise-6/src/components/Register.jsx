import React, { useRef } from 'react'

function Register() {

  const userRef = useRef();
  const passRef = useRef();


  const setCredentials = () => {
    localStorage.setItem('Users', userRef.current.value)
    localStorage.setItem('Pass', passRef.current.value)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', rowGap: '1rem' }}>
        <label htmlFor='name'>Name: </label>
        <input name='name' placeholder='John Doe' type='text'></input>
        <label htmlFor='user' >Username: </label>
        <input name='user' placeholder='JD21G' type='text' ref={userRef}></input>
        <label htmlFor='pass'>Password: </label>
        <input name='pass' type='password' ref={passRef}></input>
        <button onClick={setCredentials}>Send</button>
    </div>
  )
}

export default Register