

const Header = ({ onAdd, showAdd }) => {
  
  return (
    <header>
        <div className="header">
          <h1>Task Tracker</h1>
          <button className="add" onClick={onAdd}>{showAdd ? "Close" : "Add Task"}</button>
        </div>
        
    </header>
  )
}

export default Header