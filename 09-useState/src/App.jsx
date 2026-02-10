import React, { useState } from 'react';

const App = () => {

  const [num, setNum] = useState(0);

  function increase() {
    setNum(num + 1);
  }
  function decrease() {
    setNum(num - 1);
  }

  return (
    <div className='flex flex-col items-center'>
      <div><h1 className='bg-gray-400 h-100 w-100 rounded-2xl text-[200px] flex items-center justify-center mt-10'>{num}</h1></div>
      <div className='flex justify-center'>
        <button className='bg-red-600 text-4xl rounded-2xl p-6 m-6' onClick={increase}>Increase</button>
        <button className='bg-green-600 text-4xl rounded-2xl p-6 m-6' onClick={decrease}>Decrease</button>
      </div>
    </div>
  )
}

export default App
