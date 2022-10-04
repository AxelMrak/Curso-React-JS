import { Button } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { useState } from 'react'
import { APIRequest } from '../services/APIRequest'
import JokesPure from './JokesPure'
import SaveJokes from './SaveJokes'

function JokesContainer() {

    const [jokes, setJokes] = useState([])

    useEffect(() => {
        request();
    }, [])


    const request = () => {
        APIRequest()
            .then(response => {
                setJokes(response.value)
            })
            .catch(error => console.error(error))
    }

    return (
        <Fragment>
            <JokesPure jokes={jokes} />
            <Button variant='contained' onClick={request}>New Joke</Button>
            <SaveJokes request={request}/>
        </Fragment>

    )
}

export default JokesContainer