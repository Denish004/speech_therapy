import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate=useNavigate();
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:8080/api/user/login1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const json = await response.json();
      console.log("4",json.role);

      if (!response.ok) {
        throw new Error(json.error);
      }
      if (json.role === 'therapist') {
        console.log("6");
        
        navigate('/therapist'); // Redirect to the therapist page
      } else if (json.role === 'patient') {
        console.log("6");
        navigate('/patient'); // Redirect to the patient page
      }
      else if(json.role === 'supervisor'){
        navigate('/supervisor');
      }
      // Save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // Update the auth context
      dispatch({ type: 'LOGIN', payload: json });

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
