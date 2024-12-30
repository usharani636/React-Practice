//Toggling Visibility of an Element

import React, { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>This is a toggleable message!</p>}
    </div>
  );
}

export default Toggle;
