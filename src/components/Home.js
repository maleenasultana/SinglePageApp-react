import React from 'react'
import Hero from "./Hero"
import Experience from "./Experience"
import Projects from "./Projects"
import Contact from "./Contact"
import About from "./About"
import Footer from "./Footer"


function Home() {
  return (
    <div>

        <Hero/>
        <Experience />
        <About/>
        <Projects />
        <Contact />
        <Footer/>
    </div>
  )
}

export default Home