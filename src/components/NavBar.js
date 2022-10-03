import "./NavBarStyle.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const[click, setClicked]= useState(false)
  const toggel =()=>
  {
    setClicked(!click)

  }
  const[color, setColor]=useState(false)
  const handlecolor=()=>
  {
    if(window.scrollY >=100)
    {
      setColor(true);
    }
else
{
  setColor(false);
}
  }
  window.addEventListener("scroll", handlecolor)
  return (
    <div className={color? "header header-bg" : "header"}>
        <Link to="/">
        <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active": "nav-menu"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      <div className="hamburger" onClick={toggel}>
      {click ? (<FaTimes style={{color:"white"}}/>):(<FaBars style={{color:"white"}}/>)
      }
      </div>
    </div>
  );
}

export default NavBar
