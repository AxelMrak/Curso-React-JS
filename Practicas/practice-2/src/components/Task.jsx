import React, { useState } from 'react';
import onSwitch from '../img/switch-on-outline.svg'
import offSwitch from '../img/switch-off-outline.svg'


function Task({id, name, completed }) {

    const [complete, setComplete] = useState(completed)

  return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center', columnGap: '1rem' }}>
        <h2>{name}</h2>
          {complete === true ? 
          (<div><h3 style={{color: 'green'}}>Completed</h3>
          <img style={{textAlign: 'center'}} src={onSwitch} onClick={() => setComplete(!complete)} /></div>) 
          : 
          (<div><h3 style={{ color: 'tomato' }}>Not completed</h3><img style={{ textAlign: 'center' }} src={offSwitch} onClick={() => setComplete(!complete)} /></div>)}
    </div>
  )
}

export default Task