import './Formstyle.css'
import React from 'react'

const Form = () => {
    return (
        <div className='Formcontainer'>
            
                <form>
                
                    
                        <label>Name Please:</label>
                        <input type="text" />
                    
                        <label>Email:</label>
                        <input type="Email" />
                    
                        <label>Mobile Number</label>
                        <input type="number" />
                    
                        <label>Message</label>
                        <textarea col="6" row="4"/>
                    
                    <button className='btn9'>Submit</button>

            
                </form>
</div>
        
    )
}

export default Form
