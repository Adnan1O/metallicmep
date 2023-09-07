import React from 'react'
import "./Projects.css"
import pic2 from "../img/pic2.jpg"
import pic3 from "../img/pic3.jpg"
import pic4 from "../img/pic4.jpg"
import pic5 from "../img/pic5.jpg"


function Projects() {
  return (
    <div className='Services'>
      <h2>OUR PROJECTS</h2>
      <div className="serv">
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

      <div className="card"  
      style={{backgroundImage: `url(${pic3})`,
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
      <div className="card"  
      style={{backgroundImage: `url(${pic4})`,
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
      <div className="card"  
      style={{backgroundImage: `url(${pic5})`,
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
      
    </div>
  )
}

export default Projects
