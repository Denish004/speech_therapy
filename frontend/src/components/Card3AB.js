import React from "react";
import styled from "styled-components";

const Card = ({ title, details, buttonText }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-details">
          <p className="text-title">{title}</p>
          <p className="text-body">{details}</p>
        </div>
        <button className="card-button">{buttonText}</button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%; /* Adjusts to fill the available width */
    max-width: 300px; /* Limits the maximum width */
    height: auto; /* Allows height to adjust based on content */
    border-radius: 20px;
    background: #f4e3e6; /* Light gold shade */
    position: relative;
    padding: 1.8rem;
    border: 2px solid #6a1b9a; /* Dark purple border */
    transition: 0.5s ease-out;
    overflow: visible;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25); /* Added shadow for better visibility */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensures button stays at the bottom */
  }

  .card-details {
    color: #4a148c; /* Dark purple text */
    gap: 0.5em;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .card-button {
    width: 100%; /* Button fills the width of the card */
    border-radius: 1rem;
    border: none;
    background-color: #ff9800; /* Orange color */
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    position: absolute;
    bottom: 1rem;
    left: 0;
    opacity: 0;
    transition: 0.3s ease-out;
  }

  .text-body {
    color: rgb(134, 134, 134);
    font-size: 1rem;
  }

  .text-title {
    font-size: 1.5em;
    font-weight: bold;
    color: #6a1b9a; /* Dark purple for title */
  }

  .card:hover {
    border-color: #ff9800; /* Orange color */
  }

  .card:hover .card-button {
    opacity: 1;
  }
`;

export default Card;
