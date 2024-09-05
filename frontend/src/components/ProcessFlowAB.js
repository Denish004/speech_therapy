import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faClipboardList, faChalkboardTeacher, faFileAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const steps = [
  { title: 'Patient Allocation', description: 'Allocate patients to therapists.', icon: faUserMd },
  { title: 'Therapy Plan', description: 'Therapists prepare therapy plans with goals.', icon: faClipboardList },
  { title: 'Supervision & Feedback', description: 'Supervisors evaluate therapy plans and provide feedback.', icon: faChalkboardTeacher },
  { title: 'Progress Reports', description: 'Therapists submit progress reports after sessions.', icon: faFileAlt },
  { title: 'Evaluation & Rating', description: 'Supervisors evaluate therapy and give clinical ratings.', icon: faStar },
];

const ProcessFlow = () => {
  return (
    <StyledWrapper>
      <div className="header">
        <h2>Therapy Process</h2>
      </div>
      <div className="cards">
        {steps.map((step, index) => (
          <div key={index} className={`card ${getCardColor(index)}`}>
            <FontAwesomeIcon icon={step.icon} size="2x" className="icon" />
            {/* <p className="tip">Hover Me</p> */}
            <h3 className="title">{step.title} </h3>
            <p className="description">{step.description}</p>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const getCardColor = (index) => {
  const colors = ['red', 'blue', 'green', 'purple', 'orange'];
  return colors[index % colors.length];
};

const StyledWrapper = styled.div`
  .header {
    text-align: center;
    margin-bottom: 20px;
  }

  .header h2 {
    font-size: 2em;
    font-weight: 700;
    color: #333;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    padding: 15px;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    transition: 400ms;
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  .card .icon {
    margin-bottom: 10px;
  }

  .card .tip {
    font-size: 1em;
    font-weight: 700;
  }

  .card .title {
    font-size: 1.2em;
    font-weight: 700;
    margin: 10px 0;
    color: white;
  }

  .card .description {
    font-size: 0.9em;
    color: white;
  }

  .card.red {
    background-color: #67aaf7;
  }

  .card.blue {
    background-color: #dda36c;
  }

  .card.green {
    background-color: #bc8acf;
  }

  .card.purple {
    background-color: #8e44ad;
  }

  .card.orange {
    background-color: #e67e22;
  }

  .card:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(4px);
    transform: scale(0.9);
  }
`;

export default ProcessFlow;
