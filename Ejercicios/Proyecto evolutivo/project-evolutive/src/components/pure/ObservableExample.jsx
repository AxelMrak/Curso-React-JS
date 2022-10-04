// With RXJS

 import React, { useState } from 'react'
import { Observable } from 'rxjs';
import { getNumbers } from '../../services/ObservableService';
 
 function ObservableExample() {

    const [number, setNumber] = useState(0)

    const obtainNewNumbers = () => {
        getNumbers.subscribe(
            {
                // Se diferencia de la promesa ya que puede devolver varias valores que se van actualizando
                next(newNumber){
                    console.log(' New Number: ', newNumber);
                    setNumber(newNumber)
                },
                error(error){
                    alert(error)
                },
                complete(){
                    alert('Finished the observable')
                }
                // Simulan el then, el catch y el finally. El next es el then, el error es el catch y el complete es el finally
            }
        )
    }

   return (
     <div>
     {/* Se actualizan los valores y junto con los valores la vista */}
        <h1>Number: {number}</h1>
           <button onClick={obtainNewNumbers}>
            Obtain new numbers
        </button>
     </div>
   )
 }
 
 export default ObservableExample