import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <div className="mx-auto">
      <StyledWrapper>
        <div className="e-card playing" style={{width:'300px'}}>
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />

          <div className="image">
            <img 
              src="https://img.freepik.com/free-photo/portrait-happy-smiling-businessman_1150-14350.jpg" 
              alt="Profile" 
            />
          </div>

          <div className="infotop">
            <br />
            UI / EX Designer
            <br />
            <span>Lorem, ipsum dolor. Dolorum, consectetur tempora!</span>
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .e-card {
    margin: 100px auto;
    background: transparent;
    box-shadow: 0px 8px 28px -9px rgba(0,0,0,0.45);
    position: relative;
    width: 240px;
    height: 330px;
    border-radius: 16px;
    overflow: hidden;
  }

  .image {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px; /* Adjust size as needed */
    height: 120px; /* Adjust size as needed */
    border-radius: 50%;
    overflow: hidden;
    background: white; /* Optional: to cover any overflow */
    z-index: 3; /* Ensure image is above waves */
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .wave {
    position: absolute;
    width: 540px;
    height: 700px;
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -50%;
    margin-top: -70%;
    background: linear-gradient(744deg, #d8aaff, #b99cff 60%, #a3c2f2); /* Light purple gradient */
    z-index: 1; /* Ensure waves are below the image and text */
  }

  .icon {
    width: 3em;
    margin-top: -1em;
    padding-bottom: 1em;
  }

  .infotop {
    text-align: center;
    font-size: 20px;
    position: absolute;
    top: 150px; /* Adjusted to fit image size */
    left: 0;
    right: 0;
    color: rgb(255, 255, 255);
    font-weight: 600;
    z-index: 2; /* Ensure info is above waves but below image */
  }

  .name {
    font-size: 14px;
    font-weight: 100;
    position: relative;
    top: 1em;
    text-transform: lowercase;
  }

  .wave:nth-child(2),
  .wave:nth-child(3) {
    top: 210px;
  }

  .playing .wave {
    border-radius: 40%;
    animation: wave 3000ms infinite linear;
  }

  .wave {
    border-radius: 40%;
    animation: wave 55s infinite linear;
  }

  .playing .wave:nth-child(2) {
    animation-duration: 4000ms;
  }

  .wave:nth-child(2) {
    animation-duration: 50s;
  }

  .playing .wave:nth-child(3) {
    animation-duration: 5000ms;
  }

  .wave:nth-child(3) {
    animation-duration: 45s;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Card;
