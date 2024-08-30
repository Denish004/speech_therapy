import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TherapistSW from "./pages/TherapistSW";
import Home from "./pages/LandingPageAB";
// import PatientCardDS from './components/PatientCardDS.js';
<<<<<<< HEAD
import DashboardDS from './components/DashboardDS.js';
import GaugeChartDS from './components/ChartsDS/GaugeChartDS.js';
import LineChartDS from './components/ChartsDS/LineChartDS.js';
import TherapistForm from './pages/TherapistForm.jsx'
import SuperviserKD from './pages/SuperviserKD.js'
import DetailsSupKD from './pages/DetailsSupKD.jsx';
=======
// import DashboardDS from './components/DashboardDS.js';
// import GaugeChartDS from './components/ChartsDS/GaugeChartDS.js';
// import LineChartDS from './components/ChartsDS/LineChartDS.js';
// import TherapistForm from './pages/TherapistFormSW.jsx'
// import SuperviserKD from './pages/SuperviserKD.js'
import Questionnaire from './pages/QuestionnaireSW.jsx'
import ClientDS from "./pages/ClientDS.js";
import GaugeChartDS from "./components/ChartsDS/GaugeChartDS.js";
import LineChartDS from "./components/ChartsDS/LineChartDS.js";
import TherapistForm from "./pages/TherapistFormSW.jsx";
import SuperviserKD from "./pages/SuperviserKD.js";
>>>>>>> 17c27cc80b6188a005ef9584faf1c0b4c3e89a8d
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
<<<<<<< HEAD
          <Route path="/detailsSup" element={<DetailsSupKD/>}/>
=======
          <Route path="/question"  element={<Questionnaire/>}/>
      

>>>>>>> 17c27cc80b6188a005ef9584faf1c0b4c3e89a8d
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
