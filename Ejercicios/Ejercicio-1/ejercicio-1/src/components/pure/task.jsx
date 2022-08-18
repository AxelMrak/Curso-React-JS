import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'

function TaskComponent({ task }) { //Le pasamos TaskComponent en vez de props.


    useEffect(() => {

        console.log(`Created Task`)

        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        }
    }, [task])




    return (
        <div>
            <h2>
                Name: {task.name}
                {/* Vamos sacando las propiedades de task y las pintamos en el div padre */}
            </h2>
            <h3>
                Description: {task.description}
            </h3>
            <h4>
                Level: {task.level}
            </h4>
            <h5>
                This task is: {task.completed ? `Completed` : `Pending`}
                {/* Lo anterior es renderizado condicional, utilizando el operador ternario, le decimos que si la tarea esta completa haga algo y sino que haga otra cosa. Incluso podriamos pasarle otra variable y hacerlo reactivo a lo que suceda en otro lugar.  */}
            </h5>
        </div>
    )
}

TaskComponent.propTypes = {
    TaskComponent: PropTypes.instanceOf(Task) //Es una instancia de la clase Task. Esto esta pasando el dato, se pueden pasar hasta funciones. Datos primitivos y complejos, y hasta funciones.
};

export default TaskComponent
