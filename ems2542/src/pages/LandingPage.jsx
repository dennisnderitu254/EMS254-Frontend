import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/landing/Services";
import HowItWorks from "../components/landing/HowItWorks";

function LandingPage() {
  return (
    <div>
        <HeroSection
            backgroundImage="https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp"
        />
        <div className="container">
            {/* where i will implement the rest of the about us */}
            <h1 className="text-center mt-5 display-5">Services</h1>
            <Services />
            <h1 className="text-center mt-5 display-5">How It Works</h1>
            <HowItWorks />
        </div>
    </div>
  );
}

export default LandingPage;
