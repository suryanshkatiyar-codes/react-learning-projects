import React, { useEffect, useState } from 'react'

const App = () => {

  const [a,setA]=useState(0);
  const [b,setB]=useState(0);

  const aChanging=()=>{
    console.log("A is changing");
  }

  const bChanging=()=>{
    console.log("B is changing");
  }

  useEffect(()=>{
    aChanging();
  },[a])

  useEffect(()=>{
    bChanging();
  },[b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1);
      }
      }>Change A</button>
      <button onClick={()=>{
        setB(b+5);
      }}>Change B</button>
    </div>
  )
}

export default App
