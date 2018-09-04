import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Container from './utils/Container';

import emailIcon from '../images/e-mail-white.svg';
import phoneIcon from '../images/phone-white.svg';
import logo from '../images/logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <Container width="md" className="footerContainer text-center">
        <div className="footerItem">
          <AnchorLink href="#header">
            <img src={logo} width="150px" />
          </AnchorLink>
        </div>
        <div className="footerItem">
          <p>Call or email for an estimate or advice.</p>
          <div>
            <a href="tel:000123456789">
              <img
                src={phoneIcon}
                width="22px"
                height="22px"
                style={{marginRight: '1rem'}}
              />
            </a>
            <a href="mailto:info@autobodyrepairs.com">
              <img
                src={emailIcon}
                width="22px"
                height="22px"
              />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
