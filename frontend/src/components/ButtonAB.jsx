import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
          <a href="/login" >
      <div className="scene">
        <div className="cube">
          <span className="side top">Sign Up</span>
          <span className="side front">Login</span>
        </div>
      </div>
          </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .scene {
 width: 10em;
 justify-content: center;
 align-items: center;
}

.cube {
 color: #ccc;
 cursor: pointer;
 font-family: 'Roboto', sans-serif;
 transition: all 0.85s cubic-bezier(.17,.67,.14,.93);
 transform-style: preserve-3d;
 transform-origin: 100% 50%;
 width: 10em;
 height: 4em;
}

.cube:hover {
 transform: rotateX(-90deg);
}

.side {
 box-sizing: border-box;
 position: absolute;
 display: inline-block;
 height: 4em;
 width: 10em;
 text-align: center;
 text-transform: uppercase;
 padding-top: 1.5em;
 font-weight: bold;
}

.top {
 background: #9d27b0;
 color: white;
 transform: rotateX(90deg) translate3d(0, 0, 2em);
 box-shadow: inset 0 0 0 5px #f5d0fe;
}

.front {
 background: #222229;
 color: #fff;
 box-shadow: inset 0 0 0 5px #f5d0fe;
 transform: translate3d(0, 0, 2em);
}
`;

export default Button;
