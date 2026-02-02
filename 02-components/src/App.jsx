import React from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Navbar />
      <Card />
      <Card />
    </div>
  )
}
// componenet based architecture can change individual components without disturbing others
export default App
