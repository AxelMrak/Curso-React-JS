import React from 'react'

const Gif = ({gifs}) => {

    gifs.map(gif => {
        const name = gif.title;
        const url = gif.url;
    })

  return (
    <div className='Gif-unit'>
        <h1>{name}</h1>
        <img src={url}></img>
    </div>
  )
}

export default Gif