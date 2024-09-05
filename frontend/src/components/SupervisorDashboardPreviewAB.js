import React from 'react';
import Card from './Card3AB';
import './SupervisorDashboard.css';

const SupervisorDashboardPreview = () => {
  return (
    <div className="bg-[#f7e6f0] py-12 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-purple-900 mb-8">
        Supervisor Dashboard Preview
      </h2>
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg p-10">
      <div className="text-center">
  <h3 className="text-3xl font-bold text-purple-800">Supervisor Dashboard</h3>
  <p className="text-gray-700 mt-4">
    Manage cases, review therapy plans, and track therapist performance.
  </p>
</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
  <div className="w-full flex justify-center items-center">
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <Card
        title="Pending Cases"
        details="5 cases awaiting your review."
        buttonText="Review"
      />
    </div>
  </div>
  <div className="w-full flex justify-center items-center">
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <Card
        title="Completed Cases"
        details="12 cases reviewed and closed."
        buttonText="Details"
      />
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default SupervisorDashboardPreview;
