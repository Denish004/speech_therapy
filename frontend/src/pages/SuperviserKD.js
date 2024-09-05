import SuperviserCard from "../components/CardsSupKD";
import Navbar from "../components/NavbarAB";
import PCardSup from "../components/PCardSup";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PendingCard from "../components/PendingCardKD";
import axios from "axios"; // Add axios here
import Footer from "../components/FooterAB";

const Superviser = () => {
    const [matchResponses, setMatchResponses] = useState([]);
    const navigate = useNavigate();

    const handleCard = async (patient_id) => {
        console.log(patient_id);
        navigate(`/detailsSup/${patient_id}`);
    };

    useEffect(() => {
        const fetchNames = async () => {
            try {
                // Fetching match data
                const response = await fetch('http://localhost:8080/api/supervisor/getAll');
                const matchResponses = await response.json();
                setMatchResponses(matchResponses);
                console.log(matchResponses);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchNames();
    }, []);

    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", padding: "20px" }}>
                {/* Left side - Supervisor cards */}
                <div style={{ flex: 3, marginRight: "10px",  marginLeft: "150px" }}> {/* Increased flex and reduced margin */}
                    {matchResponses.map((matchResponse) => (
                        <div key={matchResponse._id} style={{ marginBottom: "20px" }}>
                            <SuperviserCard
                                patientId={matchResponse.patientIds[0]}
                                therapistId={matchResponse.therapistId}
                            />
                        </div>
                    ))}
                </div>
    
                {/* Right side - PCardSup and PendingCard */}
                <div style={{ width: "400px", marginLeft: "100px", display: "flex", flexDirection: "column", gap: "20px" }}> {/* Reduced margin */}
                    <PCardSup />
                    <PendingCard />
                </div>
            </div>
            <Footer/>
        </div>
    );
    
};

export default Superviser;
