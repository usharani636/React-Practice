//Counter Application

import React from 'react'
import { useState } from 'react';

const MyIncrement = () => {
    const [count, setCount] = useState(0);
    const decrement = () => {
      if (count>0){
        setCount(count-1)
      }
    }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
       <h1>React Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
    </div>
  )
}

export default MyIncrement