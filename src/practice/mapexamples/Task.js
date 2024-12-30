//Conditional Rendering with map()

import React from "react";

function Task() {
  const tasks = [
    { id: 1, task: "Wash the dishes", completed: true },
    { id: 2, task: "Do the laundry", completed: false },
    { id: 3, task: "Write code", completed: true },
  ];

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {
          tasks.map((task) => (
            <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}> 
              {task.task}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Task;
