
import Task from './Task';



const Tasks = ( {tasks} ) => {
    

  return (
    <div className="tasks-list">
        {tasks.map((task) => (
            <Task id={task.id} title={task.title} description={task.description} day={task.day} />
        ))}
    </div>
  )
}

export default Tasks