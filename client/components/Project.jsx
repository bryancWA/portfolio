import React, { useState } from 'react';
import SnagModal from './ProjectModals/SnagModal.jsx';
import BlueOceanModal from './ProjectModals/BlueOceanModal.jsx';
import ProjCatwalkModal from './ProjectModals/ProjCatwalkModal.jsx';

const Project = () => {
  const [openCatwalk, setOpenCatwalk] = useState(false);
  const [openSnag, setOpenSnag] = useState(false);
  const [openBlue, setOpenBlue] = useState(false);

  return (
    <div id="project-div">
      <h2> Projects </h2>
      <div id="project-row">
        <div id="snag-style">
          <h3>Snag</h3>
          <SnagModal openSnag={openSnag} setOpenSnag={setOpenSnag}/>
          <p style={{width: '250px'}}>This is my passion project. Having spent years recreating on rivers...</p>
        </div>
        <div id="blue-style">
          <h3>Blue Ocean - Smove</h3>
          <BlueOceanModal openBlue={openBlue} setOpenBlue={setOpenBlue}/>
          <p style={{width: '250px'}}>I worked with a team of engineers on creating a residential moving services app...</p>
        </div>
        <div id="catwalk-style">
          <h3>Project Catwalk</h3>
          <ProjCatwalkModal openCatwalk={openCatwalk} setOpenCatwalk={setOpenCatwalk}/>
          <p style={{width: '250px'}}>...I built out the functionality of the customer-facing portal for an e-commerce platform.</p>
        </div>
      </div>
    </div>
  )
}

export default Project;