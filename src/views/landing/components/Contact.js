import React from 'react'
import '../landing.css'
const Contact = () => {
    return(
        <div className='contact-container'>
            <span className="div-title">Contact us</span>
            <div className='contact-form'>                    
                <div id='sect2'>
                    <input type="text" placeholder="Email" className="input-field"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button className="contact-btn">Send</button>
                </div>
            </div>
        </div>
    );

}

export default Contact;