//Fetching Data on Button Click

import React, { useState } from "react";

function FetchOnClick() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/4")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div>
      <h1>Fetch User Data</h1>
      <button onClick={fetchData}>Fetch User</button>
      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
}

export default FetchOnClick;