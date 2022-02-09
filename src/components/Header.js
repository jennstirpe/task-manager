

const Header = () => {
  const onclick = () => {
    console.log("click")
  }
  return (
    <header>
        <h1>Task Tracker</h1>
        <button className="add" onClick={onclick}>Add Task</button>
    </header>
  )
}

export default Header