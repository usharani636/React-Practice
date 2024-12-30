import React from "react";

function Greeting({ name, age }) {
  return (
    <p>
      Hello, {name}! You are {age} years old.
    </p>
  );
}

function SpreadDefaults() {
  const defaultProps = { name: "Guest", age: 20 };
  const customProps = { ...defaultProps, name: "Charlie" };

  return <Greeting {...customProps} />;
}

export default SpreadDefaults;
