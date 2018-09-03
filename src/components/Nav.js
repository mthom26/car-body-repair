import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../images/logo.svg';
import menuIcon from '../images/menuIcon.svg';
import emailIcon from '../images/e-mail-white.svg';
import phoneIcon from '../images/phone-white.svg';

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
          <div className="contactDetailsPair contactDetailsPair-inline">
            <img
              src={phoneIcon}
              width="22px"
              height="22px"
              style={{marginRight: '1rem'}}
            />
            <p>000 123456789</p>
          </div>
          <div className="contactDetailsPair contactDetailsPair-inline">
            <img
              src={emailIcon}
              width="22px"
              height="22px"
              style={{marginRight: '1rem'}}
            />
            <p>info@autobodyrepairs.com</p>
          </div>
        </div>

        <div className="navContainer">
          <div className="navLogoAndMenu">
            <AnchorLink href="#header">
              <img src={logo} width="150px" />
            </AnchorLink>
            <img
              className="menuBtn"
              src={menuIcon}
              width="42px"
              height="42px"
              onClick={this.toggleNav}
            />
          </div>
          <nav className={`${navItemsClass} navItems`}>
            <AnchorLink onClick={this.toggleNav} offset="100" href="#about" className="navLink">
              <p>About</p>
            </AnchorLink>
            <AnchorLink onClick={this.toggleNav} offset="100" href="#services" className="navLink">
             <p>Services</p>
            </AnchorLink>
            <AnchorLink onClick={this.toggleNav} offset="100" href="#contact" className="navLink">
              <p>Contact</p>
            </AnchorLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;