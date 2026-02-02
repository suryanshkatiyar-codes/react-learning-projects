import React from 'react'
import LeftContent from './LeftContent'
import Rightcontent from './Rightcontent'

const Page1Content = () => {
  return (
    <div className='py-10 flex gap-10 items-center h-[90vh] px-18'>
      <LeftContent/>
      <Rightcontent/>
    </div>
  )
}

export default Page1Content
