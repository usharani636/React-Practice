import React from "react";

function CopyArray() {
  const numbers = [1, 2, 3];
  const newNumbers = [...numbers, 4, 5];

  return (
    <div>
      <h1>Numbers</h1>
      <p>Original: {numbers.join(", ")}</p>
      <p>Copied and Updated: {newNumbers.join(", ")}</p>
    </div>
  );
}

export default CopyArray;
