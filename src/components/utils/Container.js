import React from 'react'

const Container = ({ children, width, className, id }) => {
  if(id) {
    return (
      <div id={id} className={`${className} container container-${width}`}>
        {children}
      </div>
    );
  }
  return (
    <div className={`${className} container container-${width}`}>
      {children}
    </div>
  );
};

export default Container;
