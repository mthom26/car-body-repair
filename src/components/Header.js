import React from 'react'
import Img from 'gatsby-image';

const Header = ({ image }) => {
  return (
    <div id="header" className="header">
      <div className="headerContentContainer">
        <h1>Car Body Repair</h1>
        <h2>Lorem Ipsum</h2>
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
