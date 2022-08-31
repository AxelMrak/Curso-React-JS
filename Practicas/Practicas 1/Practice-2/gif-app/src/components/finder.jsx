import React, { useRef } from 'react'
import ApiConsumer from '../services/apiConsumer'

const Finder = () => {
    
    const searchRef = useRef();

    const searchToApi = () => {
        ApiConsumer(searchRef.current.value)
    }

  return (
    <form>
        <input ref={searchRef} type='text' placeholder='Find your gifs' onSubmit={searchToApi}></input>
        <button type='submit'>Search</button>
    </form>
  )
}

export default Finder