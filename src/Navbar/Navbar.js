import React from 'react'
import "./Navbar.css"
function Navbar() {
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
    </div>
  )
}

export default Navbar
