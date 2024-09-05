import React, { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext'; // Adjust the path as necessary
import styled from 'styled-components';
import Signin_lottie from '../lotties/bg1';
import { Navigate, useNavigate } from 'react-router-dom';


const Form = () => {
  const [formType, setFormType] = useState('patient');
  let [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [speechDisorder, setSpeechDisorder] = useState('');
  const [severity, setSeverity] = useState('');
  const [preferredLanguages, setPreferredLanguages] = useState([]);
  const [location, setLocation] = useState('');
  const [insuranceProvider, setInsuranceProvider] = useState('');
  const [budget, setBudget] = useState('');
  const [genderPreference, setGenderPreference] = useState('');
  const [culturalBackground, setCulturalBackground] = useState('');
  const [availability, setAvailability] = useState([]);

  const [specializations, setSpecializations] = useState('');
  const [ageGroups, setAgeGroups] = useState('');
  const [therapeuticApproaches, setTherapeuticApproaches] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [insuranceAccepted, setInsuranceAccepted] = useState([]);
  const [sessionCost, setSessionCost] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();
  // const { user } = useAuthContext(); // Access user from context
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  // const therapistId = user?._id;
  // const therapistId = user?._id;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(location);
    name=user.name
    // Prepare the data to be sent based on userType
    const data = user.role === 'patient' ? {
      patientId:user.id,
      name,
      age,
      speech_disorder: speechDisorder,
      severity,
      preferred_languages: preferredLanguages.split(',').map(lang => lang.trim()),
      location,
      insurance_provider: insuranceProvider,
      budget:budget,
      gender_preference: genderPreference,
      cultural_background: culturalBackground,
      availability: ["Monday", "Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    } : {
      therapistId:user.id,
      name,
      specializations:specializations.split(',').map(spec => spec.trim()), // Convert to array,
      age_groups: ageGroups.split(',').map(ageGroup => ageGroup.trim()), // Convert to array,
      therapeutic_approaches: therapeuticApproaches.split(',').map(approach => approach.trim()), // Convert to array
      languages:languages.split(',').map(lang => lang.trim()), // Convert to array
      location,
      availability:["Monday", "Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      insurance_accepted: insuranceAccepted,
      session_cost: sessionCost,
      gender,
    };

    // Define the endpoint based on the userType
    const endpoint = formType === 'patient' ? '/api/patient/register' : '/api/therapist/register';

    // Make a POST request to the backend
    fetch('http://localhost:8080'+endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        if(user && user.role ==="patient"){
          navigate('/match')
        }
        else{
          navigate('/therapist')
        }
        // Handle success, e.g., redirect or show a success message
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <>
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '-1' }}>
        <Signin_lottie />
      </div>

      <StyledWrapper>
        <form className="form" onSubmit={handleSubmit}>
          <div className="title">
            {user.role=== 'patient' ? 'Patient Registration' : 'Therapist Registration'}
          </div>

  

          <div className="form-fields">
            {user && user.role === 'patient' ? (
              <>
                <input className="input" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" type="text" required />
                <input className="input" name="age" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" type="number" required />
                <input className="input" name="speech_disorder" value={speechDisorder} onChange={(e) => setSpeechDisorder(e.target.value)} placeholder="Speech Disorder" type="text" required />
                <input className="input" name="severity" value={severity} onChange={(e) => setSeverity(e.target.value)} placeholder="Severity" type="text" required />
                <input className="input" name="preferred_languages" value={preferredLanguages} onChange={(e) => setPreferredLanguages(e.target.value)} placeholder="Preferred Languages" type="text" required />
                <input className="input" name="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" type="text" required />
                <input className="input" name="insurance_provider" value={insuranceProvider} onChange={(e) => setInsuranceProvider(e.target.value)} placeholder="Insurance Provider" type="text" required />
                <input className="input" name="budget" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Budget" type="number" required />
                <input className="input" name="gender_preference" value={genderPreference} onChange={(e) => setGenderPreference(e.target.value)} placeholder="Gender Preference" type="text" required />
                <input className="input" name="cultural_background" value={culturalBackground} onChange={(e) => setCulturalBackground(e.target.value)} placeholder="Cultural Background" type="text" required />
                <input className="input" name="availability" value={availability} onChange={(e) => setAvailability(e.target.value)} placeholder="Availability" type="text"  />
              </>
            ) : (
              <>
                <input className="input" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" type="text" required />
                <input className="input" name="specializations" value={specializations} onChange={(e) => setSpecializations(e.target.value)} placeholder="Specializations" type="text" required />
                <input className="input" name="age_groups" value={ageGroups} onChange={(e) => setAgeGroups(e.target.value)} placeholder="Age Groups" type="text" required />
                <input className="input" name="therapeutic_approaches" value={therapeuticApproaches} onChange={(e) => setTherapeuticApproaches(e.target.value)} placeholder="Therapeutic Approaches" type="text" required />
                <input className="input" name="languages" value={languages} onChange={(e) => setLanguages(e.target.value)} placeholder="Languages" type="text" required />
                <input className="input" name="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" type="text" required />
                <input className="input" name="availability" value={availability} onChange={(e) => setAvailability(e.target.value)} placeholder="Availability" type="text" />
                <input className="input" name="insurance_accepted" value={insuranceAccepted} onChange={(e) => setInsuranceAccepted(e.target.value)} placeholder="Insurance Accepted" type="text" required />
                <input className="input" name="session_cost" value={sessionCost} onChange={(e) => setSessionCost(e.target.value)} placeholder="Session Cost" type="number" required />
                <input className="input" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" type="text" required />
              </>
            )}
          </div>

          <button className="button-confirm" type="submit">Submit</button>
        </form>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  .form {
    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: beige;
    --main-color: black;
    padding: 20px;
    background: lightblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    width: 80%;
    margin: 50px auto;
  }

  .title {
    color: var(--font-color);
    font-weight: 900;
    font-size: 20px;
    margin-bottom: 15px;
    text-align: center;
  }

  .toggle-container {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .switch {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 25px;
  }

  .switch .toggle {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .switch .slider {
    position: absolute;
    cursor: pointer;
    background-color: var(--bg-color);
    border: 2px solid var(--main-color);
    border-radius: 25px;
    transition: 0.3s;
    width: 60px;
    height: 25px;
  }

  .switch .slider:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: var(--main-color);
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    transition: 0.3s;
  }

  .toggle:checked + .slider {
    background-color: var(--input-focus);
  }

  .toggle:checked + .slider:before {
    transform: translateX(35px);
  }

  .label {
    position: absolute;
    font-weight: 600;
    color: var(--font-color);
  }

  .label:first-of-type {
    left: -60px;
  }

  .label:last-of-type {
    right: -60px;
  }

  .form-fields {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }

  .input {
    width: calc(50% - 15px);
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
  }

  .input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
  }

  .input:focus {
    border: 2px solid var(--input-focus);
  }

  .button-confirm {
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 17px;
    font-weight: 600;
  }
`;

export default Form;
