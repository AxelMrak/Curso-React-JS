import React, { useRef, useState } from 'react'
import Task from './Task';


function TasksList() {

    const taskObjects = [
        {
            id: 0, 
            name: 'Buy clothes'
        }
    ]

    const [tasks, setTasks] = useState(taskObjects);

    const nameRef = useRef();

    const addTask = (e) => {
        e.preventDefault()

        const newTask = {
            name: nameRef.current.value, 
            completed: false 
        }

        const temporalTask = [...tasks];
        temporalTask.push(newTask);
        setTasks(temporalTask);
    }

    const removeTask = task => {
        const temporalTask = [...tasks];
        temporalTask.pop(task)
        setTasks(temporalTask)
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', rowGap: '1rem', margin: '1rem' }}>
            <input type='text' name='name' placeholder='Name of Task' ref={nameRef} required></input>
            <button style={{padding: '0.5rem', border: '1px solid black', borderRadius: '10px'}} onClick={addTask}>Add</button> 
            {
                tasks.map((task, key) =>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center', columnGap: '1rem', margin: '1rem', textAlign: 'center', padding: '1rem' }}>
                    <Task name={task.name} completed={task.completed} key={task.id}></Task>
                        <button style={{ padding: '0.3rem', border: '1px solid black', borderRadius: '10px' }} onClick={removeTask}>🗑️</button>
                    </div>
                )
            }
           
        </div>
    )
}

export default TasksList