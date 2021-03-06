import React from 'react'

const Task = ( { id, title, description, day, onDelete} ) => {
  return (
    <div className="task" key={id}>
        <p className="due-day">{day}</p>
        <div className="task-info">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className="task-modify">
            <button className="delete" onClick={() => onDelete(id)}>x</button>
        </div>
    </div>
  )
}

export default Task