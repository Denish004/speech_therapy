import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TherapistSW from "./pages/TherapistSW";

import Home from "./pages/LandingPageAB";
// import PatientCardDS from './components/PatientCardDS.js';
// import DashboardDS from './components/DashboardDS.js';
// import GaugeChartDS from './components/ChartsDS/GaugeChartDS.js';
// import LineChartDS from './components/ChartsDS/LineChartDS.js';
// import TherapistForm from './pages/TherapistFormSW.jsx'
// import SuperviserKD from './pages/SuperviserKD.js'

import Questionnaire from './pages/QuestionnaireSW.jsx'
import DetailsSupKD from './pages/DetailsSupKD.jsx';
import ClientDS from "./pages/ClientDS.js";
import GaugeChartDS from "./components/ChartsDS/GaugeChartDS.js";
import LineChartDS from "./components/ChartsDS/LineChartDS.js";
import TherapistForm from "./pages/TherapistFormSW.jsx";
import SuperviserKD from "./pages/SuperviserKD.js";
import ReviewSup from "./components/ReviewSupKD.jsx";
import DetailsSupKD from "./pages/DetailsSupKD.jsx";
import TheraReview from "./pages/theraReviewKD.js";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/therapist" element={<TherapistSW />} />
          {/* //  Route for TherapistSW component */}
          <Route path="/patient" element={<ClientDS/>}/>
          <Route path="/therapistform" element={<TherapistForm />} />
          {/* <TherapistForm/> */}
          <Route path="/supervisor" element={<SuperviserKD/>}/>
          <Route path="/detailsSup" element={<DetailsSupKD/>}/>
          <Route path="/question"  element={<Questionnaire/>}/>
          <Route path="theraReview" element={<TheraReview/>}/>

          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
