import React from "react";
import styled from "styled-components";

const SessionCardDS = ({ SessionId, SessionDate, SessionTime ,SessionStatus}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="flex justify-around text-3xl">
          <h1>{SessionId}</h1>
          <h1>{SessionDate}</h1>
          <h1>{SessionTime}</h1>
          <h1>{SessionStatus}</h1>
        </div>
        {/* <button className="card-button">More info</button> */}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
 width: 95%;
 height: 100px;
 border-radius: 20px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
 position: relative;
 padding: 1.8rem;
 margin: 10px;
 margin-left:24px;
 border: 2px solid black;
 transition: 0.5s ease-out;
 overflow: visible;
}



.card-button {
 transform: translate(-50%, 125%);
 width: 60%;
 border-radius: 1rem;
 border: none;
 background-color: #008bf8;
 color: #fff;
 font-size: 1rem;
 padding: .5rem 1rem;
 position: absolute;
 left: 50%;
 bottom: 0;
 opacity: 0;
 transition: 0.3s ease-out;
}

.text-body {
 color: rgb(134, 134, 134);
}

/*Text*/
.text-title {
 font-size: 1.5em;
 font-weight: bold;
}

/*Hover*/
.card:hover {

  
  transform: scale(1.05);

  border: 4px solid purple;
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
 transform: translate(-50%, 50%);
 opacity: 1;
}
`;

export default SessionCardDS;
