import React from 'react';
import '../App.css';
import 'bulma/css/bulma.css';

import dp from '../images/dp.jpg';

function MainContainer() {
  return (
    <>
      <div className="maincontainer">
        <div className="subcontainer margin" style={{ width: '60%' }}>
          <h1 className="h11">Hello!</h1>
          <h4>I’m Venuri Abeysekara</h4>
          <p className="p1" style={{ marginBottom: '15%' }}>Web Designer | Undergraduate</p>
        </div>
        <div className="subcontainer" style={{ width: '40%', marginTop: '10%', marginBottom: '10%' }}>
          <img className="profile-img" src={dp}  width="70%" />
        </div>
      </div>
      <hr style={{ marginTop: '5%', marginBottom: '5%' }} />
    </>
  );
}

export default MainContainer;