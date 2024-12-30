import React from 'react'
import { useState } from 'react'

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask(''); // Clear input after adding
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div style={{ margin: '50px auto', maxWidth: '400px', textAlign: 'center' }}>
      <h1>To-Do List</h1>
      <input type="text"value={task} onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        style={{
          width: '70%',padding: '10px',marginBottom: '10px',borderRadius: '5px',border: '1px solid #ddd',
        }}
      />
      <button onClick={addTask}
      style={{
          padding: '10px 15px',backgroundColor: '#007bff',color: '#fff',border: 'none',
          borderRadius: '5px',cursor: 'pointer',
        }}
      >
        Add
      </button>

      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {tasks.map((t, index) => (
          <li key={index}
            style={{
              background: '#f8f9fa',
              margin: '5px 0',
              padding: '10px 15px',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyTasks

