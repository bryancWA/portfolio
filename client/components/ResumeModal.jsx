import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import image from '../../Images/Bryan_Clark_Resume.jpg';
import Button from '@material-ui/core/Button';
import { useReactToPrint } from 'react-to-print';
import styles from '../../public/styles.css';

const ResumeModal = ({ openResume, setOpenResume }) => {

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
  
  const componentToPrint = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentToPrint.current,
    documentTitle: 'Bryan Clark Resume',
  });



  const handleCloseModal = () => {
    setOpenResume(false);
  }
  
  if (openResume) {
    return (ReactDOM.createPortal(<div>
      <div style={OVERLAY_STYLE} onClick={handleCloseModal}></div>
      <div style={MODAL_STYLE}>
        <img id="resumeImage" ref={componentToPrint} src={image}/>
        <Button onClick={handlePrint}> Print </Button>
        <Button onClick={handleCloseModal}> Close </Button>
      </div>
      
    </div>
    , document.getElementById('portal'))
  )} else {
    return null;
  }
}

export default ResumeModal;