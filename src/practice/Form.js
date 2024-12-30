import React, { useState } from "react";

function Form() {           
  // Declare state variable for input
  const [name, setName] = useState("");

  // Function to handle input change
  const handleChange = (event) => setName(event.target.value);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, {name ? name : "Stranger"}!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={{ padding: "10px", fontSize: "16px" }}
      />
    </div>
  );
}

export default Form;
