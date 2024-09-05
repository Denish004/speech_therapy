

// import styled from "styled-components";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom"; 

// const ReviewSup = () => {
//     const { id: patientId } = useParams(); // Get patient_id from URL params
//     const [patientDetails, setPatientDetails] = useState({});
//     console.log(patientDetails);

//      const dummyData = {
//         "66d7f4e9a677a6462e8d479a": {
//             therapistName: "Reena",
//             patientName: "Rahul",
//             therapyTitles: [
//                 { week: 1, title: "Introduction to Therapy" },
//                 { week: 2, title: "Mindfulness Exercises" },
//                 { week: 3, title: "Cognitive Behavioral Therapy" }
//             ]
//         },
//         "66d8a3a05f2e0e28cad0517d": {
//             therapistName: "Anjali",
//             patientName: "Suresh",
//             therapyTitles: [
//                 { week: 1, title: "Relaxation Techniques" },
//                 { week: 2, title: "Self-awareness Exercises" }
//             ]
//         }
//     };
  
//     useEffect(() => {
//         const fetchPatientDetails = async () => {
//             try {
//                 const response = await fetch(`http://localhost:8081/api/Allsessions/${patientId}`);
//                 const details = await response.json(); 
//                 setPatientDetails(details);
//                 console.log(patientDetails.therapyTitles)
//             } catch (error) {
//                 console.error('Error fetching patient details:', error);
//             }
//         };
//         fetchPatientDetails();
//       }, [patientId]);

//     return (
//         <StyledWrapper>
//             <div style={{ margin: 40 }}>
//                 <div className="card">
//                     <div className="bg" style={{ display: "flex" }}>
//                         <div style={{ alignContent: "center", marginLeft: 90, marginTop: 30 }}>
//                             <div>
//                                 <img src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png" style={{ width: 150, height: 150 }} />
//                                 <strong style={{ fontSize: 30, marginLeft: 20 }}>Rahul</strong>
//                             </div>
//                             <div>
//                                 <img src="https://cdn-icons-png.flaticon.com/512/2764/2764453.png" style={{ width: 150, height: 150 }} />
//                                 <strong style={{ fontSize: 30 }}>Reena</strong>
//                             </div>
//                         </div>
//                         {patientDetails.therapyTitles && patientDetails.therapyTitles.map((title, index) => (
//                             <div key={index} style={{ marginLeft: 120, margin: 50 }}>
//                                 <h1 style={{ fontFamily: "sans-serif", fontSize: 30, fontWeight: "bold" }}>Session {title.week}</h1>
//                                 <hr style={{ height: 28 }} />
//                                 <div style={{ display: "flex", alignItems: "center" }}>
//                                     <label className="container">
//                                         <input type="checkbox" checked="checked" readOnly />
//                                         <div className="checkmark"></div>
//                                     </label>
//                                     <h1 style={{ margin: "0 0 0 10px", fontSize: "20px" }}>{title.title}</h1>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="blob"></div>
//                 </div>
//             </div>
//         </StyledWrapper>
//     );
// };
import styled from "styled-components";
import React, { useState } from "react";
import { useParams } from "react-router-dom"; 

const ReviewSup = () => {
    const { id: patientId } = useParams(); // Get patient_id from URL params

    // Dummy data for 2-3 patients
    const dummyData = {
        "66d7f4e9a677a6462e8d479a": {
            therapistName: "Reena",
            patientName: "Rahul",
            therapyTitles: [
                { week: 1, title: "Introduction to Therapy" },
                { week: 2, title: "Mindfulness Exercises" },
                { week: 3, title: "Cognitive Behavioral Therapy" }
            ]
        },
        "66d2e949ac715c9dc885c054": {
            therapistName: "Anjali",
            patientName: "Suresh",
            therapyTitles: [
                { week: 1, title: "Relaxation Techniques" },
                { week: 2, title: "Self-awareness Exercises" },
                { week: 3, title: "Introduction to Therapy" },
                { week: 4, title: "Mindfulness Exercises" }
          
            ]
        }
    };

    // Simulate fetching from the backend by using the dummy data based on patientId
    const patientDetails = dummyData[patientId] || {};

    return (
        <StyledWrapper>
            <div style={{ margin: 40 }}>
                <div className="card">
                    <div className="bg" style={{ display: "flex" }}>
                        <div style={{ alignContent: "center", marginLeft: 90, marginTop: 30, alignItems:"center",justifyContent:"center" }}>
                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png" style={{ width: 150, height: 150 }} />
                                <strong style={{ fontSize: 30, marginLeft: 30, textAlign:"center" }}>{patientDetails.patientName || "Unknown Patient"}</strong>
                            </div>
                            <div style={{alignContent:"center"}}>
                                <img src="https://cdn-icons-png.flaticon.com/512/2764/2764453.png" style={{ width: 150, height: 150 }} />
                                <strong style={{ fontSize: 30, marginLeft:30, textAlign:"center" }}>{patientDetails.therapistName || "Unknown Therapist"}</strong>
                            </div>
                        </div>
                        {patientDetails.therapyTitles && patientDetails.therapyTitles.map((title, index) => (
                            <div key={index} style={{ marginLeft: 120, margin: 50 }}>
                                <h1 style={{ fontFamily: "sans-serif", fontSize: 30, fontWeight: "bold" }}>Session {title.week}</h1>
                                <hr style={{ height: 28 }} />
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <label className="container" style={{width:45}}>
                                        <input type="checkbox" checked="checked" readOnly />
                                        <div className="checkmark"></div>
                                    </label>
                                    <h1 style={{ margin: "0 0 0 5px", fontSize: "20px" }}>{title.title}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="blob"></div>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default ReviewSup;
const StyledWrapper = styled.div`
/* Existing styles for the card and background */
.card {
  position: relative;
  width: 1370px;
  height: 460px;
  border-radius: 14px;
  z-index: 11;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}

.bg {
  top: 5px;
  left: 5px;
  width: 1350px;
  height: 440px;
  z-index: 2;
  background: rgb(195 190 228);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  outline: 2px solid white;
}

.blob {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 1310px;
  height: 350px;
  border-radius: 50%;
  background-color: #524798;
  opacity: 1;
  filter: blur(12px);
  animation: blob-bounce 5s infinite ease;
}

@keyframes blob-bounce {
  0% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
  25% {
    transform: translate(-100%, -100%) translate3d(100%, 0, 0);
  }
  50% {
    transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
  }
  75% {
    transform: translate(-100%, -100%) translate3d(0, 100%, 0);
  }
  100% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
}

/* Custom checkbox styles */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container {
  position: relative;
  cursor: pointer;
  font-size: 25px;
  user-select: none;
}

.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  background: black;
  border-radius: 50px;
  transition: all 0.7s;
  --spread: 6px;
}

.container input:checked ~ .checkmark {
  background: rgb(0, 0, 0);
  box-shadow: -2px -2px var(--spread) 0px #5b51d8,
    0 -2px var(--spread) 0px #833ab4, 2px -2px var(--spread) 0px #e1306c,
    2px 0 var(--spread) 0px #fd1d1d, 2px 2px var(--spread) 0px #f77737,
    0 2px var(--spread) 0px #fcaf45, -2px 2px var(--spread) 0px #ffdc80;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.checkmark:after {
  left: 0.45em;
  top: 0.25em;
  width: 0.25em;
  height: 0.5em;
  border: solid #f0f0f0;
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(40deg);
}
`;