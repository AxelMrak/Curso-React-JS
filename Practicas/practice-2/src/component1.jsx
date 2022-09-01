import React, { useState } from 'react'

const Component1 = () => {

    const defaultStyle = {
        color: 'red',
        backgroundColor: 'black',
        width: '300px',
        height: '300px'
    }

    const [style, setStyle] = useState(defaultStyle);

    const changeStyle = () => {
        setStyle({ color: 'green', backgroundColor: 'gray', width: '300px', height: '300px' })
    };

    const defaultStyleF = () => {
        setStyle(defaultStyle)
    }

    const [count, setCount] = useState(0);

    const aumentCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <div className='container d-flex-column center' style={style} onMouseEnter={changeStyle} onMouseLeave={defaultStyleF}>
                <h1>Hello that!</h1>
                <p>count: {count}</p>
                <button onClick={aumentCount}>Aument count</button>
            </div>
        </div>
    )
}

export default Component1