import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full flex overflow-auto rounded-4xl flex-nowrap gap-7 w-2/3'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} intro={elem.intro} tag={elem.tag} />
      })}
    </div>
  )
}

export default Rightcontent
