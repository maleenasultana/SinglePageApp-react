import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Projects from './components/Projects'
import Contact from "./components/Contact"
import Home from "./components/Home"
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
<Routes>
<Route path='/' element={<Home />} />
  <Route path='/hero' element={<Hero />} />
  <Route path='/experience' element={<Experience/>} />
  <Route path='/about' element={<About />} />
  <Route path='/projects' element={<Projects />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/fyooter' element={<Footer /> } />
</Routes>

    </div>
  )
}

export default App