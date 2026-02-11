import React, { useState } from 'react'

const App = () => {

  const [num,setNum]=useState(10);

  const btnClicked =()=>{
    setNum(prev=>(prev+1)) // setNum(num+1);
    setNum(prev=>(prev+1)) // setNum(num+1);
    setNum(prev=>(prev+1)) // setNum(num+1);
    // these 3 lines above do the same work but we use left side because in the right side setNum didn't identify the actual value of num because everything is happening too fast and it all 3 act like increasing one at once not thrice this is known as Batch update
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
