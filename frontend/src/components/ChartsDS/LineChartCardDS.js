  import React from "react";
  import styled from "styled-components";
  import BasicLineChart from "./LineChartDS";

  const Card = () => {
    return (
      <StyledCard>
        <BasicLineChart />
      </StyledCard>
    );
  };

  const StyledCard = styled.div`
    width: 90%;
    height: 87%;
    background-color: #3498db;
    border: 1px solid #e5e5e5;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    padding: 20px;
    box-sizing: border-box;
    margin-left:40px;
    
    /* Modern styling */
    background: linear-gradient(145deg, #f8f9fa, #e2e6ea);
    border: none;
    
    &:hover {
      box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.2);
      transform: scale(1.05);
    }

    &:active {
      box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
      transform: scale(0.98);
    }

    /* Ensure the content is centered */
    .MuiLineChart-root {
      width: 100%;
      height: 100%;
    }
  `;

  export default Card;
