import React, { useState, useRef, useEffect } from 'react';
import Project from './Project.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import ResumeModal from './ResumeModal.jsx';
import { Menu, MenuItem, Button } from '@material-ui/core';


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
    <div>
      <Button onClick={handleMenu}>Menu</Button>
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
      <div id='landing-info' style={{ height: '600px', width: '500px', border: '2px solid black'}}>
        <div id="name-div">
          <h2 onClick={handleResumeModal}>Bryan</h2> 
          <h2>Clark</h2>
        </div>
        <div id="title-div">
          <h3>Frontend</h3>
          <h3>Engineering</h3>
        </div>
      </div>
      <div id="project-div" ref={projRef} style={{ height: '600px', width: '500px', border: '2px solid black'}}>
        <Project />
      </div>
      <div id="about" ref={aboutRef} style={{ height: '600px', width: '500px', border: '2px solid black'}}>
        <About />
      </div>
      <div id="contact" ref={contactRef} style={{ height: '600px', width: '500px', border: '2px solid black'}}>
        <Contact />
      </div>
      <ResumeModal openResume={openResume} setOpenResume={setOpenResume}/>
    </div>
  )
}

export default App;