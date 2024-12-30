//Rendering Buttons with Click Handlers

import React from 'react'

const MyMap = () => {
    let actions = ["Save","Delete","Edit"]

    const handleClick = (action) => {
    alert(`You clicked ${action}`);
  };
  return ( 
    <div style={{textAlign:"center",marginTop:"50px"}}>
        <h1> Actions </h1>
        {
            actions.map((action, index) => (
                <button key={index} onClick={() => handleClick(action)}>
                    {action}
                </button>
            ))
        }
    </div>
  )
}

export default MyMap
