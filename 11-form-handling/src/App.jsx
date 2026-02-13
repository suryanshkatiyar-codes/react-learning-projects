import React from 'react'

const App = () => {

  const submitHandler=(elem)=>{
    elem.preventDefault();
    console.log("Form submitted");
  }

  return (
    <div>
      <form onSubmit={(elem)=>{
        submitHandler(elem);
      }}>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

// what we are doing here is we directly changing the website which we should not do this instead use react to change the website