import "./Digitalstyle.css"
import React from 'react'
import { Link } from 'react-router-dom';

function Fetch(props) {
  return (
 

              
              <div className="cardview">
              <img src={props.imgsrc} alt="view"/>
               <h2 className="Desc">{props.title}</h2>
               <p className="Price">{props.price}</p>
               <div className="button">
               <Link to={props.view} className='order'>View</Link>
               <Link to="/contact" className='order'>Order</Link>
               </div>
               </div>
               
        
            
      
    
        )
      }

export default Fetch
