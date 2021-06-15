import React from 'react';
import ReactDOM from 'react-dom';

const BlueOceanModal = ({ openBlue, setOpenBlue }) => {
  
  const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '600px',
    height: '800px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '50px',
    zIndex: 1000,
    textAlign: 'center'
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
    setOpenBlue(true);
  }

  const handleCloseModal = () => {
    setOpenBlue(false);
  }

  if(openBlue) {
    return (ReactDOM.createPortal(
      <div>
        <div style={OVERLAY_STYLE} onClick={handleCloseModal}></div>
        <div style={MODAL_STYLE} onClick={handleCloseModal}>Blue Ocean project description</div>
      </div>
    , document.getElementById('portal')));
  } else {
    return (<div onClick={handleOpenModal}>Open Blue Ocean</div>)
  }

}

export default BlueOceanModal;