import React from 'react';

const PageHeader = ({ backgroundImage, pageTitle }) => {
  return (
    <div
      className='d-flex align-items-center justify-content-center bg-image'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '200px', // Adjust the height as needed
      }}
    >
      <h1 className="text-uppercase text-white">{pageTitle}</h1>
    </div>
  );
};

export default PageHeader;
