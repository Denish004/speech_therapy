import React from 'react'
import Navbar from '../components/NavbarAB';
import Hero from '../components/HeroAB';
import ProcessFlow from '../components/ProcessFlow';
import FeatureHighlights from '../components/FeatureHighlights';
import SupervisorDashboardPreview from '../components/SupervisorDashboardPreview';
import Testimonial from '../components/Testimonial';
const LandingPage = () => {
    return (
      <div>
        <Navbar />
        <Hero />
        <ProcessFlow />
        <FeatureHighlights />
        <SupervisorDashboardPreview />
        <Testimonial />
      </div>
    );
  };
  
export default LandingPage;