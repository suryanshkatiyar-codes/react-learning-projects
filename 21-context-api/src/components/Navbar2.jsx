import React, { useContext, useState } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Navbar2 = () => {

  const [theme,setTheme]=useContext(ThemeDataContext);
  console.log(theme);

  return (
    <div className='flex items-center gap-4'>
      <h1>Home</h1>
      <h1>Contact</h1>
      <h1>About</h1>
      <button onClick={()=>{
        if(theme=='Dark'){
          setTheme('Light');
        }
        else{
          setTheme('Dark');
        }
      }}>{theme}</button>
    </div>
  )
}

export default Navbar2
