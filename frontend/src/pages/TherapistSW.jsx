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
  'https://images.unsplash.com/photo-1606166228927-3feafb447265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.pexels.com/photos/3991782/pexels-photo-3991782.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611725.jpg',
  'https://media.istockphoto.com/id/1917170353/photo/happy-woman-nurse-and-hug-senior-patient-in-elderly-care-support-or-trust-at-old-age-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=i76hHbJZMPPewTIQzInjHoOcVFq6D-ABwZMLbjg-Va0=',
  'https://images.pexels.com/photos/4101188/pexels-photo-4101188.jpeg?auto=compress&cs=tinysrgb&w=600',
  // Add more URLs as needed
];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState([]);
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const therapistId = user?._id;

  useEffect(() => {
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
                  <Profile className='bg-white rounded-xl shadow-lg p-5 border border-[#d8b4e2]' />
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
