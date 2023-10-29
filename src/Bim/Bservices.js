import React from 'react'
import "./Bservices.css"
import building from "./building.jpg"
import { BsFillCheckCircleFill } from 'react-icons/bs';
function Bservices() {
  return (
    <div className='Bservices'>
        <div className="b-control">
      <div className="b-img">
        <img src={building} alt="" height={600} />
      </div>
      <div className="b-text">
        <div className="title-p">
<span>BIM SERVICES</span>
<p>Building Information Modeling is a very important prospect
    for MEP firms. The Mechanical, Electrical and Plumbing services
    are the addition of the building services. BIM is the 3D
    modeling process to understand all components by all.
    BIM can help MEP company to improve accuracy and reduce
        time and money with clash detection at an early stage.
        With the help of BIM, MEP firms can reduce and resolve
        the clashes and make efficient building system design.
        MEP BIM helps engineer and construction teams to
            collaborate, share details and speed up project delivery.</p>
            </div>  
        <ul>
        <li><BsFillCheckCircleFill/> BIM is a 3D model-based process to help MEP experts
                for accurate design, details and building documents.</li>
        <li><BsFillCheckCircleFill/> BIM helps MEP professionals in reducing the risk and
                clashes to make accurate outcomes.</li>
        <li><BsFillCheckCircleFill/> BIM is cost-effective to minimize the rework
                and reduce the waste of time.</li>
        <li><BsFillCheckCircleFill/> BIM helps MEP engineers to analyze the building systems.</li>
        </ul>   
        <p>Our MEP Engineering team understand the requirements
            of clients and then start the work on MEP BIM
            Services. You can mail us on 
            info@metalicMEP.com for inquiry or any
            further information.</p>
    </div>
    </div>
    </div>
  )
}

export default Bservices
