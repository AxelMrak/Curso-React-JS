import React from 'react'

export function TaskUnit ({ taskProp })  {
    
    const { id, task, completed } = taskProp;

  return (
    <li>
    {task}
    </li>
  )
}
