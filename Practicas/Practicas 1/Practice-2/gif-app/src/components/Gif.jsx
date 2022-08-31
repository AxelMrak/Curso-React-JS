import React, { useEffect, useState } from 'react';
import ApiConsumer from '../services/apiConsumer';


const Gif = () => {

    const [gifs, setGifs] = useState([])

    useEffect(() => {
      ApiConsumer({keyword: 'hello that'}).then(gifs => setGifs(gifs))
    }, [])
    
  return (
    <div>
      {gifs.map(gif => {
      return  <div>
              <h4>{gif.title}</h4>
              <img src={gif.url} alt='gif'/>
              </div>
      } )}
    </div>
  )
}

export default Gif