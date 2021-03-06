import React from 'react';
import Img from 'gatsby-image';
import { Fade } from 'react-reveal';

import Container from './utils/Container';

const Services = ({ bodyImage, resprayImage, wheelsImage }) => {
  // console.log(bodyImage);
  // console.log(resprayImage);
  // console.log(wheelsImage);
  return (
    <Container id="services" className="services">
      <div className="service">
        <div className="serviceContent">
          <Container className="text-center" width="xs">
            <Fade left>
              <div>
                <h2>Bodywork Repair</h2>
                <hr className="w-50"/>
                <p>We offer a large range of repairs including bumper and full panel replacement, dent removal and scratch/scuff removal using machine polishing leaving your car looking as good as new.</p>
              </div>
            </Fade>
          </Container>
        </div>
        <div className="serviceImage">
        <Fade right>
          <Img
            outerWrapperClassName="serviceImage"
            style={{height: '100%'}}
            sizes={bodyImage.childImageSharp.sizes}
          />
        </Fade>
        </div>
      </div>

      <div className="service">
        <div className="serviceContent">
          <Container className="text-center" width="xs">
            <Fade right>
              <div>
                <h2>Respray</h2>
                <hr className="w-50"/>
                <p>We offer full and partial resprays. Whether you want to rejuvenate a dull looking paint job or try a completely new colour we can accomodate your needs.</p>
              </div>
            </Fade>
          </Container>
        </div>
        <div className="serviceImage">
          <Fade left>
            <Img
              outerWrapperClassName="serviceImage"
              style={{height: '100%'}}
              sizes={resprayImage.childImageSharp.sizes}
            />
          </Fade>
        </div>
      </div>

      <div className="service">
        <div className="serviceContent">
          <Container className="text-center" width="xs">
            <Fade left>
              <div>
                <h2>Wheel Refurbishment</h2>
                <hr className="w-50"/>
                <p>Wheels are the point of contact with the road and are therefore put under a lot of stress. We can repair cracked/damaged alloys or simply remove scuffs, scratches and other superficial damage to have your car looking like new.</p>
              </div>
            </Fade>
          </Container>
        </div>
        <div className="serviceImage">
          <Fade right>
            <Img
              outerWrapperClassName="serviceImage"
              style={{height: '100%'}}
              sizes={wheelsImage.childImageSharp.sizes}
            />
          </Fade>
        </div>
      </div>
    </Container>
  );
};

export default Services;
