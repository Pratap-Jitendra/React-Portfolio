import "./Digitalstyle.css"
import React from 'react'

import Data from '../components/Data';
import Fetch from '../components/Fetch';



const digita = () => {
  return (
    
    <div className="digital">
        
        <h1>Projects</h1>
        
        <div className="Digital-card">
        
        {Data.map((element, index)=>
      {
        return(
        
          <Fetch key={index} imgsrc={element.imgsrc} title={element.title} view={element.view} price={element.price} />)
          
        })} 
         
      </div>
      

    </div>
  )
}

export default digita
