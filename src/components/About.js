import React from 'react';

import Container from './utils/Container';

const About = () => {
  return (
    <Container className="about" width="sm">
      <h2 className="text-center">Welcome to Auto Body Repairs</h2>
      <hr className="w-50" />
      <p>Auto Body repairs pride ourselves on offering the highest quality service using genuine manufacturer parts and being approved by major insurance providers and manufacturers.</p>
      <p>Our purpose built premises use modern equipment and is suitable for all manners of repair work, respraying and valeting.</p>
      <p>Contact us to get an estimate or for advice on your car needs.</p>
    </Container>
  );
};

export default About;
