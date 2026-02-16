import React from 'react'

const Navbar = (props) => {

  const changeTheme=()=>{
    props.setTheme('Dark');
  }

  return (
    <div>
      <button onClick={()=>{
        changeTheme();
      }}>Change</button>
    </div>
  )
}

export default Navbar
