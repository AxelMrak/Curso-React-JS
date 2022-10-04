import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

function SaveJokes({request}) {

    const [badJokes, setBadJokes] = useState(0)
    const [goodJokes, setGoodJokes] = useState(0)

    const iLiked = () => {
        request()
        setGoodJokes(goodJokes + 1)
    }

    const iDontLike = () => {
        request()
        setBadJokes(badJokes + 1)
    }

    return (
        <div>
            <div>
                <p style={{ color: 'green' }}><strong>Good Jokes: </strong>{goodJokes}</p>
                <p style={{ color: 'tomato' }}><strong>Bad Jokes:  </strong>{badJokes}</p>
            </div>
            <Button variant='contained' color='success' style={{ margin: '1rem', cursor: 'pointer' }} onClick={iLiked}>That's great</Button>
            <Button variant='contained' color='error' style={{ margin: '1rem', cursor: 'pointer' }} onClick={iDontLike}>A bad joke</Button>
        </div>
    )
}

export default SaveJokes