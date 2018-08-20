import React from 'react'

const Container = ({ children, width, className }) => {
  return (
    <div className={`${className} container container-${width}`}>
      {children}
    </div>
  );
};

export default Container;
