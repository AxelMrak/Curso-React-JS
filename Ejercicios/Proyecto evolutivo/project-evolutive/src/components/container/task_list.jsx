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
   * * Estados establecidos para las tareas y para la carga
   * ? El estado inicial de tasks es un array de tasks (Las que estan arriba)
   */
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  /**
   * * Controlamos el ciclo de vida del componente
   */
  useEffect(() => {
    console.log(`Task state has been modified`) //Al ser actualizado
    setTimeout(() => {
      setLoading(false);
    }, 2000);
     //Al ser actualizado no esta cargado
    return () => {
      console.log(setTasks);
      console.log`TaskList component is going to unmount`; //Al ser desmontado
    }
  }, [tasks])


  /**
   * * Funcion que cambia el estado de una tarea a completada. 
   * ? Recibe task como párametro.
   * ? Toma el indice de cada posicion en tasks y lo guarda en la const index.
   * ? Dentro de la constante temporalTask se guardan todas las tasks (Con factor de propagacion o sintaxis spread)
   * ? Luego para la tarea en la que se este posicionada se cambia el valor de completed al contrario del valor.
   * ? Luego se vuelve a regenerar el estado del componente con la nueva lista de tareas y esto actualiza el .map de las tasks
   */

  const completeTask = task => {
    const index = tasks.indexOf(task);
    const temporalTask = [...tasks];
    temporalTask[index].completed = !temporalTask[index].completed;
    //Vamos a actualizar el estado del componente con la nueva lista de tareas y esto actualizara la iteracion de las tareas, el.map
    setTasks(temporalTask);
  };

  /**
   * * Funcion que remueve la tarea de la lista
   * @param {Se le pasa una tarea} task 
   * ? Hace lo mismo que la anterior pero en linea 67...
   * ? Se hace un splice (quitar elemento) desde la posicion donde estamos parados hasta 1 elemento. Por tanto se borra un elemento.
   * ? Se actualiza la lista
   */

  const removeTask = task => {
    const index = tasks.indexOf(task);
    const temporalTask = [...tasks];
    temporalTask.splice(index, 1);
    setTasks(temporalTask);
  };

  /**
   * * Funcion para añadir tarea
   * @param {Se le pasa una tarea} task 
   * ? No se toma el indice ya que no es necesario saber las posiciones actuales.
   * ? Si se hace la sintaxis spread para tomar la lista.
   * ? Luego con el push se inserta dentro de la lista la tarea pasada por parametro.
   * ? Se actualiza.
   */

  const addTask = task => {
    const temporalTask = [...tasks];
    temporalTask.push(task);
    setTasks(temporalTask);
  };


  const Table = () => {
    return (
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
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                remove={removeTask}
              >
              </TaskComponent>
            )
          }
          )}
        </tbody>
      </table>
    );
  };

  let tasksTable = <Table></Table> //Se guarda como componente en una variable para ser renderizada correctamente.

  if ( tasks.length > 0 ) {
    tasksTable = <Table></Table>
  } else {
    tasksTable = (
    <div>
      <h3>There aren't tasks to show</h3>
      <h4>Please, create some task.</h4>
    </div>
    )
  }

  const loadingStyle = {
    color: 'gray',
    fontSize: '20px',
    fontWeight: 'bold'
  } 


  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          {/* CARD HEADER */}
          <div className='card-header p-3'>
            { tasks.length > 0 ? <h5>Your tasks:</h5> : 'No tasks' }
          </div>
          {/* CARD BODY */}
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
            { loading ? (<p style={ loadingStyle }>Loading tasks...</p>) : tasksTable }
          </div>
        </div>
      </div>
      <TaskForm add={addTask} length={tasks.length}></TaskForm>
    </div>
  );
};



export default TaskListComponent;
