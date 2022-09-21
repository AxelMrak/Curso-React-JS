import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const NotFound = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }


  return (
    <div>
        <h1>404 - Page Not Found</h1>
        <button onClick={goBack}>Go back</button>
    </div>
  )
}

export default NotFound