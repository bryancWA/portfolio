import React from 'react';
import image from '../../Images/bryanProfile.jpeg';
import image2 from '../../Images/GitHub-Mark-64px.png';


const Contact = () => {
  return (
    <div id="contact-div" >
      <h2>Contact Info</h2>
      <img src={image} style={{height: '200px', width: '175px', borderRadius: '10px'}}
      alt="Bryan Clark profile picture"/>
      <div id="github">
        <p><img src={image2} alt="github icon" style={{height: '32px', width: '32px'}}/>@bryancWA</p>
      </div>
      <div id="email-div">
       <p><i className="far fa-envelope"></i>clark.bryanr@gmail.com</p>
      </div>
      <div id="linkedin-div">
        <p><i className="fab fa-linkedin"></i>https://www.linkedin.com/in/bryan-r-clark/</p>
      </div>
    </div>
  )
}

export default Contact;