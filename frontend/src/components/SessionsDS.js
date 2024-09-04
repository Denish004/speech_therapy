import React, { useEffect, useState } from 'react';
import SessionCardDS from './SessionCardDS.js';

const SessionsDS = () => {
  // Initialize sessions as an empty array
  const [sessions, setSessions] = useState([]);

  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const patientId = user?._id;

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/Allsessions/${patientId}`);
        
        // Ensure response is JSON
        const data = await response.json();
        
        // Check if the data is an array, otherwise initialize as empty array
        const sessionsArray = Array.isArray(data) ? data : [];

        setSessions(sessionsArray);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state if needed
      }
    };

    fetchdata();
  }, [patientId]);

  return (
    <div className="ml-3">
      {sessions.length ? (
        sessions.map((session) => (
          <SessionCardDS
            key={session._id}
            sessionId={session._id}
            therapyStartDate={session.therapyStartDate}
            numberOfWeeks={session.numberOfWeeks}
            therapyTitles={session.therapyTitles}
          />
        ))
      ) : (
        <p>No sessions available.</p>
      )}
    </div>
  );
};

export default SessionsDS;
