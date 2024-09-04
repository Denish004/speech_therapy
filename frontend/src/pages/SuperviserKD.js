import SuperviserCard from "../components/CardsSupKD"
import Navbar from "../components/NavbarAB"
import PCardSup from "../components/PCardSup"
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PendingCard from "../components/PendingCardKD"
import Card from "../components/ProfileSW"

const Superviser=()=>{
      const [matchResponses, setMatchResponses] = useState([]);
    const navigate=useNavigate()

      const handleCard=async(patient_id)=>{
  
        navigate(`/detailsSup/${patient_id}`)
      };

    useEffect(() => {
        const fetchNames = async () => {
            try {
                // Fetching match data
                const response = await fetch('http://localhost:8081/api/supervisor/getAll');
                const matchResponses = await response.json();

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
            <div style={{marginLeft:15}}><SuperviserCard/>
       <SuperviserCard/>
       <SuperviserCard/></div>
       <div style={{width:400,margin:30}}><PCardSup/>
       <PendingCard/></div>
       
       </div>
       </div>
    )
} 
export default Superviser