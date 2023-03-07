import React from 'react';
import '../App.css';
import 'bulma/css/bulma.css';

import download from '../images/download.png';
import four from '../images/four.jpg';

const Education = () => {
return (
<>
    <hr color="white" style={{ marginTop: '5%', marginBottom: '5%' }} />
    <p id="navbar" style={{ color: '#51F418' }}>Education</p>
    <div>
    <div style={{ width: '100%', textAlign: 'center', marginTop: '5%' }} className="subcontainer">
    <div id="education" className="text" style={{ marginLeft: '20%' }}>
    <div style={{ fontWeight: 'bold' }}>
    <p style={{ marginBottom: '2%' }}><img className="bullets" src={download} />Bachelor of Science in Information Systems</p>

          <div style={{ fontWeight: 'normal' }}>
            <p>University Of Colombo, Sri Lanka</p>
            <p>(June 2022 to Present)</p>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', textAlign: 'center', marginTop: '5%' }} className="subcontainer">
        <div id="education" className="text" style={{ marginLeft: '30%' }}>
          <div style={{ fontWeight: 'bold' }}>
            <p style={{ marginBottom: '2%' }}><img className="bullets" src={download} style={{ marginRight: '3%' }} /> Secondary Education</p>

            <div style={{ fontWeight: 'normal' }}>
              <p>Passed General Certificate of Education Advanced Level Exam</p>
              <p>with 1 A pass and 2 C passes.</p>
              <p>(2018 to 2020)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="maincontainer" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <div className="subcontainer" style={{ width: '40%', marginLeft: '3%', marginBottom: '1%' }}>
          <img style={{ marginLeft: '3%' }} className="avatar" src={four} width="70%" />
        </div>

        <div id="education" className="text" style={{ marginLeft: '6%' }}>
          <div style={{ fontWeight: 'bold' }}>
            <p style={{ marginBottom: '2%' }}><img className="bullets" src={download} style={{ marginRight: '3%', marginTop: '5%' }} />Primary Education</p>

            <div style={{ fontWeight: 'normal' }}>
              <p>Passed General Certificate of Education Ordinary Level Exam</p>
              <p>with 8 A passes and 1C pass.</p>
              <p>(2016 to 2017)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr style={{ marginTop: '5%', marginBottom: '5%' }} />
</>
);
}

export default Education;