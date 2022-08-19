import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'

const TaskListComponent = () => { //Cuando declaremos este componente se ejecutara esta funcion. Cuando React encuentre este component lanzara la funcion.

  const defaultTask = new Task(`Example`, `Default description`, false, LEVELS.NORMAL); //Creamos una instancia de la clase TASK. Le pasamos las propiedades que ya declaramos en la clase. VsCode lo marca automaticamente tambien que debemos estar pasandole. Como levels es un objeto, con el punto accedemos a su propiedad (Aclaro a mi yo futuro)
  
  //Estado del componente
  const [tasks, setTasks] = useState({ defaultTask });
  const [loading, setLoading] = useState(true); //Estado de carga

  //Control del ciclo de vida del componente
  useEffect(() => {
    console.log(`Task state has been modified`) //Al ser actualizado
    setLoading(false); //Al ser actualizado no esta cargado
    return () => {
      console.log(setTasks());
      console.log`TaskList component is going to unmount`; //Al ser desmontado
    }
  }, [tasks])



  const changeCompleted = id => {
    console.log(`TODO: Cambiara el estado de una tarea. Para la proxima clase`)
  };


  return (
    <div >
      <div>
        <h1>Your tasks:</h1>
      </div>
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};



export default TaskListComponent;
