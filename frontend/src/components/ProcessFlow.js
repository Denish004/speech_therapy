import React from 'react';

const steps = [
  { title: 'Patient Allocation', description: 'Allocate patients to therapists.' },
  { title: 'Therapy Plan', description: 'Therapists prepare therapy plans with goals.' },
  { title: 'Supervision & Feedback', description: 'Supervisors evaluate therapy plans and provide feedback.' },
  { title: 'Progress Reports', description: 'Therapists submit progress reports after sessions.' },
  { title: 'Evaluation & Rating', description: 'Supervisors evaluate therapy and give clinical ratings.' },
];

const ProcessFlow = () => {
  return (
    <div className="bg-[rgb(249,248,240)] py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Therapy Process</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600">{step.title}</h3>
              <p className="text-gray-700 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
