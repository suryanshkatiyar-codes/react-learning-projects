import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className='h-full w-80 rounded-4xl overflow-hidden relative'>
      <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww" alt="" />
      <RightCardContent/>
    </div>
  )
}

export default RightCard
