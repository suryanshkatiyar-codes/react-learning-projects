import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kid from './pages/Kid'
import Course from './pages/Course'
import Coursedetails from './pages/Coursedetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kid' element={<Kid />} />
        </Route>
        {/* Nested Routes */}
        <Route path='/course' element={<Course/>}/>
        <Route path='/course/:id' element={<Coursedetails/>}/>
        {/* Here if u try to access /course/anything then the Coursedetails component's content u will see it is known as dynamic routing */}
        

        <Route path='*' element={<Notfound />} />
        {/* This is for unknown url that does not exist */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App

// we can use 404 page codepen to get the code of some default 404 pages
