import React from 'react';
import 'bulma/css/bulma.css';
import '../App.css';

import one from '../images/one.jpg';



const AboutSection = () => {
  return (
    <>
    <div>
      <p id="navbar" style={{color: '#51F418'}} href="#about">About</p>

      <div>
        <div style={{width: '100%', textAlign: 'center', marginTop: '5%', paddingLeft: '2%', paddingRight: '2%'}} className="subcontainer">
          <div style={{fontSize: '150%', fontFamily: 'Verdana', color: 'white'}}>
            <p>Motivated and hardworking ungraduated at University Of Colombo. Diploma holder in management accounting. Active member of the IEEE student branch of University of Colombo School of Computing and the Rotaract Club of University of Colombo School of Computing. CIMA student who is following up studies on the Management Level.</p>
          </div>
        </div>

        <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
          <div className="subcontainer" style={{width: '50%', marginTop: '5%', marginBottom: '1%'}}>
            <img style={{marginLeft: '12%'}} className="avatar" src={one} width="50%" alt="Profile" />
          </div>

          <div className="duplicate" style={{width: '100%', display: 'flex', justifyContent: 'flex-start'}}>
            <div id="about" style={{marginBottom: '5%', marginTop: '10%'}}>
              <div style={{fontSize: '150%', fontFamily: 'Verdana', color: 'white'}}>
                <p><div style={{color:'#51F418'}}>Name:</div><div style={{color:'white'}}> Venuri Abeyseakara</div></p>
                <p><div style={{color:'#51F418'}}>Address:</div><div style={{color:'white'}}> Colombo, Sri Lanka</div></p>
                <p><div style={{color:'#51F418'}}>Age:</div><div style={{color:'white'}}> 20 y/o </div></p>
              </div>
            </div>

            <div id="about" style={{marginBottom: '5%', marginTop: '10%'}}>
              <div style={{fontSize: '150%', fontFamily: 'Verdana', color: 'white'}}>
                <p><div style={{color:'#51F418'}}>University:</div><div style={{color:'white'}}> University of Colombo</div></p>
                <p><div style={{color:'#51F418'}}>E-mail:</div><div style={{color:'white'}}> Venuri@yahoo.com</div></p>
                <p><div style={{color:'#51F418'}}>Tel.no:</div><div style={{color:'white'}}> +94 713 428 854</div></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr style={{ marginTop: '5%', marginBottom: '5%' }} />
    </>
  );
};

export default AboutSection;
