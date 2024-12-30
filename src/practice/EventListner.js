
import React, { useState, useEffect } from "react";

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);// Initializes the width state with the current window width

  const handleResize = () => 
    setWidth(window.innerWidth);// Provides the width of the browser's viewport.

  useEffect(() => {
    window.addEventListener("resize", handleResize); //Adds an event listener that triggers the handleResize function whenever the browser window is resized.
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  return <h1>Window width: {width}px</h1>;
}

export default WindowWidth;
