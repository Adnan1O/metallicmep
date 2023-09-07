import React, { useState } from 'react'
import "./Navbar.css"
import Responsive from './Responsive'
function Navbar() {
  const [responsive, setResponsive] = useState(false)

  const Open=()=>{
    setResponsive(!responsive)
  }
  return (
    <div className='Navbar'>
      <h1>METALLIC</h1>
      <ul>
        <li>Our Services</li>
        <li>About Us</li>
        <li>Project</li> 
        <li>Career</li>
        <li className='contact'>Contact</li>
      </ul>
      <li onClick={Open} className='responsive'>menu</li>       
{
  responsive&&(
    <Responsive/>
  )
}
    </div>
  )
}

export default Navbar
