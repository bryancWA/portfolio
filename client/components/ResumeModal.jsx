import React from 'react';
import ReactDOM from 'react-dom';
import image from '../../Images/Bryan_Clark_Resume.jpg';
import Button from '@material-ui/core/Button';

const ResumeModal = ({ openResume, setOpenResume }) => {

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

  const handleCloseModal = () => {
    setOpenResume(false);
  }
  
  if (openResume) {
    return (ReactDOM.createPortal(<div>
      <div style={OVERLAY_STYLE} onClick={handleCloseModal}></div>
      <div style={MODAL_STYLE} onClick={handleCloseModal}>
        <img style={{height: '750px', width: '550px'}}src={image}/>
        <Button> Print </Button>
      </div>
      
    </div>
    , document.getElementById('portal'))
  )} else {
    return null;
  }
}

export default ResumeModal;