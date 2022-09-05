import React, { useRef, useState } from 'react'
import GifConsumer from '../services/GifConsumer';

const GifFinder = () => {

    const [keyword, setKeyword] = useState()

    const keywordRef = useRef();


    const sendKeyword = (e) => {
        e.preventDefault();
        setKeyword(keywordRef.current.value)
    }

  return (
    <div>
        <input type='text' ref={keywordRef}></input>
        <button onClick={sendKeyword}> Search </button>
        <GifConsumer keyword={keyword}></GifConsumer>
    </div>
  )
}

export default GifFinder