import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate();
  const signup = async (email, password,name,role) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:8080/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password,name,role })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
  
    if (response.ok) {
      // save the user to local storage
      if (json.role === 'therapist') {
        console.log("6");
        
        navigate('/register'); // Redirect to the therapist page
      } else if (json.role === 'patient') {
        console.log("6");
        navigate('/register'); // Redirect to the patient page
      }
      else if(json.role === 'supervisor'){
        navigate('/supervisor');
      }
      localStorage.setItem('user', JSON.stringify(json))
    console.log('user saved to local storage')

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}