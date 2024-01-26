import React from 'react'
import india from "../img/india.png"
import aus from"../img/aus.png"
import mail from "../img/mail.png"
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

import "./Info.css"
function Info() {
  return (
    <div className='Info'>
        <div className="info-area">
      <div className="contact">
        <div className="numb">
            <img src={india} alt="" />
            <span>+91 987654321</span>
        </div>
        <div className="numb">
            <img src={aus} alt="" />
            <span>+1 987654321</span>
        </div>
        <div className="numb">
            <img src={mail} alt="" />
            <span>contact@metalic.com</span>
        </div>
      </div>
      <div className="socials">
        <span>Blog</span>
        <span>Socials:  <BsLinkedin color="#0072b1"/>
         <BsFacebook color="#1877F2"/>
         <BsYoutube color="#CD201F"/>
          </span>
      
      </div>
    </div></div>
  )
}

export default Info
