
//Fetching and Displaying Data on Component Mount

import React, { useState, useEffect } from "react";

function FetchData() {
  const[data,setData]=useState([])
  const[loading,setLoading]=useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []); 

  return(
    <div>
      <h1> Posts </h1>
      {
        loading ? (<p>Loading...</p>) : (
          <ul>
            {
              data.slice(0, 5).map((post) => (
                <li key={post.id}>{post.title}</li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}
  

export default FetchData;
