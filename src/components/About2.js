import React from 'react'
import about1 from "../assest/jitu.png"
import back1 from "../assest/blue.png"

import './About2style.css'


function About2() {
  return (
    <div className="about-container">
      <div className="maincontainer">
        <div className="about-content">
          <h2>-Technical Skills & Experience-</h2>

          <p>HTML</p>

          <div className="box1" />

          <p>Css3</p>
          <div className="box2" />
          <p>JavaScript</p>
          <div className="box3" />
          <p>BootStrap</p>
          <div className="box4" />
          <p>React</p>
          <div className="box5" />
        </div>





        <div className="about-image">

      <div className="flexing">
          <img img src={back1} alt="jitu" className='jitu' />
          <img img src={about1} alt="jitu"  className='shape' />
        </div>    
        
      <p style={{color:"black", fontSize: "120%", textAlign: "center", margin: "2rem"}}>Contentra Technology, New Delhi</p>



        </div>

      </div>
    </div>



  )
}

export default About2
