

function App() {
  return (
    <div className="App">
      <header>
        <h1>Task Tracker</h1>
        <button className="add">Add Task</button>
        <form action="">

        </form>
      </header>
      <main>
        <div className="tasks-list">
          <div className="task">
            <p className="due-day">Wednesday</p>
            <div className="task-info">
              <h2>Clean Room</h2>
              <p>garbage, vacuum, dust</p>
            </div>
            <div className="task-modify">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </div>
          <div className="task">
            <p className="due-day">Tuesday</p>
            <div className="task-info">
              <h2>Laundry</h2>
              <p>bedding, work clothes, sweaters</p>
            </div>
            <div className="task-modify">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </div>
          <div className="task">
            <p className="due-day">Saturday</p>
            <div className="task-info">
              <h2>Laundry</h2>
              <p>jdoelsjdnejdoelsjdnejdoelsjdnejdoelsjdnejdoelsjdnejdoelsjdnejdoelsjdnejdoelsjdnejdoelsjdnejdoelsjdne</p>
            </div>
            <div className="task-modify">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </div>
          <div className="task">
            <p className="due-day">Thursday</p>
            <div className="task-info">
              <h2>Laundry</h2>
              <p>SET MAX LENGTH FOR THIS INPUT</p>
            </div>
            <div className="task-modify">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
