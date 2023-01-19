import React from "react";
import './Contact.css'
function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="left">
          <h1>GET IN TOUCH</h1>
          <h5>Please complete the form and we will get back to you</h5>
         
        </div>
        <div className='vl'></div>
        <div className="right">
          <form>
            <label for="name"><h4>Name*</h4></label>
            <input type="name" placeholder="        Enter Your Name " />
            <br></br>
            <label for="email"><h4>Email*</h4></label>
            <input type="email" placeholder="        Enter Your Email " />
            <br></br>
            <label for="mobileNo"><h4>Mobile Number*</h4></label>
            <input
              type="text"
              placeholder="        Enter Your Mobile Number "
            />
            
            <button type='button' className="btn">Register Now</button><br></br>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
