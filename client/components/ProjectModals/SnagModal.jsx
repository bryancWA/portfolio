import React from 'react';
import ReactDOM from 'react-dom';
import image from '../../../Images/SnagGiphy.gif';

const SnagModal = ({ openSnag, setOpenSnag }) => {
  const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '600px',
    height: '600px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '50px',
    zIndex: 1000,
    textAlign: 'center',
    overflowY: 'scroll'
  }

  const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .35)',
    zIndex: 1000
  }

  const handleOpenModal = () => {
    setOpenSnag(true);
  }

  const handleCloseModal = () => {
    setOpenSnag(false);
  }

  if(openSnag) {
    return (ReactDOM.createPortal(
      <div>
        <div style={OVERLAY_STYLE} onClick={handleCloseModal}></div>
        <div style={MODAL_STYLE} onClick={handleCloseModal}>
          <h2>Snag project description</h2>
          <img src={image} alt="Snag Gif"/>
          <p id="snag-paragraph">This is my passion project. Having spent years recreating on rivers throughout the Pacific Northwest, my number one question throughout all of these years was, what does the river look like. In addition, it took some brain power to remember the river levels, height and/or discharge, at which I wanted to conduct my activity. Thus, Snag was born.

            Using Google’s Geocode API, I quickly turned an address or a zip code into usable coordinates, and additionally offered Javascript’s native geolocation method for IP address location, which in turn I used to provide location parameters to the USGS Water Services API.

            Next, I chose to build my database for user stored information using PostgreSQL, and I created queries using Express.js server. Therefore, user data could easily be compared to the live river data coming in from the API’s.

            As stated, this is my passion project and it is my passion to continue to work on it and hone my craft.
          </p>
        </div>
        
      </div>
    , document.getElementById('portal')));
  } else {
    return (<div onClick={handleOpenModal}>
      Open Snag
      <img src={image} style={{height: '100px', width: '150px'}} alt="snag gif"/>
      </div>)
  }

}

export default SnagModal;