import React, { useState, useEffect } from 'react';
import Calendar from '../components/CalendarSW.jsx';
import Profile from '../components/ProfileSW.jsx';
import Card from '../components/PCardSW.jsx'
import Loader from '../components/LoaderSW.jsx';
import Navbar from '../components/NavbarAB.jsx'
import NotificationsSW from '../components/NotificationsSW.jsx';
import {useAuthContext} from '../hooks/useAuthContext.js'

// Mock data (replace this with actual data fetching logic)

const mockData = [
  {
    name: 'John Doe',
    description: 'Experienced therapist with a focus on speech disorders.',
    imageUrl: 'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611725.jpg'
  },
  {
    name: 'Jane Smith',
    description: 'Specialist in cognitive behavioral therapy and language development.',
    imageUrl: 'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611725.jpg'
  },
  // Add more items as needed
];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState([]);
  // const user =useAuthContext();
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const therapistId = user?._id;
   // Replace with the actual therapist ID
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        // therapist/:therapistId/patients
        const response = await fetch(`http://localhost:8080/api/therapist/${therapistId}/patients`);
        const data = await response.json();
        setPatients(data);
        console.log(data);
        
      } catch (error) {
        console.error('Error fetching patients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, [therapistId]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {!loading && <Navbar />}
      <div className='flex flex-col lg:flex-row w-full h-full min-h-screen bg-[rgb(249,248,240)]'>
        {loading ? (
          <Loader /> 
        ) : (
          <>
            <div className='lg:w-3/4 w-full flex flex-col bg-[rgb(249,248,240)] p-4 space-y-4'>
            {patients.map(patient => (
              <Card
                key={patient._id}
                id={patient.patientId}
                name={patient.name}
                description={`Speech Disorder: ${patient.speech_disorder}, Severity: ${patient.severity}`}
                imageUrl='https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611725.jpg'
              />
            ))}
            </div>
            <div className='lg:w-1/4 w-full flex flex-col items-center lg:items-start p-4'>
              <div className='flex flex-col justify-between w-full space-y-6'>
                <div className='mt-5 lg:mt-6 ml-0 lg:ml-10'>
                  <Profile />
                </div>
                <div className='mt-10 lg:mt-12 ml-0 lg:ml-12 w-full' style={{marginTop:'58px'}}>
                  <div className='mb-5'>
                    <NotificationsSW />
                  </div>
                  <div className='mb-5'>
                    <NotificationsSW />
                  </div>
                  <div className='mb-5'>
                    <NotificationsSW />
                  </div>
                </div>
                {/* Uncomment to add Calendar */}
                <div className='mt-5 w-full' style={{marginLeft:'21px'}}>
                  <Calendar />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
