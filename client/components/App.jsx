import React, { useState } from 'react';
import Project from './Project.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import ResumeModal from './ResumeModal.jsx';
import { Menu, MenuItem, Button } from '@material-ui/core';


const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openResume, setOpenResume] = useState(false);

  const handleMenu = (event) => {

    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = (event) => {
    // document.getElementById(event.target.value).scrollIntoView()
    setAnchorEl(null);

  }

  const handleResumeModal = () => {
    setOpenResume(true);
  }

  return (
    <div>
      <Button onClick={handleMenu}>Menu</Button>
      <Menu 
      anchorEl={anchorEl}
      onClose={handleMenuClose}
      open={Boolean(anchorEl)}> 
        <MenuItem value="project-div" onClick={handleMenuClose}>Projects</MenuItem>
        <MenuItem onClick={handleMenuClose}>About</MenuItem>
        <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
      </Menu>
      <div id="name-div">
        <h2 onClick={handleResumeModal}>Bryan</h2> 
        <h2>Clark</h2>
      </div>
      <div id="title-div">
        <h3>Frontend</h3>
        <h3>Engineering</h3>
      </div>
      <div id="project-div">
        <Project />
      </div>
      <About />
      <Contact />
      <ResumeModal openResume={openResume} setOpenResume={setOpenResume}/>
    </div>
  )
}

export default App;