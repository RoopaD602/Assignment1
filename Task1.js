import React from 'react'
import { useState } from 'react';
function Task1() {
   const [count,setCount]=useState(0);

   const increment=()=>
   {
    setCount(count+1);
   }

   const decrement=()=>
   {
    setCount(count-1);
   }

   const reset=()=>
    {
     setCount(count*0);
    }
   

  return (
  <div>
      <h1>Count Component</h1>
   <div id="demo">
    
    
    
     <button onClick={decrement}>-</button>
     <button>{count}</button>
     <button onClick={increment}>+</button>
     <button onclick={reset}>Reset</button>
   </div>
  </div>
  )
}

export default Task1