import React from 'react';
import styles from '../../public/styles.css';
import techList from './techList.js';

const About = () => {

  return (
    <div id="about-div">
      <h2>About</h2>
      <div id="about-content">
        <div id="about-paragraph">
          <h3>Long and the Short:</h3>
          <p>After honing my international non-profit NGO interning skills in the eastern part of Bolivia, I found myself with a scrub brush in hand, on my hands and knees cleaning the fish hold of a twenty-seven foot bow-picker fishing boat, in a remote Alaskan bush town.
          Since that fateful transition, I've driven semi-trucks, dug ditches, pitched fish, barked orders, received orders, operated heavy machinery, pulled a fifty-three foot trailer through downtown Oakland, and drove my Honda CR-V the entire stretch between San Diego, CA, and Whittier, AK. I attended Willamette University College of Law and worked in the legal industry for several years until I was drawn to the creativity offered by the software industry.
          After flirting with Javascript since 2017 I decided it was time to take the plunge and I joined the ranks of the Hack Reactor bootcamp. The love story has continued with Node.js, React, SQL, and I am super excited about interacting with other technologies that allow me to check the creative box. I am the sum of my experiences, and I wouldn't change a single one.
          </p>
        </div>
        <div id="tech-list">
          <h3>Technical Experience</h3>
          <div id="tech-wrap">
            {techList.map((tech, index) => (
              <div key={tech + index}>
                {tech.icon !== '' ? <img src={tech.icon} style={{height: '50px', width: '50px'}}/> : null}
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;