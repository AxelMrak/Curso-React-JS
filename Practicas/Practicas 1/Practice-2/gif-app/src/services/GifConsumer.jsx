import React, { Fragment, useEffect, useState } from 'react';
import Gif from '../components/Gif';



const GifConsumer = ({ keyword }) => {

    const [gifs, setGifs] = useState([])

    const url = `https://api.giphy.com/v1/gifs/search?api_key=otRpzRdhk2LbJmF3ERUezAHFt9ElNef8&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

    useEffect(() => {

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const arrayData = data.data;

            const gifs = arrayData.map(gif => {
               const gifUrl = gif.images.downsized_medium.url;
               const gifTitle = gif.title
            });

            setGifs(gifs)
        })
        .catch(error => {
            console.error("Error in the response of API." + error)
        });


    }, [keyword, url])
    

    return (
        <Fragment>
        {
            gifs.map(gifUnit => {
                return <Gif url={gifUnit.url} title={gifUnit.title}></Gif>
            })
        }  
        </Fragment>
    )
}

export default GifConsumer