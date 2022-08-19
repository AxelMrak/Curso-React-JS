import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';

/**
 * 
 * @param {Se le pasa una task como argumento. Esta task será su hija. Proviene de un componente tipo clase} param0 
 * @returns Devuelve el renderizado
 */
function TaskComponent({ task }) { //Le pasamos TaskComponent en vez de props.

    /**
     * * Manejo del estado del componente
     */
    useEffect(() => {

        console.log(`Created Task`)

        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        }
    }, [task]);

    /**
     * * Funcion que devuelve un Badge
     * * Depende del Level del task
     */
    const taskLevelBadge = () => {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return (<h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return (<h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break;
        }
    };

    /**
     * * Funcion que cambia iconos en TASK.COMPLETED
     * @returns Devuelve un icono u otro dependiendo si la tarea esta completada o no
     */

    const taskIconCompleted = () => {
        if (task.completed) {
            return (<i className='bi-toggle-on' style={{ color: 'green', fontWeight: 'bold', fontSize: 'larger' }}></i>)
        } else {
            return (<i className='bi-toggle-off' style={{ color: 'red', fontWeight: 'bold', fontSize: 'larger' }}></i>)
        }
    }


    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Ejecucion de la funcion que retorna un badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* Ejecucion de la funcion que cambia iconos */}
                { taskIconCompleted() }
                <i className='bi-trash' style={{ color: 'tomato', fontSize: 'large' }}></i>
            </td>
        </tr>
    )
}

/**
 * ? Establecemos los tipos de datos.
 */
TaskComponent.propTypes = {
    TaskComponent: PropTypes.instanceOf(Task) //Es una instancia de la clase Task. Esto esta pasando el dato, se pueden pasar hasta funciones. Datos primitivos y complejos, y hasta funciones.
};

export default TaskComponent;
