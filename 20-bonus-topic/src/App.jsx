import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar';

const App = () => {

  const [theme,setTheme]=useState('Light');

  return (
    <div>
      The theme is {theme};
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
