
import Task from './Task';



const Tasks = ( {tasks, onDelete} ) => {
    

  return (
    <div className="tasks-list">
        {tasks.map((task) => (
            <Task id={task.id} title={task.title} description={task.description} day={task.day} onDelete={onDelete} />
        ))}
    </div>
  )
}

export default Tasks