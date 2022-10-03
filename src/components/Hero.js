import React from 'react';
import { Link } from 'react-router-dom';
import first1 from '../assest/first1.jpg';
import "./Herostyle.css";

export default function Hero(props) {
  return (
    <div className="hero">
        <div className="mask">
            <img className="introimage" src={first1} alt="front page"/>
        </div>
        <div className='content'>
          <h4>Hello, I am</h4>
          <h1>Jitendra Pratap</h1>
          <p>Software Engineer, NIIT.</p>
        
        <div>
          <a rel="noreferrer" className='btn-light' href="https://epubhelp.herokuapp.com/" target="_blank" >Live Project</a>
          <Link className='btn' to="/contact">Live Game</Link>
        </div>
         </div>
         </div>

  )
}


