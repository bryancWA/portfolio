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
        </div>
        <div id="blue-style">
          <h3>Blue Ocean - Smove</h3>
          <BlueOceanModal openBlue={openBlue} setOpenBlue={setOpenBlue}/>
        </div>
        <div id="catwalk-style">
          <h3>Project Catwalk</h3>
          <ProjCatwalkModal openCatwalk={openCatwalk} setOpenCatwalk={setOpenCatwalk}/>
        </div>
      </div>
    </div>
  )
}

export default Project;