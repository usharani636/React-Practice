// Rendering a List of Objects

import React from "react";

function MyList() {
  // Array of objects
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{listStyle:"none",color:"blue"}}>
            {user.name} is {user.age} years old.
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyList;
