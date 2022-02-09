import { useState } from 'react';

import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
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

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
