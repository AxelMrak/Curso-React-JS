import React, { useRef } from 'react'

function TaskForm({ tasks, setTasks }) {

    const nameRef = useRef();

    const addTask = event => {
        event.preventDefault();
        setTasks({name: nameRef.current.value})
    }

  return (
    <div>
        <input type='text' name='name' placeholder='name' ref={nameRef} required></input>
        { nameRef.current.value === '' ? null : <button onClick={addTask}>Add</button> }
    </div>
  )
}

export default TaskForm