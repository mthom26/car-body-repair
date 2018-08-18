import React from 'react';

import logo from '../images/logo.svg';
import menuIcon from '../images/menuIcon.svg';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="navInfo">
          <a href="#">info@carbodyrepair.com</a>
          <p>012 345678</p>
        </div>
        <div className="navContainer">
          <div className="navLogoAndMenu">
            <a href="#"><img src={logo} width="42px" /></a>
            <img className="menuBtn" src={menuIcon} width="42px" />
          </div>
          <nav className="navItems">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;