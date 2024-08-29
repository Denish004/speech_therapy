import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TherapistSW from "./pages/TherapistSW";
import Home from "./pages/LandingPageAB";
// import PatientCardDS from './components/PatientCardDS.js';
<<<<<<< HEAD
import DashboardDS from './components/DashboardDS.js';
import GaugeChartDS from './components/ChartsDS/GaugeChartDS.js';
import LineChartDS from './components/ChartsDS/LineChartDS.js';
import TherapistForm from './pages/TherapistFormSW.jsx'
import SuperviserKD from './pages/SuperviserKD.js'
import Questionnaire from './pages/QuestionnaireSW.jsx'
=======
import ClientDS from "./pages/ClientDS.js";
import GaugeChartDS from "./components/ChartsDS/GaugeChartDS.js";
import LineChartDS from "./components/ChartsDS/LineChartDS.js";
import TherapistForm from "./pages/TherapistForm.jsx";
import SuperviserKD from "./pages/SuperviserKD.js";
>>>>>>> 4e5cf02843a511f6522e92c90bfac074f0df1db5
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
<<<<<<< HEAD
          <Route path="/supervisor" element={<SuperviserKD/>}/>
          <Route path="/question"  element={<Questionnaire/>}/>
=======
          <Route path="/supervisor" element={<SuperviserKD />} />

>>>>>>> 4e5cf02843a511f6522e92c90bfac074f0df1db5
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
