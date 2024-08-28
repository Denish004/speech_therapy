import React from "react";
import styled from "styled-components";

const CardAB = ({ title, description, color }) => {
  return (
    <StyledWrapper>
      <div className="cards-container">
        <div className={`card ${color}`}>
          <p className="tip">{title}</p>
          <p className="second-text">{description}</p>
        </div>
        {/* Add more cards here if needed */}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cards-container {
    display: flex;
    gap: 20px; /* Adjust as needed */
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 200px; /* Adjust as needed */
    width: 200px; /* Adjust as needed */
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: 400ms;
    position: relative; /* Ensure position is relative for sibling effects */
  }

  .card.red {
    background-color: #f76b8a;
  }

  .card.blue {
    background-color: #67aaf7;
  }

  .card.green {
    background-color: #bc8acf;
  }

  .card.orange {
    background-color: #dda36c;
  }

  .card.purple {
    background-color: #6a67d3;
  }

  .card:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .cards-container .card:hover ~ .card {
    filter: blur(4px);
    transform: scale(1); /* Prevent scaling effect on non-hovered cards */
  }

  .card p.tip {
    font-size: 1em;
    font-weight: 700;
  }

  .card p.second-text {
    font-size: 0.7em;
  }
`;

export default CardAB;
