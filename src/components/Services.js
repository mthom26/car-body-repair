import React from 'react';
import Img from 'gatsby-image';

import Container from './utils/Container';

const Services = ({ bodyImage, resprayImage, wheelsImage }) => {
  console.log(bodyImage);
  console.log(resprayImage);
  console.log(wheelsImage);
  return (
    <Container className="services">
      <div className="service">
        <div className="serviceContent">
          <Container className="text-center" width="sm">
            <h2>Bodywork Repair</h2>
            <p>We offer a large range of repairs including bumper and full panel replacement, dent removal and scratch/scuff removal using machine polishing leaving your car looking as good as new.</p>
          </Container>
        </div>
        <Img
          outerWrapperClassName="serviceImage"
          style={{height: '100%'}}
          sizes={bodyImage.childImageSharp.sizes}
        />
      </div>
    </Container>
  );
};

export default Services;
