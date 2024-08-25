import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TherapistSW from './pages/TherapistSW';
import Home from './pages/LandingPageAB'
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/therapist" element={<TherapistSW />} /> {/* Route for TherapistSW component */}
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App