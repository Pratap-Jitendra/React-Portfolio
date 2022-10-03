import './FooterStyle.css';
import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin,FaInstagram} from 'react-icons/fa'


const Footer = (props) => {
  return (
    <div className='footer'>
        <div className='footer-container'>
        <div className='left'>
        <div className='location'><FaHome style={{color:"white", marginRight:"2rem"}}/>
        <div>
        <p>Lahang Dumaria,</p>
        <p>Dist:Bhojpur (Ara), Bihar</p>
        <p>802351</p>
        </div>
        </div>
        <div className='phone'>
          <h4><FaPhone style={{color:"white", marginRight:"2rem"}}/> 9958090566</h4>
          </div>
        <div className='email'>
          <h4><FaMailBulk style={{color:"white", marginRight:"2rem"}}/> jitendra.pratap205@gmail.com</h4>
          
          </div>
        </div>
        
        
        <div className='right' style={{color:"white", marginRight:"2rem"}}>
  <h4>Hello, Everyone!</h4>
  <p>This is my project where everything describes as portfolio. Such as: Skills, Experience, ToDo.</p>
  <p>You can see in a single page everything through linking my Facebook Profile [Social Profile], Career, Bussiness.</p>
  <p>Every click or Scrolling give you Amazing feeling.</p>
  <p>Thanks!</p>
  <p className='git'>Github: <a rel="noreferrer"  href="https://github.com/Pratap-Jitendra">Github</a></p>
<div className='social'>
  <a rel="noreferrer" href="https://www.facebook.com/jitendra.pratap.16" target="_blank"><FaFacebook/></a>
  <a rel="noreferrer" href="https://www.linkedin.com/feed/"><FaLinkedin/></a>
  <a rel="noreferrer" href="https://www.instagram.com/jitendra.pratap205/"><FaInstagram/></a>
   </div>

        </div>
        </div>
      </div>

  )
}

export default Footer
