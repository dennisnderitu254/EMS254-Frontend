import React from 'react';

const HeroSection = ({ backgroundImage }) => {
  return (
    <div
      className='d-flex align-items-center justify-content-center bg-image'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80vh', // Adjust the height as needed
      }}
    >
      <div className='mask gradient-custom-3'></div>
    </div>
  );
};

export default HeroSection;
