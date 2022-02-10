import { useState } from 'react'

const AddTask = ( { onAdd } ) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [day, setDay] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!title) {
            alert("Please add a task name")
            return
        }

        onAdd( {title, description, day} );

        setTitle('');
        setDescription('');
        setDay('');
    };

  return (
    <form class="new-task-form" onSubmit={onSubmit}>
          <div className="inputField">
            <label htmlFor="titleInput">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="titleInput" placeholder="Enter task name..." />
          </div>
          <div className="inputField">
          <label htmlFor="descriptionInput">Description</label>
            <input id="descriptionInput" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter any extra information..."></input>
          </div>
          <div className="inputField">
            <label htmlFor="dayInput">Day</label>
            <select value={day} onChange={(e) => setDay(e.target.value)}>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <input type="submit" id="submit-form" value="Add New Task" />
    </form>
  )
}

export default AddTask