import React from 'react';
import styled from 'styled-components';

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
            <StyledCard key={index}>
              <Icon className="text-4xl mb-4">{feature.icon}</Icon>
              <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </StyledCard>
          ))}
        </div>
      </div>
    </div>
  );
};

const StyledCard = styled.div`
  padding: 1.5rem;
  background-color: rgb(249, 248, 240);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  text-align: center;
  transition: transform 0.3s;
`;

const Icon = styled.div`
  transition: transform 0.3s;
  display: inline-block;

  ${StyledCard}:hover & {
    transform: translateY(-5px);
  }
`;

export default FeatureHighlights;
