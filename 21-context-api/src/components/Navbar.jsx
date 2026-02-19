import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = () => { // destructuring

  return (
    <div className='flex justify-between items-center p-5 bg-slate-700'>
      <div>
        Suryansh
      </div>
      <div>
         <Navbar2/>
      </div>

    </div>
  )
}

export default Navbar
