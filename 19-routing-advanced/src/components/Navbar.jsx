import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-5 bg-cyan-500'>
      <div className='font-medium text-lg'>NextRec</div>
      <div className='flex items-center gap-5'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/course'>Courses</Link>
        <Link to='/product'>Product</Link>   
      </div>
    </div>
  )
}

export default Navbar
