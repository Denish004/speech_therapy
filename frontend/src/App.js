import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TherapistSW from './pages/TherapistSW';
import Home from './pages/LandingPageAB'
// import PatientCardDS from './components/PatientCardDS.js';
import DashboardDS from './components/DashboardDS.js';
import GaugeChartDS from './components/ChartsDS/GaugeChartDS.js';
import LineChartDS from './components/ChartsDS/LineChartDS.js';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/therapist" element={<TherapistSW />} />{/* Route for TherapistSW component */}
          <Route path="/patient" element={<DashboardDS/>}/>
     
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App