import React from 'react'

function Card(props){
  console.log(props);
  return <>
      <div className='card'>
        <img src="https://images.unsplash.com/photo-1763142275482-f9f7f98b8bd6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, excepturi.</p>
        <button>View Profile</button>
      </div>
      </>
}
// in line 2 u will get the data as an object in key value pair that is user:Aman same as functions
export default Card
