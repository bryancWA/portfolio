import React from 'react';
import image from '../../Images/bryanProfile.jpeg';
import image2 from '../../Images/GitHub-Mark-64px.png';


const Contact = () => {

  const githubLink = 'https://github.com/bryancWA';
  const linkedInLink = 'https://www.linkedin.com/in/bryan-r-clark/';
  return (
    <div id="contact-div" >
      <h2>Contact Info</h2>
      <div id="contact-components">
        <img src={image} style={{height: '200px', width: '175px', borderRadius: '50%'}}
        alt="Bryan Clark profile picture"/>
        <div id="contact-info-div">
          <div className="contact-info" onClick={() => window.location=`${githubLink}`}>
            <p ><img src={image2} alt="github icon" style={{height: '20px', width: '20px'}}/>bryancWA</p>
          </div>
          <div className="contact-info" onClick={() => window.open('mailto:clark.bryanr@gmail.com?subject=Greetings+Fellow+Coder')}>
          <p><i className="far fa-envelope"></i>clark.bryanr@gmail.com</p>
          </div>
          <div className="contact-info" onClick={() => window.location=`${linkedInLink}`}>
            <p ><i className="fab fa-linkedin"></i>https://www.linkedin.com/in/bryan-r-clark/</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;