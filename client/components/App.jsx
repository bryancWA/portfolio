import React, { useState, useRef, useEffect } from 'react';
import Project from './Project.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import ResumeModal from './ResumeModal.jsx';
import { Menu, MenuItem, Button } from '@material-ui/core';
import image3 from '../../Images/spiderTree.jpeg';
import styles from '../../public/styles.css';
import image4 from '../../Images/riverRocks.jpeg';
import image5 from '../../Images/logTrail.jpeg';


const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openResume, setOpenResume] = useState(false);
  const [scrollRef, setScrollRef] = useState('');
  const projRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  const handleMenu = (event) => {

    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => {
    
    
    setAnchorEl(null);

  }

  const handleResumeModal = () => {
    setOpenResume(true);
  }

  const handleScroll = (string) => {
    handleMenuClose();
    // console.log(string)
    setScrollRef(string);

    
  }

  useEffect(() => {
    if (scrollRef === 'projRef') {
      projRef.current.scrollIntoView({ behavior: 'smooth' });
    } 
    if (scrollRef === 'aboutRef') {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (scrollRef === 'contactRef') {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setScrollRef('');
  }, [scrollRef])

  return (
    <div style={{background: 'rgb(238, 241, 255)', top: '0', right: '0', bottom: '0', left: '0'}}>
      <div id="landing-info-container">
        <div id="landing-header" style={{ height: '300px', width: '100%',
        backgroundImage: `url('${image4}')`, 
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)'}}></div>
        </div>
      <div id='landing-info' style={{ height: '500px', width: '100%',}}>
        <Button onClick={handleMenu} id="menu-button"><i className="fas fa-bars"></i></Button>
        <Menu 
        anchorEl={anchorEl}
        style={{position: 'absolute' }}
        keepMounted
        onBackdropClick={handleMenuClose}
        open={Boolean(anchorEl)}> 
          <MenuItem  onClick={() => handleScroll('projRef')}>Projects</MenuItem>
          <MenuItem  onClick={() => handleScroll('aboutRef')}>About</MenuItem>
          <MenuItem  onClick={() => handleScroll('contactRef')}>Contact</MenuItem>
        </Menu>
        <div id="title_name">
          <div id="name-div" onClick={handleResumeModal} style={{textAlign: 'right', marginRight: '100px'}}>
            <h2 >Bryan</h2> 
            <h2>Clark</h2>
          </div>
          <div id="title-div" style={{textAlign: 'right', marginRight: '100px'}}>
            <h3>Frontend</h3>
            <h3>Engineering</h3>
          </div>
        </div>
      </div>
      <div id="project-header-container">
        <div id="project-header"  style={{backgroundImage: `url('${image4}')`}}></div>
      </div>
      <div id="project-div-container" ref={projRef} style={{  height: '500px', width: '500px'}}>
        <Project />
      </div>
      <div id="about-header-container">
        <div id="about-header"  style={{backgroundImage: `url('${image4}')`}}></div>
      </div>
      <div id="about" ref={aboutRef} style={{ height: '500px', width: '500px'}}>
        <About />
      </div>
      <div id="contact-header-container">
        <div id="contact-header" style={{backgroundImage: `url('${image4}')`}}></div>
      </div>
      <div id="contact" ref={contactRef} style={{  height: '500px', width: '500px'}}>
        <Contact />
      </div>
      <div id="bottom-image-container">
        <div id="bottom-image" style={{backgroundImage: `url('${image4}')`}}></div> 
      </div>
      <ResumeModal openResume={openResume} setOpenResume={setOpenResume}/>
    </div>
  )
}

export default App;