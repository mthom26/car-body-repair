import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../images/logo.svg';
import menuIcon from '../images/menuIcon.svg';

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  toggleNav = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const navItemsClass = this.state.isOpen ? 'navItemsShow' : 'navItemsHide';

    return (
      <div className="nav">
        <div className="navInfo">
          <a href="#header">info@carbodyrepair.com</a>
          <p>012 345678</p>
        </div>

        <div className="navContainer">
          <div className="navLogoAndMenu">
            <AnchorLink href="#header"><img src={logo} width="42px" /></AnchorLink>
            <img
              className="menuBtn"
              src={menuIcon}
              width="42px"
              height="42px"
              onClick={this.toggleNav}
            />
          </div>
          <nav className={`${navItemsClass} navItems`}>
            <AnchorLink offset="100" href="#about" className="navLink">
              <p>About</p>
            </AnchorLink>
            <AnchorLink offset="100" href="#services" className="navLink">
             <p>Services</p>
            </AnchorLink>
            <AnchorLink offset="100" href="#contact" className="navLink">
              <p>Contact</p>
            </AnchorLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;