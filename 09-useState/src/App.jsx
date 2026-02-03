import React from 'react'

const App = () => {

  let a = 10;

  function increment() {
    console.log(a);
    a++;
    console.log(a);
  }

  return (
    <div>
      <p>The value of a is {a}</p>
      <button onClick={increment}>click</button>
    </div>
  )
}

export default App
