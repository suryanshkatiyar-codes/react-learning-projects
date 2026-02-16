import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {

  let navigate = useNavigate();

  return (
    <div className='bg-red-400'>
      <button className='bg-red-300 rounded px-4 py-3 m-2' onClick={() => {
        navigate('/');
      }}>Back to home page</button>
      <button className='bg-red-300 rounded px-4 py-3 m-2' onClick={() => {
        navigate(-1);
      }}>Prev</button>
      <button className='bg-red-300 rounded px-4 py-3 m-2' onClick={() => {
        navigate(+1);
      }}>Next</button>

    </div>
  )
}

export default Navbar2
