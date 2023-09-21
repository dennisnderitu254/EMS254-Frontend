import React from 'react';
import PageHeader from '../components/PageHeader'; // Import the PageHeader component

function Contact() {
  const backgroundImage = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp';

  return (
    <div>
      <PageHeader backgroundImage={backgroundImage} pageTitle="Contact Us" />
      <div className="container">
        {/* where to implement the rest of the contact us */}
      </div>
    </div>
  );
}

export default Contact;
