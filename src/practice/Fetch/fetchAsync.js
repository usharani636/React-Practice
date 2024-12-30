
//Fetch Data with Async/Await

import React, { useState, useEffect } from "react";

function AsyncFetchExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Todo</h1>
      {data ? (
        <div>
          <p>Title: {data.title}</p>
          <p>Completed: {data.completed ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AsyncFetchExample;
