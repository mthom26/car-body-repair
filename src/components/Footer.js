import React from 'react';

import Container from './utils/Container';

const Footer = () => {
  return (
    <div className="footer">
      <Container width="md" className="footerContainer text-center">
        <div>
          <h2>Logo</h2>
        </div>
        <div>
          <p>Call or email for an estimate or advice.</p>
          <p>Icons</p>
        </div>
        <div>
          <p>Links</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
