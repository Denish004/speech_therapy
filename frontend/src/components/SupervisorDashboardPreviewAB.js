import React from 'react';

const SupervisorDashboardPreview = () => {
  return (
    <div className="bg-[rgb(249,248,240)] py-12">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">Supervisor Dashboard Preview</h2>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800">Supervisor Dashboard</h3>
        <p className="text-gray-600 mt-2">
          Manage cases, review therapy plans, and track therapist performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[rgb(240,240,249)] p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-purple-600">Pending Cases</h4>
            <p className="text-gray-700 mt-2">5 cases awaiting your review.</p>
          </div>
          <div className="bg-[rgb(240,240,249)] p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-purple-600">Completed Cases</h4>
            <p className="text-gray-700 mt-2">12 cases reviewed and closed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorDashboardPreview;
