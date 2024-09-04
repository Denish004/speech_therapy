import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import TherapistSW from "./pages/TherapistSW";
import Home from "./pages/LandingPageAB";
import Questionnaire from './pages/QuestionnaireSW.jsx';
import DetailsSupKD from './pages/DetailsSupKD.jsx';
import ClientDS from "./pages/ClientDS.js";
import TherapistForm from "./pages/TherapistFormSW.jsx";
import SuperviserKD from "./pages/SuperviserKD.js";
import Matching from './components/MatchingSW.jsx';
import TheraReview from "./pages/theraReviewKD.js";
import Contact from "./pages/ContactUsKD.js";
import Signup_new from "./components/Signup_new.jsx";
import SignUpSW from "./components/RegisterSW.jsx";
import Login_new from "./components/Login_new.jsx";
import { useAuthContext } from "./hooks/useAuthContext.js";

const App = () => {
  const { user } = useAuthContext();
  const role = user?.role;

  return (
    <Router>
      <div>
        <Routes>
          {/* Default route redirection based on role */}
          <Route 
            path="/" 
            element={
              role === 'therapist' ? <Navigate to="/therapist" /> 
              : role === 'patient' ? <Navigate to="/patient" /> 
              : role === 'supervisor' ? <Navigate to="/supervisor"/>
              : <Home />
            } 
          />
          <Route path="/home" element={<Home/>}/>
          {/* Therapist-specific routes */}
          <Route path="/therapist" element={<TherapistSW />} />
          <Route path="/therapistform" element={<TherapistForm />} />

          {/* Patient-specific route */}
          <Route path="/patient" element={<ClientDS />} />

          

          {/* Other routes */}
          <Route path="/signup" element={!user ? <Signup_new /> : <Navigate to="/" />} />
          <Route path="/login" element={!user ? <Login_new /> : <Navigate to="/" />} />
          <Route path="/question" element={<Questionnaire />} />
          <Route path="/theraReview" element={<TheraReview />} />
          <Route path="/supervisor" element={<SuperviserKD />} />
          <Route path="/detailsSup" element={<DetailsSupKD />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/match" element={<Matching />} />
          <Route path="/register" element={<SignUpSW/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
