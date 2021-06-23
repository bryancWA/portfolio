import React from 'react';
import ReactDOM from 'react-dom';
import image1 from '../../../Images/FECcomponent.png';
import image2 from '../../../Images/k6StressTest.png';

const ProjCatwalkModal = ({ openCatwalk, setOpenCatwalk }) => {
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
    overflowY: 'scroll',
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
    setOpenCatwalk(true);
  }

  const handleCloseModal = () => {
    setOpenCatwalk(false);
  }

  if(openCatwalk) {
    return (ReactDOM.createPortal(
    <div>
      <div style={OVERLAY_STYLE} onClick={handleCloseModal}></div>
      <div style={MODAL_STYLE} onClick={handleCloseModal}>
        <h2>Catwalk project description</h2>
        <div id="system-design">
          <h3> System Design </h3>
          <p id="system-design-paragraph"> After inheriting a legacy codebase frontend, a team of engineers and I designed and built out the backend system to allow for an industry standard amount of traffic. We designed our system to integrate without interrupting existing service requirements.

            For our server we decided to use <span>Express</span> for easy integration with the frontend. To handle a large quantity of data, and to provide exemplary query speed, our team decided on constructing our database using <span>PostgreSQL</span>. We tested locally using <span>K6</span>, and after deployment we tested our system with <span>Loader.io</span>.

            The major pitfall in our project was not the technology we chose, but rather the technologies we didn’t choose. Had we chosen to integrate our system using <span>Docker</span>, it would have made for a more seamless transition to deployment. We easily navigated <span>AWS</span> and created multiple instances using the AWS graphic interface, however consistency would’ve been achieved at a much faster rate had we gone with Docker.
          </p>
          <img src={image2} style={{height: '350px', width: '450px'}} alt="k6 testing output"/>
        </div>
        <div id="frontend-design">
          <h3> Frontend Design </h3>
          <p id="frontend-design-paragraph"> With the aid of a wireframe and several user-stories, a team of frontend engineers and I built out the functionality of the customer-facing portal for an e-commerce platform. We had an existing blackbox database, and the sole focus of this project was frontend functionality.

            We chose to build this application using <span>React</span>, so as to provide the user with a dynamic web experience. To ensure consistent communication with our database we decided to use an <span>Express</span> server, and all AJAX requests were made using the <span>Axios</span> library.

            The main pitfalls of the project came in the form of working with a preexisting blackbox database, however we developed a system that ensured we had the correct endpoints in our AJAX requests, and ultimately prevailed in getting our deliverables finished in a timely manner. Given more time for this project, and who knows what else my team and I could have accomplished.
          </p>
          <img src={image1} style={{height: '350px', width: '450px'}} alt="catwalk frontend"/>

        </div>
      
      
      </div>
    </div>
    , document.getElementById('portal')));
  } else {
    return (<div onClick={handleOpenModal}>
      <img src={image1} style={{height: '200px', width: '250px'}}/>
      </div>)
  }


}

export default ProjCatwalkModal;