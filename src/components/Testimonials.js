import React from 'react';
import Img from 'gatsby-image';
import {
  CarouselProvider,
  ButtonBack,
  ButtonNext,
  Slider,
  Slide
} from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

const Testimonials = ({ image }) => {
  //console.log(image)
  return (
    <div className="testimonials">
      <div className="testimonialsContent text-center">
        <h2>Customer Testimonials</h2>
        <CarouselProvider
          naturalSlideHeight={100}
          naturalSlideWidth={150}
          totalSlides={3}
          isPlaying={true}
          interval={5000}
          className="cprov"
        >
          <Slider>
            <Slide innerClassName="slide" index={0}>
              <p>Excellent and timely service. Thanks Auto Body Repairs!</p>
              <hr className="w-75" />
              <p>Mr A. Davis</p>
            </Slide>
            <Slide innerClassName="slide" index={1}>
              <p>Prompt high quality service. Would recommend to family and friends.</p>
              <hr className="w-75" />
              <p>Mr J. McCabe</p>
            </Slide>
            <Slide innerClassName="slide" index={2}>
              <p>Excellent and timely service. Thanks Auto Body Repairs!</p>
              <hr className="w-75" />
              <p>Mr T. Jeffries</p>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
      
      <Img 
        outerWrapperClassName="testimonialsImage"
        style={{height: '100%'}}
        sizes={image.childImageSharp.sizes}
      />
      <div className="testimonialsOverlay" />
    </div>
  );
};

export default Testimonials;
