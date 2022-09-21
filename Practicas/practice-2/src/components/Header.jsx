import React from 'react'

function Header() {

    const style = {
        backgroundColor: 'tomato',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
    }

  return (
    <header style={style}>
        <h1> Tasks Project </h1>
    </header>
  )
}

export default Header