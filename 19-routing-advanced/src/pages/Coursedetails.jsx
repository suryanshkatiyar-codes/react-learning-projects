import React from 'react'
import { useParams } from 'react-router-dom'

const Coursedetails = () => {

  const param=useParams(); 
  console.log(param.id);
  // useParams is a special type of hook that will get u id that is <Route path='/course/:id' element={<Coursedetails/>}/>

  return (
    <div>
      <h1>{param.id} Course datails</h1>
    </div>
  )
}

export default Coursedetails
