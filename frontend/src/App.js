import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TherapistSW from "./pages/TherapistSW";

import Home from "./pages/LandingPageAB";
import Questionnaire from './pages/QuestionnaireSW.jsx'
import DetailsSupKD from './pages/DetailsSupKD.jsx';
import ClientDS from "./pages/ClientDS.js";
import GaugeChartDS from "./components/ChartsDS/GaugeChartDS.js";
import LineChartDS from "./components/ChartsDS/LineChartDS.js";
import TherapistForm from "./pages/TherapistFormSW.jsx";
import SuperviserKD from "./pages/SuperviserKD.js";
import Matching from './components/MatchingSW.jsx'
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
        
          <Route path="/patient" element={<ClientDS/>}/>
          <Route path="/therapistform" element={<TherapistForm />} />
          
          <Route path="/supervisor" element={<SuperviserKD/>}/>
          <Route path="/detailsSup" element={<DetailsSupKD/>}/>
          <Route path="/question"  element={<Questionnaire/>}/>
          <Route path="/match"  element={<Matching/>}/>
          <Route path="theraReview" element={<TheraReview/>}/>

        </Routes>
      </div>
    </Router>
  );
};

export default App;
