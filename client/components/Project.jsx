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
      <SnagModal openSnag={openSnag} setOpenSnag={setOpenSnag}/>
      <BlueOceanModal openBlue={openBlue} setOpenBlue={setOpenBlue}/>
      <ProjCatwalkModal openCatwalk={openCatwalk} setOpenCatwalk={setOpenCatwalk}/>
    </div>
  )
}

export default Project;