import React from "react";

function MergeObjects() {
  const user = { name: "John", age: 30 };
  const address = { city: "New York", country: "USA" };

  const userDetails = { ...user, ...address };

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {userDetails.name}</p>
      <p>Age: {userDetails.age}</p>
      <p>City: {userDetails.city}</p>
      <p>Country: {userDetails.country}</p>
    </div>
  );
}

export default MergeObjects;
