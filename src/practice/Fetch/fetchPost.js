
//Fetch with POST Request

import React, { useState } from "react";

function PostData() {
  const [response, setResponse] = useState(null);

  const postData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => setResponse(data))
      .catch((error) => console.error("Error posting data:", error));
  };

  return (
    <div>
      <h1>Post Data</h1>
      <button onClick={postData}>Send Data</button>
      {response && (
        <div>
            <p>Response ID: {response.id}</p>
            <p> Response Title:{response.title}</p>
            <p> Response Body:{response.body}</p>
        </div>
      )}
    </div>
  );
}

export default PostData;
