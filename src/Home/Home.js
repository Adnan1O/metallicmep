import React from 'react'
import Hero from './Hero/Hero'
import Projects from '../Projects/Projects'
import Services from './Services/Services'
import Bservices from '../Bim/Bservices'
import "./Home.css"
function Home() {
  return (
    <div className='Home'>
      <Hero/>
      <Services/>
      <Bservices/>
      <Projects/>
    </div>
  )
}

export default Home
