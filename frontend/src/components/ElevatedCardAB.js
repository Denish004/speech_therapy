import React from 'react';
import styled from 'styled-components';

const ElevatedCard = ({ icon, title, description }) => {
  return (
    <StyledCard>
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background: #f9f8f0;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  .card-icon {
    font-size: 48px;
    margin-bottom: 16px;
    transition: transform 0.3s ease;
  }

  .card-title {
    font-size: 20px;
    font-weight: bold;
    color: #323232;
  }

  .card-description {
    font-size: 16px;
    color: #666;
    margin-top: 8px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);

    .card-icon {
      transform: translateY(-5px);
    }
  }
`;

export default ElevatedCard;
