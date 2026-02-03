import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    { 
      img: 'https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww', 
      intro: '1', 
      color:'blue',
      tag: 'Satisfied' 
    },
    { 
      img: 'https://images.unsplash.com/photo-1717068342175-c3a303a09f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww', 
      intro: '2', 
      color : 'red',
      tag: 'Underserved' 
    },
    { 
      img: 'https://images.unsplash.com/photo-1724627559656-9652a42c7e91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww', 
      intro: '3', 
      color:'grey',
      tag: 'Underbanked' 
    },
    { 
      img: 'https://images.unsplash.com/photo-1724627561609-9cd3facba8d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww', 
      intro: '4', 
      color: 'green',
      tag: 'Underdog' 
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
