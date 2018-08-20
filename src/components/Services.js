import React from 'react';

import Container from './utils/Container';

import cog from '../images/cog-rounded.svg';

const Services = () => {
  return (
    <Container>
      <div className="services">
        <div className="service">
          <img src={cog} />
          <h2>Bodywork Repair</h2>
          <p></p>
        </div>
        <div className="service">
          <img src={cog} />
          <h2>Alloy Wheel Refurbishment</h2>
        </div>
        <div className="service">
          <img src={cog} />
          <h2>Paint Resprays</h2>
        </div>
      </div>
    </Container>
  );
};

export default Services;
