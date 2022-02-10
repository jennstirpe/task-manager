import { useState } from 'react';

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";


function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "clean room",
      description: "garbage, vacuum, dust",
      day: "Wednesday"
    },
    {
      id: 2,
      title: "laundry",
      description: "bedding, work clothes, sweaters",
      day: "Tuesday"
    },
    {
      id: 3,
      title: "test",
      description: "vjkwhfieuhedoajfiokjsdkchdsuhfownjfnjshvfowhfieowfrowf",
      day: "Saturday"
    },
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }



  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
