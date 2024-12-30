// Rendering a Grid of Items

import React from "react";

function Items() {
  const products = [
    { id: 1, name: "Laptop", price: "$1000" },
    { id: 2, name: "Phone", price: "$500" },
    { id: 3, name: "Tablet", price: "$300" },
  ];

  return (
    <div>
      <h1 style={{textAlign:"center",marginTop:"50px"}}>Product Grid</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {
            products.map((product) => (
                <div key={product.id} style={{  border: "1px solid black", padding: "10px" }}>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default Items;


