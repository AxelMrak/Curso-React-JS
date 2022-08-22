import React from 'react'

const Child = ({ name }) => { //Con las llaves estamos poniendo props concretas. Sin las llaves ponemos props y luego las colocamos dentro del componente

    const pressButton = () => {
        alert(`Default Text`)
    };

    const pressButtonParams = (text) => {
        alert(`Text: ${text}`);
    }


  return (
    <div>
        <p onMouseOver={() => {
            alert(`You are in the P`) //Funcion embebida dentro del html
        }}>Child Component</p>
        <button onClick={pressButtonParams(`Hola`)}> Boton 1</button>
        <button onClick={pressButton}> Boton 2 </button> //Funcion referenciada
    </div>
  )
}

export default Child