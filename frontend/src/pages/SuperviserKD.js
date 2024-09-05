
import SuperviserCard from "../components/CardsSupKD"
import Navbar from "../components/NavbarAB"
import PCardSup from "../components/PCardSup"
import React, { useState, useEffect } from "react";
import axios from "axios"; // Add axios here
import { useNavigate } from "react-router-dom";
import PendingCard from "../components/PendingCardKD"
import Card from "../components/ProfileSW"



const Superviser=()=>{
      const [matchResponses, setMatchResponses] = useState([]);
    const navigate=useNavigate()

      const handleCard=async(patient_id)=>{
        console.log(patient_id)
        navigate(`/detailsSup/${patient_id}`)
      };

    useEffect(() => {
        const fetchNames = async () => {
            try {
                // Fetching match data
                const response = await fetch('http://localhost:8080/api/supervisor/getAll');
                const matchResponses = await response.json();
                setMatchResponses(matchResponses)
                console.log(matchResponses);
                // const { patient_id, therapist_id } = matchResponse.data;

                // Fetching patient and therapist names
                // const patientResponse = await axios.get(`/api/patient/${patient_id}`);
                // const therapistResponse = await axios.get(`/api/therapist/${therapist_id}`);

                // setPatientName(patientResponse.data.name);
                // setTherapistName(therapistResponse.data.name);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchNames();
    }, []);
    return(
        <div>
            <Navbar/>
        <div style={{display:"flex"}}>
             <div style={{marginLeft:15}}>
                {matchResponses.map((matchResponse) => (
                     <div >
                        
                        <SuperviserCard
                         key={matchResponse._id}
                            patientId={matchResponse.patientIds[0]}
                            therapistId={matchResponse.therapistId}
                        />
                       </div>
                    ))}
             </div>
       {/* <SuperviserCard/>
       <SuperviserCard/></div> */}
       <div style={{width:400,margin:30}}><PCardSup/>
       <PendingCard/></div>
       
       </div>
       </div>
    )
} 
export default Superviser