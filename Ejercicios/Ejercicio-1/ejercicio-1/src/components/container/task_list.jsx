import React from 'react';
import { LEVELS } from '../../models/level.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => { //Cuando declaremos este componente se ejecutara esta funcion. Cuando React encuentre este component lanzara la funcion.

    const defaultTask = new Task(`Example`,  `Default description`, false, LEVELS.NORMAL); //Creamos una instancia de la clase TASK. Le pasamos las propiedades que ya declaramos en la clase. VsCode lo marca automaticamente tambien que debemos estar pasandole. Como levels es un objeto, con el punto accedemos a su propiedad (Aclaro a mi yo futuro)

    const changeState = id => {
        console.log(`TODO: Cambiara el estado de una tarea. Para la proxima clase`)
    };

    return (
        <div>
            <div>
                Your tasks: 
            </div>
            {/* TODO: APLICAR UN FOR O MAP PARA REPETIR LA LINEA DE HTML Y ASI RENDERIZAR UNA LISTA */}
            <TaskComponent task={defaultTask}></TaskComponent>
            {/* Arriba se va a pintar la default task que instanciamos antes. En base al TaskComponent que hicimos y se devolvera eso que indicamos alli. Le pasamos una task porque en taskcomponent nosotros definimos que le pasariamos una task como prop*/}
        </div>
    );
};



export default TaskListComponent;
