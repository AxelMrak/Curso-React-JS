import React from 'react';
import { useState } from 'react';


const Container = () => {


    /**
     * * First, I declare three constants what will be the numbers random. These numbers will go in the backgroundColor, in the RGB the numbers will make the background change color.
     */
    const randomNumber = Math.floor(Math.random() * 255);
    const randomNumber1 = Math.floor(Math.random() * 255);
    const randomNumber2 = Math.floor(Math.random() * 255);

    /**
     * * These properties will go in the state.
     */
    const initialStyle = {
        backgroundColor: `rgb(0,0,0)`,
        width: `255px`,
        height: `255px`
    };

     /**
     * * I generated a new state. 
     */
    const [style, setStyle] = useState(initialStyle);

    /**
     * * These functions will change the state. These methods will be in the respective events in the DIV.
     */
    function mouseEnter() {
        setStyle(
            { backgroundColor: `rgb(${randomNumber}, ${randomNumber1}, ${randomNumber2})` }
        )
    }

    function mouseLeave() {
        setStyle(initialStyle);
    }

    /**
     * ? PreventDefault is required, if the function don't have this parameter will fail.
     * @param {event} e 
     */
    function doubleClick(e) {
        e.preventDefault();
        setStyle(initialStyle)
    }

    return (
        <div 
            style={{ 
                backgroundColor: `${style.backgroundColor}`,
                width: `${style.width}`, 
                height: `${style.height}`
            }} 
        onMouseEnter={mouseEnter} 
        onMouseLeave={mouseLeave}
        onDoubleClick={doubleClick}
        />

    )
}

export default Container