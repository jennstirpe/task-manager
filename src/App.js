

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
            <h2>Clean Room</h2>
            <p>garbage, vacuum, dust</p>
            <p>Wednesday</p>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
          <div className="task">
            <h2>Laundry</h2>
            <p>bedding, work clothes, sweaters</p>
            <p>Tuesday</p>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
