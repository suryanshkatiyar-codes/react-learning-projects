import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'

const App = () => {

  const [theme,setTheme]=useState('light');

  return (
    <div className='h-screen bg-black text-white'>
      <Navbar theme={theme}>
        <h1>Sup</h1>
        <h1>yoiii</h1>
      </Navbar>
    </div>
  )
}

export default App
