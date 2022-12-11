import './Formstyle.css'
import React from 'react'

const Form = () => {
    return (
        <div className='Formcontainer'>
            
            <form action="https://formspree.io/f/xeqdynak" method='post'>
                
                    
                        <label>Name Please:</label>
                        <input type="text" name="Name"  />
                    
                        <label>Email:</label>
                        <input type="Email" name="email" />
                    
                        <label>Mobile Number</label>
                        <input type="number" name="mob_number" />
                    
                        <label>Message</label>
                        <textarea col="6" row="4" name="message"/>
                    
                    <button className='btn9'>Submit</button>

            
                </form>
</div>
        
    )
}

export default Form
