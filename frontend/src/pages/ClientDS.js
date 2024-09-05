import React from "react";
import SessionsDS from "../components/SessionsDS";
import PatientCard from "../components/PatientCardDS";
import Navbar from "../components/NavbarAB";
import LineChartCardDS from "../components/ChartsDS/LineChartCardDS";
import CalendarStyledDS from "../components/CalendarStyledDS";
import StutterAnalysis from "../components/StutterAnalysis";
import UserExercise from "../components/UserExercise";

const Dashboard = () => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const therapistId = user?._id;
  return (
    <div>
      <Navbar />
      <PatientCard />

      <div className="mt-8 pb-10 bg-orange-50 rounded-t-[60px] border-t-8 border-t-indigo-900">
        <div className="flex justify-evenly">
          <div className="p-5 w-1/2">
            <h1 className="flex justify-center text-3xl mb-5 font-custom">Your Progress</h1>
            <LineChartCardDS />
          </div>
          {user && user.role == "patient" ?( <div className="p-5 w-1/2">
            <h1 className="flex justify-center text-3xl mb-5 font-custom">User Exercise</h1>
            <UserExercise /> 
          </div>):(
            <UserExercise /> 
          )}
        </div>

        <div className="flex justify-evenly mt-8">
          <div className="p-5 w-1/2">
            <h1 className="flex justify-center text-3xl mb-5 font-custom">Your Schedule</h1>
            <CalendarStyledDS />
          </div>
          <div className="p-5 w-1/2">
            <h1 className="flex justify-center text-3xl mb-5 font-custom">Sessions</h1>
            <SessionsDS />
          </div>
        </div>
      </div>

      <StutterAnalysis />
    </div>
  );
};

export default Dashboard;
