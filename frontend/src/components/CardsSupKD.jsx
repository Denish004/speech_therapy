import styled from "styled-components";
import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import axios from 'axios';
import { Link } from "react-router-dom";

// export default SuperviserCard;
const SuperviserCard = (props) => {
  const [patientName, setPatientName] = useState('');
    const [therapistName, setTherapistName] = useState('');
console.log(props)
    useEffect(() => {

        const fetchNames = async () => {
            try {
                // Fetching match data
                // const matchResponse = await axios.get('http://localhost:8080/api/match');
                // const { patient_id, therapist_id } = matchResponse.data;

                // Fetching patient and therapist names
                console.log("jd jdnend");
                // const patientResponse = await fetch(`http://localhost:8081/api/patient/${patientId}`);
                // const therapistResponse = await fetch(`http://localhost:8081/api/therapist/${therapistId}`);

                // setPatientName(patientResponse.name);
                // setTherapistName(therapistResponse.name);
                console.log(patientName);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchNames();
    }, []);
    console.log(props.patientId)
    return (
        /* From Uiverse.io by ElSombrero2 */ 
        <StyledWrapper>
            <div className="card" >
                <div className="content">
                    <div className="back">
                        <div className="back-content" >
                            
                            <div><img src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"/>
                            <strong style={{fontSize:30}}>{patientName}</strong></div>
                            
                            <div><img src="https://cdn-icons-png.flaticon.com/512/2764/2764453.png"/>
                            <strong style={{fontSize:30}}>{therapistName}</strong></div>
                        </div>
                    </div>
                    <div className="front">
                        <div className="img">
                            <div className="circle"></div>
                            <div className="circle" id="right"></div>
                            <div className="circle" id="bottom"></div>
                        </div>
                        <div className="front-content">
                            {/* <small className="badge">Pasta</small> */}
                            <div className="description">
                                <div className="title">
                                    <p className="title">
                                        <strong style={{fontSize:15}}>  The therapist has completed the session and is seeking your review. Please provide feedback to help improve the quality of care and patient progress.
</strong>
                                    </p>
                                    <svg fillRule="nonzero" height="15px" width="15px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                        <g style={{ mixBlendMode: "normal" }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset="0" strokeDasharray="" strokeMiterlimit="10" strokeLinejoin="miter" strokeLinecap="butt" strokeWidth="1" stroke="none" fillRule="nonzero" fill="#20c997">
                                            <g transform="scale(8,8)">
                                                <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                                <p className="card-footer">
                                    {/* 30 Mins &nbsp; | &nbsp;  August 26, 2024 */}
                                    <Link navigate to={`/detailsSup/${props.patientId}`}>
                                    <button className="see-more-button">See More</button>
                                    </Link>
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default SuperviserCard;

const StyledWrapper = styled.div`
  /* From Uiverse.io by ElSombrero2 */ 
.card {
  overflow: visible;
  margin:30px;
  width: 950px;
  height: 254px;
}

.content {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  box-shadow: 0px 0px 10px 1px #000000ee;
  border-radius: 5px;
}

.front, .back {
  background-color: rgb(195 190 228);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
}

.back {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.back::before {
  position: absolute;
  content: ' ';
  display: block;
  width: 260px;
  height: 260%;
  
  background: linear-gradient(90deg, transparent, #073307, #073307, #073307, #073307, transparent);

  animation: rotation_481 5000ms infinite linear;
}

.back-content {
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: rgb(195 190 228);
  border-radius: 5px;
  color: #073307;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 140px;
}
  .back-content > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.back-content img {
  height: 150px;
  width: 150px;
}
.card:hover .content {
  transform: rotateY(180deg);
}

@keyframes rotation_481 {
  0% {
    transform: rotateZ(0deg);
  }

  0% {
    transform: rotateZ(360deg);
  }
}

.front {
  transform: rotateY(180deg);
  color: white;
}

.front .front-content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.front-content .badge {
  background-color: #00000055;
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
}

.description {
  box-shadow: 0px 0px 10px 5px #00000088;
  width: 100%;
  padding: 10px;
  background-color: #00000099;
  backdrop-filter: blur(5px);
  border-radius: 5px;
}

.title {
  font-size: 11px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
}

.title p {
  width: 70%;
}

.card-footer {
  color: #ffffff88;
  margin-top: 5px;
  font-size: 15px;
}

.front .img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #ffbb66;
  position: relative;
  filter: blur(15px);
  animation: floating 2600ms infinite linear;
}

#bottom {
  background-color: #ff8866;
  left: 50px;
  top: 0px;
  width: 150px;
  height: 150px;
  animation-delay: -800ms;
}

#right {
  background-color: #ff2233;
  left: 160px;
  top: -80px;
  width: 30px;
  height: 30px;
  animation-delay: -1800ms;
}

.see-more-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #6a5acd;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .see-more-button:hover {
    background-color: #483d8b;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
}
`;

