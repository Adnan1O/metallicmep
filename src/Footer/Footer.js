import React from 'react'
import "./Footer.css"
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
function Footer() {
  return (
    <div className='Footer'>
        <div className="first">
        <h2>Archdraw Outsourcing</h2>
        <p>We offer the High Quality CAD
           drafting, BIM modeling & Architectural Visualization
            services worldwide.</p>
            <div className="social">
            <BsLinkedin color="#0072b1"/>
         <BsFacebook color="#1877F2"/>
         <BsYoutube color="#CD201F"/>
            </div>
      </div>
      <div className="second">
        <h2>Quick Links</h2>
        <ul>
        <li>Our Services</li>
        <li>About Us</li>
        <li>Project</li> 
        <li>Career</li>
        <li className='contact'>Contact</li>
      </ul>
      </div>
    </div>
  )
}

export default Footer
