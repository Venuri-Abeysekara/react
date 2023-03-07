import React from 'react';
import '../App.css';
import 'bulma/css/bulma.css';

function Navbar() {
  return (
    <nav id="navbar" role="navigation" aria-label="main navigation" style={{ marginLeft: '30%' }}>
      <div className="navbar-brand">
        <a role="button" className="navbar" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="#about" className="navbar-item">About</a>
          <a href="#work" className="navbar-item">Work</a>
          <a href="#education" className="navbar-item">Education</a>
          <a href="#aandc" className="navbar-item">Awards and certificates</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;