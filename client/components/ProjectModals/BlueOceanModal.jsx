import React from 'react';
import ReactDOM from 'react-dom';
import image from '../../../Images/smoveMainPage.png';

const BlueOceanModal = ({ openBlue, setOpenBlue }) => {
  
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
    setOpenBlue(true);
  }

  const handleCloseModal = () => {
    setOpenBlue(false);
  }

  if(openBlue) {
    return (ReactDOM.createPortal(
      <div>
        <div style={OVERLAY_STYLE} onClick={handleCloseModal}></div>
        <div style={MODAL_STYLE} onClick={handleCloseModal}>
          <h3>Blue Ocean Project Description</h3>
          <p id="blue-ocean-paragraph">
            I worked with a team of engineers on creating a residential moving services application.
            This full-stack application was built with React to enhance dynamic rendering. We also decided to implement
            React Router for a multi-page user experience. Node.js and Express server were utilized to handle backend requests
            and we utilized MongoDB for persistance of user-data. 

            As an autonomous team, we worked with the client and divided the workload into components and subcomponents. 
            My particular team was given the inventory component, where user's could store information about boxes. 
            We built a dynamic list component which allowed the user to edit and delete boxes from their packing list, and keep track of box numbers
            and contents using a numeric I.D. system.

            Our main success was the turnaround time between meeting with the client and successful presentation of MVP. Due to our team's
            reliance on organizational technologies such as Trello, and an effective agile development methodology we were able to 
            accomplish a lot in only 9 short days.
          </p>
          <img src={image} style={{height: '350px', width: '450px'}} alt="smove main page"/>
        </div>  
      </div>
    , document.getElementById('portal')));
  } else {
    return (<div onClick={handleOpenModal}>
        <img src={image} style={{height: '200px', width: '250px'}}/>
      </div>)
  }

}

export default BlueOceanModal;