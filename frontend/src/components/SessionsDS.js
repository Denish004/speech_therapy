import React from 'react';
import SessionCardDS from './SessionCardDS.js'
import  { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
const SessionsDS= () => {
    // Dummy data for static UI
    const [Sessions, setSessions] = useState([]);

    const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const patientId = user?._id;
    useEffect(() => {
        const fetchdata = async () => {
            try {
                // Fetching match data
                const response= await fetch(`http://localhost:8080/api/Allsessions/${patientId}`);
                // const { patient_id, therapist_id } = matchResponse.data;

                // Fetching patient and therapist names
                const data = response.json();
                
              

                setSessions(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchdata();
    }, [patientId]);
    // const Sessions = [
    //     { id: 1, date: '2024-08-24', time: '10:00 AM', status: 'Scheduled' },
    //     { id: 2, date: '2024-08-26', time: '02:00 PM', status: 'Scheduled' },
    //     { id: 3, date: '2024-08-20', time: '11:00 AM', status: 'Completed' },
    // ];


    // const upcomingAppointments = appointments.filter(app => new Date(app.date) >= new Date());

    return (
        <div className='ml-3'>
        {
            Sessions && Sessions.map((session)=>{
                return (
                    <SessionCardDS 
                    SessionId = {session.id}
                    SessionDate = {session.date}
                    SessionTime = {session.time}
                    SessionStatus = {session.status}/>
                );
            })
        }
        </div>
     
    );
};

export default SessionsDS;
