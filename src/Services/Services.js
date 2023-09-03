import React from 'react'
import "./Services.css"
import pic2 from "../img/pic2.jpg"
function Services() {
  return (
    <div className='Services'>
      <h2>OUR SERVICES</h2>
      <div className="card"  
      style={{backgroundImage: `url(${pic2})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: "cover",
    }}>
      <div className="ser-txt">
      <h2>3D Modeling</h2>
      <p>3D Models can access the technical and 
        financial viability of a design, construction
         stability, function, performance...</p>
         <button>READ MORE</button>
      </div>
      </div>
    </div>
  )
}

export default Services
