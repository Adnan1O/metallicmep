import React from 'react'
import Hero from './Hero/Hero'
import Projects from '../Projects/Projects'
import Services from './Services/Services'

function Home() {
  return (
    <div className='Home'>
      <Hero/>
      <Services/>
      <Projects/>
    </div>
  )
}

export default Home
