import React from "react";
import styled from "styled-components";
import BasicLineChart from "./LineChartDS";

const Card = () => {
  return (
    <StyledWrapper >
      <div className="card opacity-100 bg-white">
        <BasicLineChart/>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
  box-sizing: border-box;
  width: 85%;
  height: 100%;
  opacity: 100%;
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(161, 62, 184, 0.22);
 
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: purple;
}

.card:hover {
  border: 1px solid purple;
  transform: scale(1.05);
}

.card:active {
  transform: scale(0.95) rotateZ(1.7deg);
}
`;

export default Card;
