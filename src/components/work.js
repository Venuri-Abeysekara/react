import React from 'react';
import '../App.css';
import 'bulma/css/bulma.css';

import download from '../images/download.png';
import two from '../images/two.jpg';


function Work() {
  return (
    <>
      <p id="navbar" style={{color: "#51F418"}}>Work</p>
      <div>
        <div style={{width: "100%", textAlign: "center", marginTop: "5%"}} className="subcontainer"> 
          <div id="work" className="text" style={{marginLeft: "20%"}}>
            <div style={{fontWeight: "bold"}}>
              <p style={{marginBottom: "2%"}}><img className="bullets" src={download} style={{marginRight: "3%"}}/>Student Web Developer</p>
              <div style={{fontWeight: "normal"}}>
                <p>Ink Corporation</p>
                <p>Created, designed and edited web pages based on customer specifications.</p>
                <p>Interpret the client database.Maintain organizational website.</p>
                <p>(2021 - Present)</p>
              </div> 
            </div>   
          </div>
        </div>

        <div className="maincontainer" style={{width: "100%", display: "flex", justifyContent: "flex-end"}}> 
          <div className="subcontainer" style={{width: "40%", marginLeft: "5%", marginBottom: "1%"}}>
            <img style={{marginLeft: "12%"}} className="avatar" src={two} width="50%" />
          </div>

          <div id="work" className="text" style={{textAlign: "center", display: "flex", justifyContent: "flex-start", marginLeft: "5%", marginRight: "5%"}}>
            <div style={{fontWeight: "bold"}}>
              <p style={{marginBottom: "2%"}}><img className="bullets" src={download} style={{marginRight: "3%", marginTop: "5%"}}/>Freelancer Web Developer</p>
              <div style={{fontWeight: "normal"}}>
                <p>Designed Outdoor graphics for local partnerships.</p>
                <p>Created a webapp for a teachable machine.</p>
                <p>(2018 - 2021)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
