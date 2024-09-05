import React, { useState, useEffect } from 'react';
import Calendar from '../components/CalendarSW.jsx';
import Profile from '../components/ProfileSW.jsx';
import Card from '../components/PCardSW.jsx';
import Loader from '../components/LoaderSW.jsx';
import Navbar from '../components/NavbarAB.jsx';
import NotificationsSW from '../components/NotificationsSW.jsx';
import { useAuthContext } from '../hooks/useAuthContext.js';

const imageUrls = [
  'https://images.pexels.com/photos/4098354/pexels-photo-4098354.jpeg?auto=compress&cs=tinysrgb&w=600',
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
  'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611725.jpg',
  'https://media.istockphoto.com/id/1917170353/photo/happy-woman-nurse-and-hug-senior-patient-in-elderly-care-support-or-trust-at-old-age-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=i76hHbJZMPPewTIQzInjHoOcVFq6D-ABwZMLbjg-Va0=',
  'https://images.pexels.com/photos/4101188/pexels-photo-4101188.jpeg?auto=compress&cs=tinysrgb&w=600',
  // Add more URLs as needed
];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState([]);
  const [therapist, setTherapist] = useState([]);
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const therapistId = user ? (user._id ? user._id : user.id) : null;


  useEffect(() => {
    const fetchTherapist = async () => {
      console.log("yaha pe hu");
      
      if (therapistId) {
        try {
          const response = await fetch(`http://localhost:8080/api/therapistsw/${therapistId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          });
          if (!response.ok) {
            throw new Error('Failed to fetch therapist');
          }
          const therapistData = await response.json();
          setTherapist(therapistData);
          // setName(therapistData.name)
          // console.log();
          
          console.log("dekh bhai",therapistData);
          
          
        } catch (error) {
          console.error('Error fetching therapist:', error);
        }
      }
    };
    const fetchPatients = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/therapist/${therapistId}/patients`);
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      } finally {
        setLoading(false);
      }
    };
    


    fetchPatients();
    fetchTherapist();
  }, [therapistId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {!loading && <Navbar />}
      <div className='flex flex-col lg:flex-row w-full h-full min-h-screen bg-gradient-to-br from-[#f7e1e5] to-[#f3d1e4]'>
        {loading ? (
          <Loader /> 
        ) : (
          <>
            <div className='lg:w-3/4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
              {patients && patients.map((patient, index) => (
                <Card
                  key={patient._id}
                  id={patient.patientId}
                  name={patient.name}
                  description={`Speech Disorder: ${patient.speech_disorder}, Severity: ${patient.severity}`}
                  imageUrl={imageUrls[index % imageUrls.length]}
                  className='transition-transform duration-200 transform hover:scale-105 bg-gradient-to-br from-[#d8b4e2] to-[#c084fc] shadow-lg rounded-xl p-6 text-white'
                />
              ))}
            </div>
            <div className='lg:w-1/4 w-full flex flex-col items-center lg:items-start p-6'>
              <div className='flex flex-col justify-between w-full space-y-6'>
                <div className='lg:mt-6 lg:ml-10'>
                {therapist ? (
        <Profile
          name={therapist.name} // Pass therapist's name to Profile component
          className='bg-white rounded-xl shadow-lg p-5 border border-[#d8b4e2]'
        />
      ) : (
        <p>Loading...</p> // Show a loading message until therapist data is available
      )}
                </div>
                <div className='mt-10 lg:ml-12 w-full'>
                  <span className='font-bold ml-14 text-lg text-[#6b21a8]'>Reschedule Requests</span>
                  <div className='space-y-5'>
                    <NotificationsSW message={"Rahul's request"} className='bg-white rounded-xl shadow-md p-3 border border-[#c084fc]' />
                    <NotificationsSW message={"Rohan's request"} className='bg-white rounded-xl shadow-md p-3 border border-[#c084fc]' />
                    <NotificationsSW message={"Ankit's request"} className='bg-white rounded-xl shadow-md p-3 border border-[#c084fc]' />
                  </div>
                </div>
                <div className='w-full mt-10'>
                  <Calendar className='bg-gradient-to-br from-[#ece9f2] to-[#f3d1e4] rounded-xl shadow-lg p-5' />
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
