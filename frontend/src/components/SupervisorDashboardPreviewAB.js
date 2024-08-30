import React from 'react';
import Card from './Card3AB';

const SupervisorDashboardPreview = () => {
  return (
    <div className="bg-[rgb(249,248,240)] py-12">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">Supervisor Dashboard Preview</h2>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800">Supervisor Dashboard</h3>
        <p className="text-gray-600 mt-2">
          Manage cases, review therapy plans, and track therapist performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card
            title="Pending Cases"
            details="5 cases awaiting your review."
            buttonText="Review"
          />
          <div style={{marginLeft:'103px'}}>

          <Card
            title="Completed Cases"
            details="12 cases reviewed and closed."
            buttonText="Details"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorDashboardPreview;
