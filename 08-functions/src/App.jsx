import React from 'react'

const App = () => {

  function pageScrolling(val){
    if(val>0){
      console.log("Sidha Scrolling");
    }
    else{
      console.log("Ulta Scrolling");
    }
  }

  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY);
    }} className='parent'>
      <div className='top'></div>
      <div className='middle'></div>
      <div className='bottom'></div>
    </div>
  )
}

export default App
