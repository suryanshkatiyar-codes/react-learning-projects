import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-red-300 flex items-center justify-between p-5'>
      <div>Sheriyans</div>
      <div className='flex gap-5'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
