import React, { useState } from 'react';

const Messaging = ({ feedback, patientId }) => {
    const [newFeedback, setNewFeedback] = useState('');
  
    
    const handleFeedbackSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3001/api/patients/${patientId}/feedback`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ feedback: newFeedback })
          })
          if(response.ok){
            setNewFeedback('');
            alert('Feedback submitted successfully!');
          }
          if(!response){
            console.log("error submiting feedback")
          }
          const json = await response.json()
          console.log(json)
        
    };

    return (
        <div>
            <h3>Feedback</h3>
            <p>{feedback}</p>
            <form onSubmit={handleFeedbackSubmit}>
                <textarea
                    value={newFeedback}
                    onChange={e => setNewFeedback(e.target.value)}
                    placeholder="Enter your feedback"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Messaging;
