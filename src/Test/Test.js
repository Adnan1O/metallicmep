import React, { useState } from 'react'
import "./Test.css"


function Test() {
    const [userInput, setUserInput] = useState('');
    const [dataType, setDataType] = useState('');
    const handleInputChange = (event) => {
        setUserInput(event.target.value)
        const input = event.target.value;
          if (!isNaN(input)) {
              setDataType('Number');
            } else {
              setDataType('String');
            }
    }
    
  return (
    <div className='test'>
   <h1>Write something</h1>
     <input placeholder='Enter something' type="text" value={userInput} onChange={handleInputChange} />
  <div className="display-area">
 <div className="number">
    <h2>Number area</h2>
<h4 style={{color:"green"}}>{dataType === "Number"? userInput: ''}</h4>
   </div>
   <div className="string">
   <h2>string area</h2>
   <h4 style={{color:"yellow"}}>{dataType === "String"? userInput: ''}</h4>
   </div>    
    </div>   
    </div>
  )
}

export default Test
