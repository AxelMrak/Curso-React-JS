import React, { useEffect, useState } from 'react'
import ApiConsumer from '../../services/apiConsumer'
import Gif from '../Gif'

const GifList = () => {

    const [gifs, setGifs] = useState([])

    ApiConsumer({ keyword: 'hello that' }).then(gifs => setGifs(gifs));
    

    return (
        <Gif props={gifs}></Gif>
    )
}

export default GifList