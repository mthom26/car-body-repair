import React from 'react'
import Img from 'gatsby-image';
import { Fade } from 'react-reveal';

const Header = ({ image }) => {
  return (
    <div id="header" className="header">
      <div className="headerContentContainer">
        <Fade>
          <h1>Auto Body Repairs</h1>
          <h2>High quality accident repairs, resparays and wheel refurbishment.</h2>
        </Fade>
      </div>
      <Img 
        outerWrapperClassName="headerImage"
        style={{height: '100%'}}
        sizes={image.childImageSharp.sizes}
      />
    </div>
  );
};

export default Header;
