import React from 'react'
import { Link } from 'react-router-dom';
import "./Epubstyle.css";

const Epub = () => {
  return (
    <div className='epub-container'>
        <div className='layout'>
        <div className='card'>
            <p>-Epub-Conversion-</p>
            <h4>Arabic</h4>
            <p>-</p>
            <h3>- Rs.20 Per Page -</h3>
            <p>- Delivery on ETA- </p>
            <p>- Tools -</p>
            <p>Css3, Html5 and Epsilion</p>
            <Link to="/contact" className='order'>Place an Order</Link>
        </div>
        <div className='card'>
            <p>Epub-Conversion</p>
            <h4>English and Others</h4>
            <p>-</p>
            <h3>-Rs.14 Per Page-</h3>
            <p>-Delivery on ETA-</p>
            <p>- Tools -</p>
            <p>Css3, Html5 and Epsilion</p>
            <Link to="/contact" className='order'>Place an Order</Link>
        </div>
        <div className='card'>
            <p>- Basic Website -</p>
            <h3>$100</h3>
            <p>-3 Days-</p>
            <h4>-3 Page -</h4>
            <p>-Delivery on ETA-</p>
            <p>- Tools - Css3, Html5, Javascript</p>
                        <p>-Responsive-</p>
            <Link to="/contact" className='order'>Place an Order</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Epub
