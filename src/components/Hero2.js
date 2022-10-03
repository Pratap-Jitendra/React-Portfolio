import React from 'react'
import "./Hero2style.css";


const Hero2 = (props) => {
  return (
    <div className="hero-img">
    <div className='container'>
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
    </div>
    </div>
      


  )
}

export default Hero2
