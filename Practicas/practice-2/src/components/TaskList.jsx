import React from 'react'
import { TaskUnit } from './TaskUnit'

export const TaskList = ({ tasks }) => {
  return (
    <ul>
        { tasks.map( task => { return (
            <TaskUnit taskProp={task}></TaskUnit>
        )}) }
    </ul>
  )
}

