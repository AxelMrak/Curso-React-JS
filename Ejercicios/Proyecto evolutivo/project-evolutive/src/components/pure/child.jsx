import React, { useRef } from 'react'

const Child = ({ name, send, update }) => { //Con las llaves estamos poniendo props concretas. Sin las llaves ponemos props y luego las colocamos dentro del componente

    const messageRef = useRef(``);
    const nameRef = useRef(``)

    const pressButton = () => {
        const text = messageRef.current.value; //Esto nos permite acceder al valor del elemento
        alert(`Text in input: ${text}`)
    };

    const pressButtonParams = (text) => {
        alert(`Text: ${text}`);
    }

    const submitName = e => {
        e.preventDefault();
        update(nameRef.current.value);
    };


    return (
        <div style={{ background: 'cyan', padding: '1rem' }}>
            {/* Funcion embebida dentro del html */}
            <p onMouseOver={() => {
                console.info(`You are in the P`)
            }}>Hello, {name}</p>
            {/* Para funcion con parametros debemos hacerlo con una funcion anonima para que no se ejecute todo el tiempo cuando se renderice la pagina  */}
            <button onClick={() => pressButtonParams(`Hola`)}> Boton 1</button>
            {/* Funcion referenciada */}
            <button onClick={pressButton}> Boton 2 </button>
            <input placeholder='Send a text to your father'
                onFocus={() => console.log(`Focused`)}
                onChange={(e) => console.log(`Changed`, e.target.value)}
                onCopy={() => alert(`Copied text`)}
                ref={messageRef} //Asociamos el ref, y podemos acceder en cualquier momento a su valor
            ></input>
            <button onClick={() => send(messageRef.current.value)}>Send Message</button>
            {/* Le enviamos el mensaje al padre para que trate los datos como quiera */}
            <div style={{ marginTop: '1rem' }}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name'></input>
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    )
}

export default Child