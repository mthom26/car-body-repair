import React from 'react';
import Img from 'gatsby-image';

const Testimonials = ({ image }) => {
  //console.log(image)
  return (
    <div className="testimonials">
      <div className="testimonialsContent text-center">
        <h2>Customer Comments</h2>
        <p>Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue.</p>
        <p>Mr. Big Noodle</p>
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
