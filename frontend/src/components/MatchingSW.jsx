import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext.js';
import Loader from './LoaderSW';
import Navbar from './NavbarAB';

const MatchTherapists = () => {
  const [patient, setPatient] = useState(null);
  const [therapists, setTherapists] = useState([]);
  const [results, setResults] = useState([]);
  const [selectedTherapistId, setSelectedTherapistId] = useState(null);
  // const {user} = useAuthContext();
  // const patientId = "66d7f4e9a677a6462e8d479a";
  const [loading, setLoading] = useState(true);

  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const patientId = user?._id; // Safely access _id if user exists
  console.log(user);
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch patient data
        console.log("getting patient");
        const patientResponse = await fetch(`http://localhost:8080/api/patients/${patientId}`);
        const fetchedPatient = await patientResponse.json();
        console.log(fetchedPatient);
        setPatient(fetchedPatient);

        // Fetch therapists data
        const therapistsResponse = await fetch('http://localhost:8080/api/therapists');
        const fetchedTherapists = await therapistsResponse.json();
        setTherapists(fetchedTherapists);
        console.log(therapistsResponse);
        

        if (fetchedPatient && fetchedTherapists.length) {
          const matches = findBestTherapists(fetchedPatient, fetchedTherapists);
          console.log('Match Results:', matches);
          setResults(matches);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [patientId]);

  const euclideanDistance = (vecA, vecB) => {
    return Math.sqrt(vecA.reduce((sum, value, index) => sum + (value - vecB[index]) ** 2, 0));
  };

  const encodeData = (data, type) => {
    if (type === 'patient') {
      return [
        data.age || 0,
        data.gender_preference === 'Male' ? 1 : data.gender_preference === 'Female' ? -1 : 0,
        (data.speech_disorder && data.speech_disorder.length) || 0, // Safe check for undefined or null
        data.severity === 'High' ? 2 : data.severity === 'Moderate' ? 1 : 0,
        (data.preferred_languages && data.preferred_languages.length) || 0, // Safe check for undefined or null
        data.location?.zip_code || 0, // Safe check for undefined or null
        data.budget?.amount || 0, // Safe check for undefined or null
        (data.cultural_background && data.cultural_background.length) || 0 // Safe check for undefined or null
      ];
    } else if (type === 'therapist') {
      return data.map(item => [
        (item.age_groups && item.age_groups.length) || 0, // Safe check for undefined or null
        item.gender === 'Male' ? 1 : item.gender === 'Female' ? -1 : 0,
        (item.specializations && item.specializations.length) || 0, // Safe check for undefined or null
        (item.therapeutic_approaches && item.therapeutic_approaches.length) || 0, // Safe check for undefined or null
        (item.languages && item.languages.length) || 0, // Safe check for undefined or null
        item.location?.zip_code || 0, // Safe check for undefined or null
        item.session_cost?.amount || 0, // Safe check for undefined or null
        (item.cultural_background && item.cultural_background.length) || 0 // Safe check for undefined or null
      ]);
    }
  };
  
  const normalizeData = (data) => {
    const means = data[0].map((_, i) => data.map(row => row[i]).reduce((a, b) => a + b, 0) / data.length);
    const stdDevs = data[0].map((_, i) => Math.sqrt(data.map(row => (row[i] - means[i]) ** 2).reduce((a, b) => a + b, 0) / data.length));
    return data.map(vector => vector.map((val, i) => (val - means[i]) / (stdDevs[i] || 1)));
  };

  const findBestTherapists = (patient, therapists) => {
    const patientVector = normalizeData([encodeData(patient, 'patient')])[0];
    const therapistVectors = normalizeData(encodeData(therapists, 'therapist'));

    const scores = therapistVectors.map((therapistVector, j) => {
      let score = 1 / (1 + euclideanDistance(patientVector, therapistVector));
      
      // Add preferences-based scoring
      const languageMatch = patient.preferred_languages.some(lang => therapists[j].languages.includes(lang));
      const culturalMatch = patient.cultural_background === therapists[j].cultural_background;
      const locationProximity = Math.abs(patient.location.zip_code - therapists[j].location.zip_code) <= 50; // Within 50 units of proximity

      // Adjust score based on additional matches
      if (languageMatch) score += 0.1; // Give a small boost for language match
      if (culturalMatch) score += 0.1; // Give a small boost for cultural background match
      if (locationProximity) score += 0.05; // Give a small boost for location proximity

      return {
        therapistId: therapists[j]._id,
        score,
        ...therapists[j]
      };
    });

    scores.sort((a, b) => b.score - a.score);
    return scores;
  };

  const storeResults = async (patientId, therapistId, score) => {
    try {
      await fetch(`http:localhost:8080/api/matching-results/${patientId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          therapistId,
          score
        }),
      });
    } catch (error) {
      console.error('Error storing results:', error);
    }
  };

  const handleClick = (therapistId, score) => {
    setSelectedTherapistId(therapistId);
    storeResults(patientId, therapistId, score);
  };

  if (!patient || !therapists.length) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Matching Results for Patient {patientId}</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            <th className="py-2 px-4 text-left">Therapist ID</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Specializations</th>
            <th className="py-2 px-4 text-left">Languages</th>
            <th className="py-2 px-4 text-left">Location</th>
            <th className="py-2 px-4 text-left">Session Cost</th>
            <th className="py-2 px-4 text-left">Match Score</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {results.slice(0, 3).map(({ therapistId, score, name, specializations, languages, location, session_cost }) => (
            <tr key={therapistId} className="border-b border-gray-300">
              <td className="py-2 px-4">{therapistId}</td>
              <td className="py-2 px-4">{name}</td>
              <td className="py-2 px-4">{specializations.join(', ')}</td>
              <td className="py-2 px-4">{languages.join(', ')}</td>
              <td className="py-2 px-4">{`${location.city}, ${location.state}, ${location.country}`}</td>
              <td className="py-2 px-4">{`${session_cost.currency} ${session_cost.amount}`}</td>
              <td className="py-2 px-4">{score.toFixed(2)}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleClick(therapistId, score)}
                  className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedTherapistId && <div className="mt-4">Selected Therapist ID: {selectedTherapistId}</div>}
    </div>

    
    
    
  );
  
};

export default MatchTherapists;
