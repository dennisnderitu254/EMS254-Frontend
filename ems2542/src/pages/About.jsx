import React from 'react';
import PageHeader from '../components/PageHeader'; // Import the PageHeader component

function About() {
  const backgroundImage = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp';

  return (
    <div>
      <PageHeader backgroundImage={backgroundImage} pageTitle="About Us" />
      <div className="container">
        {/* where i will implement the rest of the about us */}
      </div>
    </div>
  );
}

export default About;
