//Imports
import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/task.scss';

/**
 * * Componente Task-List que es padre de los demas
 * @returns Devuelve el renderizado a través del return al ser componente tipo funcional
 */
const TaskListComponent = () => {

  //Creamos una instancia de la clase TASK. Le pasamos las propiedades que ya declaramos en la clase. VsCode lo marca automaticamente tambien que debemos estar pasandole. Como levels es un objeto, con el punto accedemos a su propiedad (Aclaro a mi yo futuro)
  const defaultTask1 = new Task(`Example1`, `Description 1`, true, LEVELS.NORMAL);
  const defaultTask2 = new Task(`Example2`, `Description 2`, false, LEVELS.URGENT);
  const defaultTask3 = new Task(`Example3`, `Description 3`, false, LEVELS.BLOCKING);

  /**
   * ? Estados establecidos para las tareas y para la carga
   */
   const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  // const [loading, setLoading] = useState(true);

  /**
   * * Controlamos el ciclo de vida del componente
   */
  useEffect(() => {
    console.log(`Task state has been modified`) //Al ser actualizado
    // setLoading(false); //Al ser actualizado no esta cargado
    return () => {
      console.log(setTasks);
      console.log`TaskList component is going to unmount`; //Al ser desmontado
    }
  }, [tasks])


  /**
   * ? Constante que cambia el estado de una tarea a completada. 
   */
  // const changeCompleted = id => {
  //   console.log(`TODO: Cambiara el estado de una tarea. Para la proxima clase`)
  // };


  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          {/* CARD HEADER */}
          <div className='card-header p-3'>
            <h5>Your tasks:</h5>
          </div>
          {/* CARD BODY */}
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
            <table>
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Priority</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Hacemos un mapeo de las tareas. Pasandole como argumento una tarea y su indice.
                Luego en el return devolverá el componente con su KEY que permite que el DOM identifique que objeto es el que debe pintar y la task correspondiente a ese key identificador. Iteramos cada una de las tareas y luego le asignamos una key y las pintamos*/}
                { tasks.map((task, index) => {
                        return (
                                <TaskComponent 
                                    key={index} 
                                    task={task}
                                >
                                </TaskComponent>
                            )
                        }
                    )}
              </tbody>
            </table>
          </div>
          <TaskForm></TaskForm>
        </div>
      </div>
    </div>
  );
};



export default TaskListComponent;
