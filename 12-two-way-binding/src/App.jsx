import React, { useState } from 'react'

const App = () => {

  const[title,settitle]=useState('');

  const submitHandler=(elem)=>{
    elem.preventDefault();
    console.log("Form submitted by",title);

    settitle('');
  }

  return (
    <div>
      <form onSubmit={(elem)=>{
        submitHandler(elem);
      }}>
        <input 
        type="text" 
        placeholder='Enter your name'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

// in two way binding instead of doing things on our own we tell react to do it for us especially when dealing with inputs then it is known as two way binding
// iska istemal krte hai input ke andr koi bhi changes krna, form ko submit krna, form ke data ko use krna 

