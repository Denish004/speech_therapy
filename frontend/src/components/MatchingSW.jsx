import React, { useState, useEffect } from 'react';

const MatchTherapists = ({ patientId }) => {
  const [patient, setPatient] = useState(null);
  const [therapists, setTherapists] = useState([]);
  const [results, setResults] = useState([]);
  const [selectedTherapistId, setSelectedTherapistId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch patient data
        const patientResponse = await fetch(`http://localhost:8080/api/patients/66d2e949ac715c9dc885c050`);
        const fetchedPatient = await patientResponse.json();
        setPatient(fetchedPatient);

        // Fetch therapists data
        const therapistsResponse = await fetch('http://localhost:8080/api/therapists');
        const fetchedTherapists = await therapistsResponse.json();
        setTherapists(fetchedTherapists);

        if (fetchedPatient && fetchedTherapists.length) {
          const matches = findBestTherapists(fetchedPatient, fetchedTherapists);
          console.log('Match Results:', matches);
          setResults(matches.slice(0, 3)); // Show only top 3 results
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
        data.gender_preference === 'Male' ? 1 : 0,
        data.speech_disorder.length || 0,
        data.severity === 'High' ? 2 : data.severity === 'Moderate' ? 1 : 0,
        data.preferred_languages.length || 0,
        data.location.zip_code || 0,
        data.budget.amount || 0
      ];
    } else if (type === 'therapist') {
      return data.map(item => [
        item.age_groups.length || 0,
        item.gender === 'Male' ? 1 : 0,
        item.specializations.length || 0,
        item.therapeutic_approaches.length || 0,
        item.languages.length || 0,
        item.location.zip_code || 0,
        item.session_cost.amount || 0
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

    const scores = therapistVectors.map((therapistVector, j) => ({
      therapistId: therapists[j]._id,
      score: 1 / (1 + euclideanDistance(patientVector, therapistVector)),
      ...therapists[j] // Add therapist details to the result
    }));

    console.log('Encoded Patient Vector:', patientVector);
    console.log('Encoded Therapist Vectors:', therapistVectors);
    console.log('Scores:', scores);

    scores.sort((a, b) => b.score - a.score);
    return scores;
  };

  const storeResults = async (patientId, therapistId, score) => {
    try {
      await fetch(`http://localhost:8080/api/matching-results/66d2e949ac715c9dc885c050`, {
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
    return <div className="text-center text-gray-700">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Matching Results for Patient {patientId}</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border-b">Therapist ID</th>
            <th className="p-2 border-b">Name</th>
            <th className="p-2 border-b">Specializations</th>
            <th className="p-2 border-b">Languages</th>
            <th className="p-2 border-b">Location</th>
            <th className="p-2 border-b">Session Cost</th>
            <th className="p-2 border-b">Match Score</th>
            <th className="p-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {results.map(({ therapistId, score, name, specializations, languages, location, session_cost }) => (
            <tr key={therapistId} className="hover:bg-gray-50">
              <td className="p-2 border-b">{therapistId}</td>
              <td className="p-2 border-b">{name}</td>
              <td className="p-2 border-b">{specializations.join(', ')}</td>
              <td className="p-2 border-b">{languages.join(', ')}</td>
              <td className="p-2 border-b">{`${location.city}, ${location.state}, ${location.country}`}</td>
              <td className="p-2 border-b">{`${session_cost.currency} ${session_cost.amount}`}</td>
              <td className="p-2 border-b">{score.toFixed(2)}</td>
              <td className="p-2 border-b">
                <button
                  onClick={() => handleClick(therapistId, score)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedTherapistId && <div className="mt-4 text-lg">Selected Therapist ID: {selectedTherapistId}</div>}
    </div>
  );
};

export default MatchTherapists;
