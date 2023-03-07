import React from 'react';
import '../App.css';
import 'bulma/css/bulma.css';

import download from '../images/download.png';
import three from '../images/3.jpg';

const AwardsAndCertifications = () => {
    return (
      <div>
        <p id="navbar" style={{ color: "#51F418" }}>
          Awards and Certifications
        </p>
        <div>
          <div
            style={{ width: "100%", textAlign: "center", marginTop: "5%" }}
            className="subcontainer"
          >
            <div id="aandc" className="text" style={{ marginLeft: "30%" }}>
              <div style={{ fontWeight: "bold" }}>
                <p style={{ marginBottom: "2%" }}>
                  <img
                    className="bullets"
                    src={download}
                    style={{ marginRight: "3%" }}
                  />
                  Diploma in Management Accounting
                </p>
  
                <div style={{ fontWeight: "normal" }}>
                  <p>Chartered Institute of Management Accountants</p>
                  <p>(CIMA)</p>
                  <p>(Nov 2020 to May 2022)</p>
                </div>
              </div>
            </div>
          </div>
  
          <div
            className="maincontainer"
            style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
          >
            <div
              className="subcontainer"
              style={{ width: "40%", marginLeft: "3%", marginBottom: "1%" }}
            >
              <img
                style={{ marginLeft: "8%" }}
                className="avatar"
                src={three}
                width="60%"
              />
            </div>
  
            <div
              id="aandc"
              className="text"
              style={{ marginLeft: "5%", textAlign: "center" }}
            >
              <div style={{ fontWeight: "bold" }}>
                <p style={{ marginBottom: "3%" }}>
                  <img
                    className="bullets"
                    src={download}
                    style={{ marginTop: "5%" }}
                  />
                  Diploma in English Language
                </p>
  
                <div style={{ fontWeight: "normal" }}>
                  <p>British-way English Academy</p>
                  <p>Honor Pass</p>
                  <p>(Jan 2018 to April 2018)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AwardsAndCertifications;