import React from 'react'
import Navbar from '../components/NavbarAB';
import Hero from '../components/HeroAB';
import ProcessFlow from '../components/ProcessFlowAB';
import FeatureHighlights from '../components/FeatureHighlightsAB';
import SupervisorDashboardPreview from '../components/SupervisorDashboardPreviewAB';
import Testimonial from '../components/TestimonialAB';
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