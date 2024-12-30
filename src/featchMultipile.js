import React, { useState, useEffect } from "react";

function FetchCommentsForPost() {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((post) => {
        setPost(post);
        return fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
      })
      .then((response) => response.json())
      .then((comments) => setComments(comments))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Post and Comments</h1>
      {post && <h2>{post.title}</h2>}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchCommentsForPost;
