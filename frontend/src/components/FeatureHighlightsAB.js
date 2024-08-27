import React from 'react';

const features = [
  { title: 'Case Allocation', description: 'Seamlessly allocate patients to available therapists.', icon: '🗂️' },
  { title: 'Therapy Documentation', description: 'Record detailed therapy plans and session notes.', icon: '📝' },
  { title: 'Supervision Feedback', description: 'Supervisors provide feedback and approve plans.', icon: '👨‍🏫' },
  { title: 'Progress Reports', description: 'Track progress with post-session reports.', icon: '📊' },
  { title: 'Clinical Ratings', description: 'Supervisors give ratings based on overall performance.', icon: '⭐' },
  { title: 'Patient Feedback', description: 'Collect feedback directly from patients after each session.', icon: '💬' },
];

const FeatureHighlights = () => {
  return (
    <div className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">Key Features</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-[rgb(249,248,240)] shadow-lg rounded-lg text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;
