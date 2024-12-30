import React, { useState } from "react";

function DeleteData() {
  const [message, setMessage] = useState("");

  const deleteData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setMessage("Post deleted successfully.");
        }
      })
      .catch((error) => console.error("Error deleting post:", error));
  };

  return (
    <div>
      <h1>Delete Post</h1>
      <button onClick={deleteData}>Delete Post 1</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteData;
