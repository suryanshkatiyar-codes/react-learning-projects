import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
      <h2 className='bg-white text-xl font-bold rounded-full h-12 w-12 flex justify-center items-center'>
        {props.id + 1}
      </h2>

      <div>
        <p className='text-xl leading-relaxed text-white mb-10'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum debitis omnis,
          ipsum minus molestias hic?
        </p>

        <div className='flex justify-between'>
          <button
            style={{ backgroundColor: props.color }}
            className='text-white font-medium px-8 py-2 rounded-full text-lg'
          >
            {props.tag}
          </button>

          <button 
            style={{ backgroundColor: props.color }}
            className='text-white font-medium px-3 py-2 rounded-full text-lg'>
            <i className="ri-arrow-right-fill"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
