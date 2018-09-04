import React from 'react';

import Container from './utils/Container';

import estimate from '../images/estimateRed.svg';
import phone from '../images/phoneRed.svg';

const About = () => {
  return (
    <Container id="about" className="about" width="sm">
      <h2 className="text-center">Welcome to Auto Body Repairs</h2>
      <hr className="w-50" />
      <p>Auto Body repairs pride ourselves on offering the highest quality service using genuine manufacturer parts and being approved by major insurance providers and manufacturers.</p>
      <p>Our purpose built premises use modern equipment and is suitable for all manners of repair work, respraying and valeting.</p>
      <p>Contact us to get an estimate or for advice on your car needs.</p>
      <div className="aboutIcons text-center">
        <div className="aboutIcon">
          <img src={estimate} className="aboutIconImg" width="68px" />
          <p>Free, No Obligation Quotes</p>
        </div>
        <div className="aboutIcon">
          <img src={phone} className="aboutIconImg" width="68px" />
          <p>24hr Recovery Available</p>
        </div>
      </div>
    </Container>
  );
};

export default About;
