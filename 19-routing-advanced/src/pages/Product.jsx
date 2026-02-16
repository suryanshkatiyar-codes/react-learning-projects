import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center items-center gap-5 mt-5'>
        <Link className='font-bold text-lg' to='/product/men'>Men</Link>
        <Link className='font-bold text-lg' to='/product/women'>Women</Link>
        <Link className='font-bold text-lg' to='/product/kid'>Kid</Link>
      </div>
      <Outlet/>
      
    </div>
  )
}

export default Product
