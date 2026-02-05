import React from 'react'
import card from './components/Card'
import Card from './components/Card'
  
const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={21}/> 
      <Card user='karan' age={24}/>
      <Card user='vedant' age={29}/>
    </div>
  )
}
// line 8 user is props(properties like className) to pass data from app to card
export default App
